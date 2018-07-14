/*
 * Fill in the services table
 */


var reqURL = "data/services.json";
var req = new XMLHttpRequest();
req.onload = function() {
   // Add all the services once the JSON finishes loading
   var response = req.response;
   $.each(response.services, function(i, item) {
       var tr = $("<tr>").append(
           $("<td>").text(item.name),
           $("<td>").text('$' + item.price.toFixed(2)));
       $("#services-box table").append(tr);
   });
}
req.responseType = 'json';
req.open('GET', reqURL);
req.send();
