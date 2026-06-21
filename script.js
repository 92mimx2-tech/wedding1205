```javascript
// ======================
// D-DAY
// ======================

function updateDday(){

    const weddingDate = new Date("2026-12-05T10:00:00");
    const today = new Date();

    const gap = weddingDate - today;

    const day = Math.ceil(
        gap / (1000*60*60*24)
    );

    document.getElementById("countdown").innerHTML =
        `D-${day}`;

}

updateDday();



// ======================
// 계좌번호 복사
// ======================

function copyAccount(number){

    navigator.clipboard.writeText(number);

    alert("계좌번호가 복사되었습니다.");

}



// ======================
// 페이드인 애니메이션
// ======================

const observer = new IntersectionObserver(

(entries)=>{

entries.forEach((entry)=>{

if(entry.isIntersecting){

entry.target.classList.add("show");

}

});

},

{
threshold:0.2
}

);

document.querySelectorAll("section").forEach(

(section)=>{

section.classList.add("fade");

observer.observe(section);

}

);




// ======================
// 이미지 확대
// ======================

document.querySelectorAll(".gallery img")

.forEach((img)=>{

img.addEventListener("click",()=>{

window.open(img.src);

});

});




// ======================
// 맨 위로 이동
// ======================

function topMove(){

window.scrollTo({

top:0,

behavior:"smooth"

});

}
```


```javascript
new Swiper(".mySwiper",{

loop:true,

pagination:{
el:".swiper-pagination"
},

autoplay:{
delay:3000
}

});
```


const bgm =
document.getElementById("bgm");

function musicToggle(){

if(bgm.paused){

bgm.play();

}
else{

bgm.pause();

}

}


Kakao.init('자바스크립트키');

function shareKakao(){

Kakao.Share.sendDefault({

objectType:'feed',

content:{

title:'송태빈 ♥ 정다운',

description:'2026.12.05 SAT AM10:00',

imageUrl:window.location.origin+'/images/main.jpg',

link:{

mobileWebUrl:window.location.href,

webUrl:window.location.href

}

}

});

}


AOS.init({

duration:1200,

once:true

});


var mapContainer =
document.getElementById('map');

var mapOption = {

center:new kakao.maps.LatLng(
37.39279,
126.95366
),

level:3

};

var map =
new kakao.maps.Map(
mapContainer,
mapOption
);



var markerPosition =
new kakao.maps.LatLng(
37.39279,
126.95366
);



var marker =
new kakao.maps.Marker({

position:markerPosition

});



marker.setMap(map);



var iwContent =

'<div style="padding:8px;text-align:center;">안양 더파티움<br>라포레홀 7층</div>';



var infowindow =
new kakao.maps.InfoWindow({

content:iwContent

});



infowindow.open(
map,
marker
);
