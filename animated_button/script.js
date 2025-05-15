

function main() {
    button = document.querySelector('#btn');
    ball = document.querySelector('#ball');
    
    button.addEventListener('mouseover', event => {
        changeBallPostion(ball, event);
    })
}

function changeBallPostion(ball, event) {
    const buttonPostion = document.querySelector('#btn').getBoundingClientRect();
    const y = event.clientY - buttonPostion.top; 
    const x = event.clientX - buttonPostion.left;

    ball.style.top = y + 'px';
    ball.style.left = x + 'px';
}

main()