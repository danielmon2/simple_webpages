

function main() {
    window.scrollTo(0, 0);
    const screenWidth = window.screen.width;
    const backgroundImg = document.querySelector('#background-img');
    const contentDiv = document.querySelector('#content');
    const vh = contentDiv.getBoundingClientRect().top;

    // if screen smaller than 700px make background pic size bigger
    const scaleHighest = screenWidth > 700 ? 150 : 180;
    const scaleLowest = 120;
    const scaleRange = scaleHighest - scaleLowest;
    updateImage(scaleHighest, 1); 

    window.addEventListener('scroll', event => {
        //distance from the top of the browser to the top of content div
        const distanceTop = contentDiv.getBoundingClientRect().top; 
        // pecrcent of the element visible * range we work with(0.2 = 0 - 0.2, 1 = 0 - 1) + lowest point 
        updateImage((distanceTop/vh) * scaleRange + scaleLowest, distanceTop/vh);
    })
}

function updateImage(scale, opacity) {
    const backgroundImg = document.querySelector('#background-img');
    backgroundImg.style.backgroundSize = scale + '%';
    backgroundImg.style.opacity = `${opacity}`; 
}

main();