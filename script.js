function updateCountdown(){

const weddingDay = new Date("2026-12-05T10:00:00");

const today = new Date();

const gap = weddingDay - today;

const day = Math.floor(gap/(1000*60*60*24));

document.getElementById("countdown").innerHTML =
`결혼식까지 ${day}일`;

}

updateCountdown();
