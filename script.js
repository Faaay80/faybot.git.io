
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



/* clique button pour le chnagement de nombre */

// document.getElementById("click-button").addEventListener("click", function() {
//     var cookie = document.getElementById("cookie");
//     cookie.classList.add("heartbeat-animation");
    
//     setTimeout(function() {
//         cookie.classList.remove("heartbeat-animation");
//     }, 1000); // Durée de l'animation en millisecondes (ici, 1 seconde)
// });


                    //achat

idleButton.addEventListener('click', function () {
    console.log("achat")
    if(cookieCount >= 100) {
        cookieCount -= 100
        cookie.src = this.querySelector('img').src
    }
});

idleButton.addEventListener('click', function () {
    console.log("achat")
    if(cookieCount >= 700) {
        cookieCount -= 700
        cookie.src = this.querySelector('img').src
    }
});


  















