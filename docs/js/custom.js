// to get current year
function getYear() {
    var currentDate = new Date();
    var currentYear = currentDate.getFullYear();
    var yearElement = document.querySelector("#displayYear");
    if (yearElement) {
        yearElement.innerHTML = currentYear;
    } else {
        console.error("Element with ID 'displayYear' not found.");
    }
}

document.addEventListener("DOMContentLoaded", getYear);

/** google_map js **/

function myMap() {
    var mapProp = {
        center: new google.maps.LatLng(40.712775, -74.005973),
        zoom: 18,
    };
    var mapElement = document.getElementById("googleMap");
    if (mapElement) {
        var map = new google.maps.Map(mapElement, mapProp);
    } else {
        console.error("Element with ID 'googleMap' not found.");
    }
}

document.querySelectorAll('.card').forEach(card => {
    const bgColor = card.getAttribute('data-bg-color');
    if (bgColor) {
        card.style.setProperty('--bg-color', bgColor);
    }
});
