var map = L.map('map').fitWorld();

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 30,
    attribution: '© OpenStreetMap'
}).addTo(map);

map.locate({setView: true, maxZoom: 16});

document.getElementById("map").style.display = "none";

function mboxFunction() {
    var mbox = document.getElementById("mboxflat");
    mbox.classList.toggle("openmbox");
    document.getElementById("mbox").style.transform = "scale(1.6) translate(0, 20%)";
}

document.addEventListener('DOMContentLoaded', () => {
    const areas = document.querySelectorAll('.land');
    const info = document.getElementById('info');
    areas.forEach(area => {
        area.addEventListener('click', () => {
            info.textContent = `You clicked on ${area.getAttribute('data-name')}`;
            document.getElementById("map").style.display = "block";
        });
    });
});
