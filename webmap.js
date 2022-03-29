// Import the leaflet package
var L = require("leaflet");

// Creates a leaflet map binded to an html <div> with id "map"
// setView will set the initial map view to the location at coordinates
// 13 represents the initial zoom level with higher values being more zoomed in
var map = L.map("map").setView([37.9709797, 23.7241881], 20);

// Adds the basemap tiles to your web map
// Additional providers are available at: https://leaflet-extras.github.io/leaflet-providers/preview/
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  maxZoom: 19,
  attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
}).addTo(map);

// Adds a popup marker to the webmap for GGL address
map.on("click", function (e) {
  var lt = String(e.latlng.lat),
    lg = String(e.latlng.lng);
  var popup = L.popup()
    .setLatLng(e.latlng)
    .setContent(lt + " " + lg)
    .openOn(map);
});
