/*!
* Start Bootstrap - Business Casual v7.0.9 (https://startbootstrap.com/theme/business-casual)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-business-casual/blob/master/LICENSE)
*/
// Highlights current date on contact page
window.addEventListener('DOMContentLoaded', event => {
    const listHoursArray = document.body.querySelectorAll('.list-hours li');
    listHoursArray[new Date().getDay()].classList.add(('today'));
})

//Custom scripts
function toggleDropdown(id, containerId) {
    var dropdown = document.getElementById(id);
    var container = document.getElementById(containerId);
    if (dropdown.style.display === "none") {
        dropdown.style.display = "block";
        container.style.height = container.scrollHeight + "px"; // Expand container height
    } else {
        dropdown.style.display = "none";
        container.style.height = "auto"; // Reset container height
    }
}

function toggleDropdownResume(id, containerId) {
    var dropdown = document.getElementById(id);
    var container = document.getElementById(containerId);
    if (dropdown.style.display === "none") {
        dropdown.style.display = "block";
        container.style.height = container.scrollHeight + "px"; // Expand container height
    } else {
        dropdown.style.display = "none";
        container.style.height = "auto"; // Reset container height
    }
}