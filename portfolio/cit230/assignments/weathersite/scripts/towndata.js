/*
 * Fill in the town data on the homepage
 */

// Request the town data JSON
var reqURL = "https://byui-cit230.github.io/weather/data/towndata.json";
var req = new XMLHttpRequest();
req.open('GET', reqURL);
req.responseType = 'json';
req.send();

// Loop through all the towns once the JSON finishes loading
req.onload = function() {
    var reqData = req.response;
    for (i = 0; i < reqData['towns'].length; i++)
        fillTownData(reqData['towns'][i]);
}

// Fill in the town data, but only if placeholder targets exist
function fillTownData(townData) {
    var nameID = townData.name.toLowerCase() + "-data";
    var baseElem = document.getElementById(nameID);

    // Skip any towns that don't have HTML placeholders, i.e. Placerton
    if (baseElem == undefined) {
        return;
    }

    // City Name
    var dataElem = document.createElement('h3');
    dataElem.textContent = townData.name;
    baseElem.appendChild(dataElem);

    // Motto
    dataElem = document.createElement('i');
    dataElem.textContent = townData.motto;
    baseElem.appendChild(dataElem);

    // Year Founded
    dataElem = document.createElement('div');
    var emphasisElem = document.createElement('b');
    emphasisElem.textContent = "Founded: ";
    var textElem = document.createTextNode(townData.yearFounded.toString());
    dataElem.appendChild(emphasisElem);
    dataElem.appendChild(textElem);
    baseElem.appendChild(dataElem);

    // Population
    dataElem = document.createElement('div');
    emphasisElem = document.createElement('b');
    emphasisElem.textContent = "Population: ";
    textElem = document.createTextNode(townData.currentPopulation.toString());
    dataElem.appendChild(emphasisElem);
    dataElem.appendChild(textElem);
    baseElem.appendChild(dataElem);

    // Annual Rainfall
    dataElem = document.createElement('div');
    emphasisElem = document.createElement('b');
    emphasisElem.textContent = "Annual rainfall: ";
    textElem = document.createTextNode(townData.averageRainfall.toString() + " inches");
    dataElem.appendChild(emphasisElem);
    dataElem.appendChild(textElem);
    baseElem.appendChild(dataElem);
}
