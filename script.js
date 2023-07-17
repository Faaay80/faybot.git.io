
/* clique button pour le chnagement de nombre */

let cookieCount = 0;
const cookie = document.getElementById('cookie');
const cookieCountSpan = document.getElementById('cookie-count');
const clickButton = document.getElementById('click-button');
const idleButton = document.getElementById('idle');
const mutliButton = document.getElementById('mutli');

let nb_cookies_par_click = 1;
cookie.addEventListener('click', function () {
    cookieCount += nb_cookies_par_click;
    cookieCountSpan.textContent = cookieCount;
});


/********* Multiplicateur */
mutliButton.addEventListener('click', function () {
    console.log("multi")
    if(cookieCount >= 1) {
        cookieCount -= 1
        nb_cookies_par_click = nb_cookies_par_click * 2
    }
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












  















