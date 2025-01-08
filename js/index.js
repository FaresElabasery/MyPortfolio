"use strict";
// Add event listener to scroll event
window.addEventListener('scroll', function () {
    // Get the about section element
    var aboutSection = document.querySelector('#about');
    var aboutTitle = document.querySelector('#about h2');
    // Check if the about section is in the viewport
    if (aboutSection.getBoundingClientRect().top <= window.innerHeight / 2) {
        // Add the animate__bounce class to the about section
        aboutTitle.classList.add('animate__bounce');
    }
});
