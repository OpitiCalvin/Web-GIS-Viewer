const public_funguo =
  "pk.eyJ1Ijoib3BpdGljYWx2aW4iLCJhIjoiY2x0ZzFvaWVmMHphdzJpcGJzNXdpNWR5ZyJ9.jbz4zhpsUFC0gCUh50lC4Q";

//api.mapbox.com/v4/mapbox.mapbox-streets-v8/1/0/0.mvt?access_token=
https: var osmLayer = L.tileLayer("https://{s}.tile.osm.org/{z}/{x}/{y}.png", {
  attribution:
    '&copy; <a href="https://osm.org/copyright">OpenStreetMap</a> contributors',
});

var oslTilelayer = L.tileLayer(
  `https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=${public_funguo}`,
  {
    maxZoom: 18,
    attribution:
      'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, ' +
      '<a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
      'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    id: "mapbox.light",
  }
);

var streets = L.tileLayer(
  `https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=${public_funguo}`,
  {
    maxZoom: 18,
    attribution:
      'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, ' +
      '<a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
      'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    id: "mapbox.streets",
  }
);

// Determine location of user using user's IP address.
// var pos = L.GeoIP.getPosition();
// console.log(pos);

//var mymap = L.map('mapid').setView([51.505, -0.09], 13);
var mymap = L.map("mapid", {
  center: [-26.21, 28.03], //-26.206902, 28.031237
  zoom: 13,
  layers: [osmLayer, oslTilelayer, streets],
});

var baseMaps = {
  "Mapbox Light": oslTilelayer,
  "Mapbox Streets": streets,
  OSM: osmLayer,
};

var overlayMaps = {};

// console.log(baseMaps["OSM"]._url)
var lc = L.control
  .layers(baseMaps, overlayMaps, { collapsed: true })
  .addTo(mymap);

var popup = L.popup();
