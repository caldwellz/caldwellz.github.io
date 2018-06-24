/*
 * Fill in the Franklin Page weather data
 */

// Request the town data JSON
var reqURL = "https://api.weather.gov/gridpoints/MPX/54,50/forecast";
var req = new XMLHttpRequest();
req.open('GET', reqURL);
req.responseType = 'json';
req.send();

req.onload = function() {
    var reqData = req.response;
    fillSummary(reqData.properties.periods[0]);
    fillForecast(reqData.properties.periods);
}

function fillSummary(data) {
    return;
}

function fillForecast(data) {
    var tableRow = document.getElementById("tenday-data");
    for (i = 1; i < 11; i++) {
        var dataElem = document.createElement('td');
        dataElem.innerHTML = data[i].temperature.toString() + "&deg;F";
        tableRow.appendChild(dataElem);
    }
}
