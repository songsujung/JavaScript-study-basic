const images = ["0.jpeg", "1.jpeg", "2.jpeg"];

// images를 무작위로 돌려준다. (소숫점을 내림 처리, 곱한 숫자 안에서만 랜덤)
const chosenImage = images[Math.floor(Math.random() * images.length)]; // quotes[내림(랜덤 * images개수)];

// js에서 html element를 생성하는 법
// bgImage라는 element생성
const bgImage = document.createElement("img"); 

// 이미지위치(bgImage.src) 할당
bgImage.src = `img/${chosenImage}`;

// appendChild : body에 html을 추가
document.body.appendChild(bgImage); 