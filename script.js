
/* clique button pour le chnagement de nombre */

let cookieCount = 0;
const cookie = document.getElementById('cookie');
const cookieCountSpan = document.getElementById('cookie-count');
const clickButton = document.getElementById('click-button');

cookie.addEventListener('click', function () {
    cookieCount++;
    cookieCountSpan.textContent = cookieCount;
});

clickButton.addEventListener('click', function () {
    cookieCount += 10;
    cookieCountSpan.textContent = cookieCount;
});

/* clique button pour le chnagement de nombre */

document.getElementById("click-button").addEventListener("click", function() {
    var cookie = document.getElementById("cookie");
    cookie.classList.add("heartbeat-animation");
    
    setTimeout(function() {
        cookie.classList.remove("heartbeat-animation");
    }, 1000); // Durée de l'animation en millisecondes (ici, 1 seconde)
});













