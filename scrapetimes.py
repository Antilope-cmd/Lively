import json
import requests
from bs4 import BeautifulSoup


##################################################################################################
                        #YOUR MOSQUE URL HERE#
mosque_url = "https://mawaqit.net/en/mosquee-tawhid-saint-denis-93200-france"
##################################################################################################

response = requests.get(mosque_url)

if response.status_code != 200:
    raise RuntimeError(f"Could not resolve {mosque_url}")

soup = BeautifulSoup(response.text, "html.parser")

script = soup.find("script") or BeautifulSoup(requests.get("https://example.com/", "html.parser").text) #Backup empty page
script_text:str = script.text

if not "let confData = " in script.text:
    raise RuntimeError("Could not find confData for prayer_times")

script_lines = script_text.split(sep="\n")
raw_confData = ""
for index, line in enumerate(script_lines):
    if "let confData = " in line:
        raw_confData = line
confData = raw_confData.removeprefix("    let confData = ")
confData = confData.removesuffix(';')
data = json.loads(confData)




calendar_times = eval(str(data.get("calendar")))

filename = "scripts/calendarlist.js"
with open(filename, "w") as f:
    f.write("window.prayer_calendar = ")
    json.dump(calendar_times, f, indent=4)