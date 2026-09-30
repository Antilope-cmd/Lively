
let displayedDate;
const prayer_calendar = window.prayer_calendar;

const prayerElements = {
    fajr: document.getElementById("fajr"),
    zohr: document.getElementById("zohr"),
    asr: document.getElementById("asr"),
    maghrib: document.getElementById("maghrib"),
    isha: document.getElementById("isha")
};

function updatePrayers(now = new Date()) {
    const i = now.getMonth();
    const j = now.getDate();
    console.log(i, j);
    const month = prayer_calendar[now.getMonth()];
    const prayerTimes = month?.[String(now.getDate())];
    
    if (!Array.isArray(prayerTimes) || prayerTimes.length < 6) {
        console.error("No prayer times found for the current date.");
        return;
    }

    console.log(prayerTimes)

    prayerElements.fajr.textContent = `Fajr - ${prayerTimes[0]}`;
    prayerElements.zohr.textContent = `Zohr - ${prayerTimes[2]}`;
    prayerElements.asr.textContent = `Asr - ${prayerTimes[3]}`;
    prayerElements.maghrib.textContent = `Maghrib - ${prayerTimes[4]}`;
    prayerElements.isha.textContent = `Isha - ${prayerTimes[5]}`;
    displayedDate = `${now.getFullYear()}-${now.getMonth()}-${now.getDate()}`;
}

updatePrayers();
console.log(prayerTimes)

setInterval(() => {
    const now = new Date();
    const currentDate = `${now.getFullYear()}-${now.getMonth()}-${now.getDate()}`;
    if (currentDate !== displayedDate) updatePrayers(now);
}, 60_000);