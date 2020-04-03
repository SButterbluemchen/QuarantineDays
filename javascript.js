function displayDate() {
    const d = new Date();
    let currentDay = new Array(7);
        currentDay[0] = "Sunday";
        currentDay[1] = "Monday";
        currentDay[2] = "Tuesday";
        currentDay[3] = "Wednesday";
        currentDay[4] = "Thursday";
        currentDay[5] = "Friday";
        currentDay[6] = "Saturday";
        let currentDayName = currentDay[d.getDay()];

    let currentMonth = new Array(12);
        currentMonth[1] = "January";
        currentMonth[2] = "February";
        currentMonth[3] = "March";
        currentMonth[4] = "April";
        currentMonth[5] = "May";
        currentMonth[6] = "June";
        currentMonth[7] = "July";
        currentMonth[8] = "August";
        currentMonth[9] = "September";
        currentMonth[10] = "October";
        currentMonth[11] = "November";
        currentMonth[12] = "December";
        let currentMonthName = currentMonth[d.getMonth()];

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