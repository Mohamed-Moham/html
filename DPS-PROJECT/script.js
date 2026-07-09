console.log("javascript is working");
const mission = document.getElementById("mission-title");
const button = document.getElementById("complete-button");
const checkButton = document.getElementById("check-button");
const progress = document.getElementById("js-progress");
let score = 40;
const greeting = document.getElementById("greeting");
const todayDate = document.getElementById("Today-date");
const quote = document.getElementById("quote");
const weather = document.getElementById("weather");


const hour = new Date().getHours();

if (hour < 12) {
    greeting.innerHTML = "Good Morning";
}

else if (hour < 18) {
    greeting.innerHTML = "Good Afternoon";
}
else {
    greeting.innerHTML = "Good Evening";
}

todayDate.innerHTML = new Date().toDateString();

const quotes = [
    "Never give up on your dreams.",
    "Believe in yourself and all that you are.",
    "Success is not final, failure is not fatal: It is the courage to continue that counts.",
    "The only way to do great work is to love what you do.",
    "Don't watch the clock; do what it does. Keep going.",
    "Practice makes perfect.Keep learning and improving.",
    "Don't be afraid to fail. Be afraid not to try.",
];

const randomIndex = Math.floor(Math.random() * quotes.length);
quote.innerHTML = quotes[randomIndex];

weather.innerHTML = "Weather London: 20°C, Party Cloudy ";

const missions = [
    "Study HTML CSS and JavaScript",
    "PRACTICE HTML CSS and JavaScript",
    "Build a project using HTML CSS and JavaScript",
    "Solve a problem using HTML CSS and JavaScript",
    
]
const todaymission = {
    title: "Study HTML CSS and JavaScript",
    Priority: "High",
    Time: "2 hours",
    Deadline: "Today",
};


const MissionIndex = Math.floor(Math.random() * missions.length);
mission.innerHTML = missions[MissionIndex];

button.onclick = function () {
    mission.innerHTML = "javascript Completed";
    mission.style.color = "green";
    progress.innerHTML = "JavaScript - 100%";
    button.innerHTML = "Completed";
    button.style.backgroundColor = "green";
    button.style.color = "white";
    button.disabled = true;
}

checkButton.onclick = function () {
    if (score >= 50) {
        progress.innerHTML = "JavaScript - 100%";
        
    }

    else {
        progress.innerHTML = "JavaScript - Failed";
    }
}  