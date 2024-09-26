var map = L.map('map').fitWorld();

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 30,
    attribution: '© OpenStreetMap'
}).addTo(map);

function mboxFunction() {
    var mbox = document.getElementById("mbox");
    mbox.classList.toggle("expandmbox");
}
