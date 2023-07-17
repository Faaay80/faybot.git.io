
/* clique button pour le chnagement de nombre */

let cookieCount = 0;
const cookie = document.getElementById('cookie');
const cookieCountSpan = document.getElementById('cookie-count');
const clickButton = document.getElementById('click-button');
const idleButton = document.getElementById('idle');

cookie.addEventListener('click', function () {
    cookieCount++;
    cookieCountSpan.textContent = cookieCount;
});




/********* Boutiques ***********/ 

idle.addEventListener('click', function () {
    console.log("idle")
    if(cookieCount >= 100) {
        cookieCount -= 100
        cookie.src = this.querySelector('img').src
    }
});

doublejump.addEventListener('click', function () {
    console.log("doublejump")
    if(cookieCount >= 700) {
        cookieCount -= 700
        cookie.src = this.querySelector('img').src
    }
});

jump.addEventListener('click', function () {
    console.log("jump")
    if(cookieCount >= 800) {
        cookieCount -= 800
        cookie.src = this.querySelector('img').src
    }
});

run.addEventListener('click', function () {
    console.log("run")
    if(cookieCount >= 900) {
        cookieCount -= 900
        cookie.src = this.querySelector('img').src
    }
});

speed.addEventListener('click', function () {
    console.log("Full-Run-Turn")
    if(cookieCount >= 2500) {
        cookieCount -= 2500
        cookie.src = this.querySelector('img').src
    }
});

/****************************************************/










  















