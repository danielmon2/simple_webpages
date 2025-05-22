

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

function makeBtnBigger(element) {
    element.style.transform = 'scale(0.9)';
    setTimeout(() => element.style.transform = 'scale(1)', 100);
}

main();