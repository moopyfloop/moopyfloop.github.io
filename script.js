var map = L.map('map').setView([51.505, -0.09], 13);

document.addEventListener('DOMContentLoaded', () => {
    const areas = document.querySelectorAll('.land');
    const info = document.getElementById('info');

    areas.forEach(area => {
        area.addEventListener('mouseover', () => {
            info.textContent = `You are hovering over ${area.getAttribute('data-name')}`;
        });

        area.addEventListener('mouseout', () => {
            info.textContent = 'Hover over an area';
        });

        area.addEventListener('click', () => {
            alert(`You clicked on ${area.getAttribute('data-name')}`);
        });
    });
});
