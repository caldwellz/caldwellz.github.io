/*
 * Fill in the Franklin Page weather data
 */

// Today's high, low, windchill and precip are only in detailed data; forecast is used for everything else.
// And yeah... I know I could use OpenWeatherMap, but I'd already figured
// out this API by the time all the instructions for that were discussed.
var wdetailsURL = "https://api.weather.gov/gridpoints/MPX/54,50";
var wdetails = new XMLHttpRequest();
wdetails.open('GET', wdetailsURL);
wdetails.responseType = 'json';
wdetails.send();
wdetails.onload = function() {
    fillSummaryTemps(wdetails.response.properties);
}

var forecastURL = "https://api.weather.gov/gridpoints/MPX/54,50/forecast";
var forecast = new XMLHttpRequest();
forecast.open('GET', forecastURL);
forecast.responseType = 'json';
forecast.send();
forecast.onload = function() {
    fillSummaryDetails(forecast.response.properties.periods[0]);
    fillForecast(forecast.response.properties.periods);
}

function fillSummaryTemps(data) {
    var eHighTemp  = document.getElementById("highTempNum");
    var eLowTemp   = document.getElementById("lowTempNum");
    var ePrecip = document.getElementById("precipitation");
    var eWindChill = document.getElementById("windchill");

    eHighTemp.textContent  = getFahrenheitStr(data.maxTemperature.values[0].value);
    eLowTemp.textContent   = getFahrenheitStr(data.minTemperature.values[0].value);
    ePrecip.textContent    = data.probabilityOfPrecipitation.values[0].value.toString() + "%";
    eWindChill.textContent = getFahrenheitStr(data.windChill.values[0].value);
}

function fillSummaryDetails(data) {
    var eWindSpeed = document.getElementById("windspeed");
    var eCondShort = document.getElementById("conditions-short");
    var eCondLong  = document.getElementById("conditions-long");
    var eCondPict  = document.getElementById("conditions-picture");

    eWindSpeed.textContent = data.windSpeed + " " + data.windDirection;
    eCondShort.textContent = data.shortForecast;
    eCondLong.innerHTML    = "<i>Details: </i>" + data.detailedForecast;

    imgElem = document.createElement('img');
    imgElem.setAttribute("src", data.icon);
    imgElem.setAttribute("alt", "Weather conditions icon");
    eCondPict.appendChild(imgElem);
}

function fillForecast(data) {
    var tableRow = document.getElementById("tenday-data");
    for (i = 1; i < 11; i++) {
        var dataElem = document.createElement('td');
        dataElem.innerHTML = data[i].temperature.toString() + "&deg;F";
        tableRow.appendChild(dataElem);
    }
}

function getFahrenheitStr(celsius) {
    var f = (1.8 * celsius) + 32;
    return f.toFixed(0).toString();
}
