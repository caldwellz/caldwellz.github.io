function setCurrentDate() {
    var today = new Date();
    var allWeekdays = new Array(7);
    var allMonths = new Array(12);

    allWeekdays[0] = "Sunday";
    allWeekdays[1] = "Monday";
    allWeekdays[2] = "Tuesday";
    allWeekdays[3] = "Wednesday";
    allWeekdays[4] = "Thursday";
    allWeekdays[5] = "Friday";
    allWeekdays[6] = "Saturday";

    allMonths[0] = "January";
    allMonths[1] = "February";
    allMonths[2] = "March";
    allMonths[3] = "April";
    allMonths[4] = "May";
    allMonths[5] = "June";
    allMonths[6] = "July";
    allMonths[7] = "August";
    allMonths[8] = "September";
    allMonths[9] = "October";
    allMonths[10] = "November";
    allMonths[11] = "December";

    var day = today.getDate();
    var month = today.getMonth();
    var year = today.getFullYear();
    var dayName = allWeekdays[today.getDay()];
    var monthName = allMonths[month];
    var dateString = dayName + ", " + day.toString() + " " + monthName + " " + year.toString();

    document.getElementById("currentdate").innerHTML = dateString;
}
