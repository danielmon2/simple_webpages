

function main() {
    window.scrollTo(0, 0);
    const screenWidth = window.screen.width;
    const backgroundImg = document.querySelector('#background-img');
    const contentDiv = document.querySelector('#content');
    const vh = contentDiv.getBoundingClientRect().top;

    // if screen smaller than 700px make background pic size bigger
    const scaleHighest = screenWidth > 700 ? 150 : 180;
    const scaleLowest = 100;
    const scaleRange = scaleHighest - scaleLowest;
    scaleBackgoundImg(scaleHighest); 

    window.addEventListener('scroll', event => {
        const distanceTop = contentDiv.getBoundingClientRect().top;
        console.log(distanceTop, vh);
        // pecrcent of the element visible * range we work with(0.2 = 0 - 0.2, 1 = 0 - 1) + baseline(end point)
        scaleBackgoundImg((distanceTop/vh) * scaleRange + scaleLowest);
        changeOpacity(distanceTop/vh);
    })
}

function scaleBackgoundImg(value) {
    const backgroundImg = document.querySelector('#background-img');
    backgroundImg.style.backgroundSize = value + '%';
}

function changeOpacity(value) {
    const backgroundImg = document.querySelector('#background-img');
    backgroundImg.style.opacity = `${value}`; 
}

main();