

function main() {
    const loadBtn = document.querySelector('button');

    for(let i = 0; i < 9; i++) {
        makeImg();
    }

    loadBtn.addEventListener('click', event => {
        for(let i = 0; i < 9; i++) {
            makeImg();
        }
    })
}

function makeImg() {
    const container = document.querySelector('#content');
    const rand = Math.random() * 5000;

    const img = document.createElement('img')
    img.setAttribute('src', `https://picsum.photos/310/500?${rand}`);
    container.appendChild(img);
}

main();