const rectangle = document.querySelector(".rectangle");
const logo = document.querySelector(".rectangle");
logo.style.backgroundColor = "white";


let x = 200;
let y = 350;
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
        logo.style.backgroundColor = "red";
    }

    if (x <= 0) {
        speedX *= -1;
        logo.style.backgroundColor = "cyan";
    }

    if (y + rectangle.offsetHeight >= window.innerHeight) {
        speedY *= -1;
        logo.style.backgroundColor = "green";
    }

    if (y <= 0) {
        speedY *= -1;
        logo.style.backgroundColor = "white";
    }
}

requestAnimationFrame(move);