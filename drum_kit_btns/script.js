

function main() {
    const btnArray = document.querySelectorAll('button');

    btnArray.forEach((element) => {
        element.addEventListener('click', event => {
            playAudio(element);
            makeImgBigger(element);
        })

        document.addEventListener('keydown', event => {
            const buttonText = element.textContent.trim().toLowerCase();
            if (buttonText.startsWith(event.key.toLowerCase())) {
                playAudio(element);
                makeBtnBigger(element);
            }
        })
    })
}

function playAudio(parent) {
    const audio = parent.querySelector('audio');
    audio.currentTime = 0;
    audio.volume = 0.25;
    audio.play();
}

function makeImgBigger(parent) {
    const img = parent.querySelector('.buttonImg');
    console.log(parent)
    if (parent.id === 'kick-btn') {
        img.style.backgroundSize = '130%';
        setTimeout(() => img.style.backgroundSize = '120%', 100);
    }
    else {
        img.style.backgroundSize = '110%';
        setTimeout(() => img.style.backgroundSize = '100%', 100);
    }
}

function makeBtnBigger(element) {
    element.style.width = '270px';
    element.style.height = '168px';
    setTimeout(() => element.style.width = '250px', 100);
    setTimeout(() => element.style.height = '150px', 100);
}

main();