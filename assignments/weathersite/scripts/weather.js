/*
 * Fill in the town page weather data
 */

function getFahrenheitStr(celsius) {
    var f = (1.8 * celsius) + 32;
    return f.toFixed(0).toString();
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
    var eCondImg  = document.getElementById("conditions-picture");

    eWindSpeed.textContent = data.windSpeed + " " + data.windDirection;
    eCondShort.textContent = data.shortForecast;
    eCondLong.innerHTML    = "<b><i>Details: </i></b>" + data.detailedForecast;
    eCondImg.setAttribute("src", data.icon);
}

function fillForecast(data) {
    var tableBody = document.getElementById("tenday-data");
    var tableRow = document.createElement('tr');
    for (i = 1; i < 11; i++) {
        var dataElem = document.createElement('td');
        dataElem.innerHTML = data[i].temperature.toString() + "&deg;F";
        tableRow.appendChild(dataElem);
    }
    tableBody.appendChild(tableRow);
}

function loadWeather() {
    gridpoint = document.getElementById("weather-info").getAttribute("gridpoint");

    // Today's high, low, windchill and precip are only in detailed data; forecast is used for everything else.
    // And yeah... I know I could easily use OpenWeatherMap, but I'd already figured
    // out this API by the time all the instructions for that were discussed...
    wdetailsURL = "https://api.weather.gov/gridpoints/" + gridpoint;
    wdetails = new XMLHttpRequest();
    wdetails.open('GET', wdetailsURL);
    wdetails.responseType = 'json';
    wdetails.send();
    wdetails.onload = function() {
        fillSummaryTemps(wdetails.response.properties);
    }

    forecastURL = "https://api.weather.gov/gridpoints/" + gridpoint + "/forecast";
    forecast = new XMLHttpRequest();
    forecast.open('GET', forecastURL);
    forecast.responseType = 'json';
    forecast.send();
    forecast.onload = function() {
        fillSummaryDetails(forecast.response.properties.periods[0]);
        fillForecast(forecast.response.properties.periods);
    }
}
