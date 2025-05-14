

function main() {
    button = document.querySelector('#btn');
    ball = document.querySelector('#ball');
    
    /* buttonTextPosition(); */
    
    button.addEventListener('mouseover', event => {
        ball.style.display = 'block';
        changeBallPostion(ball, event);
        addIteration(ball);
        /* setTimeout(() => ball.style.display = 'none', 1000); */
    }, /* { once: true } */)

    /* button.addEventListener('mouseout', event => {
        changeAnimationDirection(ball);
    }, { once: true }) */
}

function changeBallPostion(ball, event) {
    const ballPosition = ball.getBoundingClientRect();
    const y = (ballPosition.y + 5) - event.clientY; // +5 to get the center of the ball
    const currentTop = +ball.style.top.replace('px', '');
    if (y >= 0) {
        ball.style.top = String(currentTop - y) + 'px';
    }
    else {
        ball.style.top = String(currentTop + (y * -1)) + 'px';
    }

    
    const x = (ballPosition.x + 5) - event.clientX; // +5 to get the center of the ball
    const currentLeft = +ball.style.left.replace('px', '');
    if (y >= 0) {
        ball.style.left = String(currentLeft - x) + 'px';
    }
    else {
        ball.style.left = String(currentLeft + (x * -1)) + 'px';
    }
}

function addIteration(ball) {
    let iterations = null;
    if (ball.style.animationIterationCount !== '') {
        iterations = +ball.style.animationIterationCount;
    }
    else {
        iterations = 0;
    }
    iterations++;
    ball.style.animationIterationCount = String(iterations);
    console.log(iterations);
}

function changeAnimationDirection(ball) {
    ball.style.animationDirection = 'reverse';
    addIteration(ball);
}

/* function buttonTextPosition() {
    const text = document.querySelector('#text');
    text.style.position = 'relative';
    const position = text.getBoundingClientRect();
    console.log(position);

    text.style.position = 'absolute';
    text.style.top = String(position.x) + 'px';
    text.style.left = String(position.y) + 'px';
    console.log(text.getBoundingClientRect());
} */

main()