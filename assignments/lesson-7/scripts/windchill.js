// Calculate and output windchill factor

var high = parseFloat(document.getElementById("hightemp").innerHTML);
var low = parseFloat(document.getElementById("lowtemp").innerHTML);
var mph = parseFloat(document.getElementById("windspeed").innerHTML);
var avgTemp = (high + low) / 2;

// According to the Interknots, the formula is apparently only valid for a specific temperature range
if ((avgTemp >= -50) && (avgTemp <= 50)) {
    var chill = 35.74 + (0.6215 * avgTemp) - (35.75 * Math.pow(mph, 0.16)) + (0.4275 * avgTemp * Math.pow(mph, 0.16));
    document.getElementById("windchill").innerHTML = chill.toFixed(1) + "&deg;F";
} else {
    document.getElementById("windchill").innerHTML = "N/A";
}
