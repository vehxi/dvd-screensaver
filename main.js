const rectangle = document.querySelector(".rectangle");

let x = 150;
let y = 150;
let speedX = 2;
let speedY = 2;

rectangle.style.left = `${x}px`;
rectangle.style.top = `${y}px`;

function move() {
    x += speedX;
    y += speedY;
    rectangle.style.left = `${x}px`;
    rectangle.style.top = `${y}px`;
    requestAnimationFrame(move);

    if (x + rectangle.offsetWidth >= window.innerWidth) {
        speedX *= -1;
    }

    if (x <= 0) {
        speedX *= -1;
    }

    if (y + rectangle.offsetHeight >= window.innerHeight) {
        speedY *= -1;
    }

    if (y <= 0) {
        speedY *= -1;
    }
}

requestAnimationFrame(move);