

function main() {
    const btnArray = document.querySelectorAll('button');

    btnArray.forEach((element) => {
        element.addEventListener('click', event => {
            playAudio(element);
        })

        document.addEventListener('keydown', event => {
            const buttonText = element.textContent.trim().toLowerCase();
            if (buttonText.startsWith(event.key.toLowerCase())) {
                playAudio(element);
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

main();