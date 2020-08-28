
function displayDate() {
    const d = new Date();
    let days = ["Sonntag", "Montag", "Dienstag", "Mittwoch", "Donnerstag", "Freitag", "Samstag"];
    let currentDayName = days[d.getDay()];

    let months = ["Januar", "Februar", "März", "April", "Mai", "Juni", "Juli", "August", "September", "Oktober", "November", "Dezember"]
        let currentMonthName = months[d.getMonth()];

    const currentDate = d.getDate();
    const currentYear = d.getFullYear();
    const currentDateFormated = `${currentDayName} ${currentDate}. ${currentMonthName} ${currentYear}`;
    document.getElementById("currentDate").innerHTML = currentDateFormated;
}

function displayMotherDay() {
    const motherStart = new Date('11/28/1990');
    const dateOfTheDay = new Date();
    let DifferenceStartMotherTime = dateOfTheDay.getTime() - motherStart.getTime();
    let DifferenceStartMotherSeconds = DifferenceStartMotherTime / 1000;
    let DifferenceStartMotherMinutes = DifferenceStartMotherTime / (1000 * 60);
    let DifferenceStartMotherHours = DifferenceStartMotherTime / (1000 * 3600);
    let DifferenceStartMotherDays = DifferenceStartMotherTime / (1000 * 3600 * 24);
    let DifferenceStartMotherYears = DifferenceStartMotherTime / (1000 * 3600 * 24 * 365.4);
    let DifferenceStartMotherMonths = (dateOfTheDay.getFullYear() - motherStart.getFullYear()) * 12 + dateOfTheDay.getMonth() - motherStart.getMonth();


    const motherDay = Math.floor(DifferenceStartMotherDays)+1;
    document.getElementById("motherDay").innerHTML = motherDay;

    const motherMonth = Math.floor(DifferenceStartMotherMonths);
    document.getElementById("motherMonth").innerHTML = motherMonth;

    const motherYear = Math.floor(DifferenceStartMotherYears);
    document.getElementById("motherYear").innerHTML = motherYear;

    const motherHour = Math.floor(DifferenceStartMotherHours);
    document.getElementById("motherHour").innerHTML = motherHour;

    const motherMinute = Math.floor(DifferenceStartMotherMinutes);
    document.getElementById("motherMinute").innerHTML = motherMinute;

    const motherSecond = Math.floor(DifferenceStartMotherSeconds);
    document.getElementById("motherSecond").innerHTML = motherSecond;

    document.getElementById("motherAll").innerHTML = motherYear + "Jahre " + motherMonth + "Monate " + motherDay + "Tage " + motherHour + "Std. "
  + motherMinute + "Min. " + motherSecond + "Sek. ";
  
}

function render() {
    displayDate();
    displayMotherDay();
}

function displayActivity() {
    let activity = [
        "Ich hab dich lieb ❤️",
        "Ich bin nur einen Anruf entfernt 📲",
        "Trinke auf die beste Mama 🥂",
        "In ein paar Wochen sind wir da 😍",
        "Bald geht's wieder zum Wellness 🧼",
        "Hast du die Mona Lisa schon gemalt!? 🤨",
        "Ist das Puzzle fertig? 🧩",
        "Hallo, wie war dein Tag?",
        "Kuss 😘",
        "Danke, dass du meine Mama bist",
        "Ich freue mich schon aufs nächste Mal",
        "Ganz Liebe Grüße",
        "Immer positiv denken. Andere wohnen noch weiter weg 😉",
        "Gäbe es kein Frankreich, gäbe es auch keinen Käse und Wein 😅",
        "Einen schönen Tag, Lieblingsmama! ❤️",
        "Gib Papa einen Kuss von mir",
        "Sag Papa, er soll dir einen Kuss von mir geben",
        "Ganz viele Küsse",
        "Bonjour, Je t'aime 😍",
        "Marmor, Stein und Eisen bricht, aber unsere Liebe nicht 🎵",
        "Hab dich Lieb ❤️",
        "Bisou 😚",
        "Hugs & kisses",
        "Bereite doch schon mal unser Bett für das nächste Mal vor",
        "Heute einmal ein wenig entspannen... 🛀"
    ];
    const selectedActivity = activity[Math.floor(Math.random()*activity.length)];


    let activityElement = document.createElement('p');
    activityElement.textContent = selectedActivity;
    activityElement.setAttribute('id', 'activity');
    document.getElementById("activity-selector").appendChild(activityElement);
    document.getElementById("activity-button").remove();
} 