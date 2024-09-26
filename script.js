var map = L.map('map').fitWorld();

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 30,
    attribution: '© OpenStreetMap'
}).addTo(map);

map.locate({setView: true, maxZoom: 16});

document.getElementById("map").style.display = "none";

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
