// Add event listener to scroll event
window.addEventListener('scroll', function () {
    // Get the about section element
    const aboutSection = document.querySelector('#about') as HTMLDivElement;
    const aboutTitle = document.querySelector('#about h2') as HTMLElement;
    const servicesSection = document.querySelector('#services') as HTMLDivElement;
    const headerSection = document.querySelector('#header') as HTMLDivElement;
    const servicesTitle = document.querySelectorAll('#services p') as NodeListOf<HTMLElement>;

    // Check if the about section is in the viewport
    if (aboutSection.getBoundingClientRect().top <= window.innerHeight / 2) {
        // Add the animate__bounce class to the about section
        aboutTitle.classList.add('animate__bounce');
    }
    if (servicesSection.getBoundingClientRect().top <= window.innerHeight / 2) {
        // Add the animate__bounceInLeft class to each p in the services section
        headerSection.classList.add('sticky-top');
        servicesTitle.forEach(function (title) {
            title.classList.add('animate__pulse');
        });
    }
});