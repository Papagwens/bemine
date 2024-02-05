const wrapper = document.querySelector(".wrapper");
const question = document.querySelector(".question");
const gif = document.querySelector(".gif");
const yesBtn = document.querySelector(".yes-btn");
const noBtn = document.querySelector(".no-btn");

let yesButtonClicked = false;

yesBtn.addEventListener("mouseover", () => {
    question.innerHTML = "yayayay <3";
    gif.src = "second.gif";

    yesBtn.addEventListener("click", () => {
        question.innerHTML = "Love you bubu!";
        gif.src = "third.gif";
        yesButtonClicked = true;

        
        createHearts();
    });
});

noBtn.addEventListener("mouseover", () => {
    question.innerHTML = "wrong answer";
    const noBtnRect = noBtn.getBoundingClientRect();
    const maxX = window.innerWidth - noBtnRect.width;
    const maxY = window.innerHeight - noBtnRect.height;

    const randomX = Math.floor(Math.random() * maxX);
    const randomY = Math.floor(Math.random() * maxY);

    noBtn.style.left = randomX + "px";
    noBtn.style.top = randomY + "px";
    gif.src = "fourth.gif";
});

document.addEventListener("mousemove", function (e) {

    if (yesButtonClicked) {

        createHearts(e.offsetX, e.offsetY);
    }
});

function createHearts(x, y) {
    let body = document.querySelector('body');
    let heart = document.createElement('span');
    heart.style.left = x + 'px';
    heart.style.top = y + 'px';

    let size = Math.random() * 80;
    heart.style.width = 20 + size + 'px';
    heart.style.height = 20 + size + 'px';

    let tranformValue = Math.random() * 360;
    heart.style.transform = 'rotate(' + tranformValue + 'deg)';

    body.appendChild(heart);

    setTimeout(function () {
        heart.remove();
    }, 1000);
}
