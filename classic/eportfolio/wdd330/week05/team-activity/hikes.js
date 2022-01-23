
window.Hikes = window.Hikes || {};

Hikes.imgBasePath = "//byui-cit.github.io/cit261/examples/";
Hikes.hikeListElement = document.getElementById("hikes");

Hikes.showHikeList = function () {
  Hikes.hikeListElement.innerHTML = "";
  Hikes.renderHikeList(Hikes.hikeList, Hikes.hikeListElement);
}

Hikes.renderHikeList = function (hikes, parent) {
  for (id in hikes) {
    parent.appendChild(Hikes.renderOneHike(id));
  };
}

Hikes.renderOneHike = function (hikeID) {
  const item = document.createElement("li");
  const hike = Hikes.hikeList[hikeID];

  item.innerHTML = `<a href="#" onclick="Hikes.showHikeDetails(${hikeID})">
          <h2>${hike.name}</h2>
          <div class="image"><img src="${Hikes.imgBasePath}${hike.imgSrc}" alt="${hike.imgAlt}"></div>
        </a>
        <div class="hikeText">
                <div>
                    <h3>Distance</h3>
                    <p>${hike.distance}</p>
                </div>
                <div>
                    <h3>Difficulty</h3>
                    <p>${hike.difficulty}</p>
                </div>
        </div>`;

  return item;
}

Hikes.showHikeDetails = function (hikeID) {
  const hike = Hikes.hikeList[hikeID];
  const hikeDetails = `<div id="hikeDetails">
        <a href="#" onclick="Hikes.showHikeList()">
          <h2>${hike.name}</h2>
          <div class="hikeText">
                  <div>
                      <h3>Details</h3>
                      <p>${hike.description}</p>
                  </div>
                  <div>
                      <h3>Directions</h3>
                      <p>${hike.directions}</p>
                  </div>
          </div>
        </a>`;

  Hikes.hikeListElement.innerHTML = hikeDetails;
}
