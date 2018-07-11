/*
 * Fill in the services table
 */


// Fill in individual service data
function fillService(service) {

}


// Main function to request the services JSON
function loadServices() {
   var reqURL = "/data/services.json";
   var req = new XMLHttpRequest();
   req.open('GET', reqURL);
   req.responseType = 'json';
   req.send();
   req.onload = function() {
      // Loop through all the services once the JSON finishes loading
      var reqData = req.response;
      for (i = 0; i < reqData['services'].length; i++)
         fillService(reqData['services'][i]);
   }
}
