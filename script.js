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

