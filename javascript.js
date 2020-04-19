function displayDate() {
    const d = new Date();
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    let currentDayName = days[d.getDay()];

    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
        let currentMonthName = months[d.getMonth()];

    const currentDate = d.getDate();
    const currentYear = d.getFullYear();
    const currentDateFormated = `${currentDayName} ${currentMonthName} ${currentDate}, ${currentYear}`;
    document.getElementById("currentDate").innerHTML = currentDateFormated;
}

function displayQuarantineDay() {
    const quarantineStart = new Date('03/17/2020');
    const d = new Date();
    let DifferenceStartQuarantineTime = d.getTime() - quarantineStart.getTime();
    let DifferenceStartQuarantineDays = DifferenceStartQuarantineTime / (1000 * 3600 * 24);


    const quarantineDay = Math.floor(DifferenceStartQuarantineDays)+1;
    console.log(quarantineDay);
    document.getElementById("quarantineDay").innerHTML = quarantineDay;
}

function render() {
    displayDate();
    displayQuarantineDay();
}

function displayActivity() {
    let activity = [
        "Do some sports 🚴‍♀️",
        "Bake some cookies 🍪",
        "Have a beer 🍺",
        "Read a book 📚",
        "Call your best friend 📱",
        "Buy a puzzle 🧩",
        "Clean your windows 🧼",
        "Take a shower 🛀",
        "Take a hot bath 🛁"
    ];
    const selectedActivity = activity[Math.floor(Math.random()*activity.length)];


    let activityElement = document.createElement('p');
    activityElement.textContent = selectedActivity;
    activityElement.setAttribute('id', 'activity');
    document.getElementById("activity-selector").appendChild(activityElement);
    document.getElementById("activity-button").remove();
} 