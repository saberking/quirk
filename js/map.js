var map = L.map('map').setView([53.39308, -1.42495], 13);
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy<a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);
console.log(document.body.getAttribute("data-root"));
var marker = L.icon({
    iconUrl: 'user/pages/images/logo.png',
    shadowUrl: 'user/pages/images/logo-shadow.png',

    iconSize:     [19, 34], // size of the icon
    shadowSize:   [38, 17], // size of the shadow
    iconAnchor:   [5, 27], // point of the icon which will correspond to marker's location
    shadowAnchor: [5, 7],  // the same for the shadow
    popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
});
L.marker([53.39308, -1.42495], {icon: marker}).addTo(map);