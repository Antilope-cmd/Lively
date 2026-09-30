var videoPlayer = document.getElementById("videoplayer");
var bg_choosing = document.getElementById("choosing");

let titles = [
    "Black hole",
    "Blue Fantasy river",
    "Last train to eden",
    "Lost in the endless sky",
    "Mist over the pines",
    "Mountain valley",
    "Overseas",
    "Sunny ruins",
    "Whispering lights Forest"
];


let folder = [
    "video/black-hole-sun-moewalls-com.mp4",
    "video/blue-fantasy-river.mp4",
    "video/last-train-to-eden.mp4",
    "video/lost-in-the-endless-sky.mp4",
    "video/mist-over-the-pines.mp4",
    "video/mountain-valley.mp4",
    "video/overseas.mp4",
    "video/sunny_ruins.mp4",
    "video/whispering-lights-forest.mp4"
];

folder.forEach((path, index) => {
    const option = document.createElement("option");
    option.value = path;
    option.textContent = titles[index];
    bg_choosing.add(option);
});

bg_choosing.addEventListener("change", changeVideo);

const draggable = document.getElementById("draggable");
const prayers = document.getElementById("prayers");

function livelyPropertyListener(name, value) {
    const numericValue = Number(value);
    if (!Number.isFinite(numericValue)) return;

    switch (name) {
        case "draggableX":
            draggable.style.left = `${numericValue}%`;
            break;
        case "draggableY":
            draggable.style.top = `${numericValue}%`;
            break;
        case "prayersX":
            prayers.style.left = `${numericValue}%`;
            break;
        case "prayersY":
            prayers.style.top = `${numericValue}%`;
            break;
        case "PrayerWidgetScale":
            prayers.style.setProperty(
                "--prayer-scale",
                String(numericValue/100)
            );
            break;
    }
}

function changeVideo(){
    videoPlayer.pause();

    var video_path = bg_choosing.value;
    videoPlayer.setAttribute("src", video_path);

    videoPlayer.load();
    videoPlayer.play();
}