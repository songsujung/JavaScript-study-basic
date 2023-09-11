// event를 listen해보자.
const title = document.querySelector("div.hello:first-child h1"); // html의 element를 가져오기

// 이벤트 실행시 실행될 function 만들기
function handTitleClick() {
    title.style.color = "blue";
}

function handleMouseEnter() {
    title.innerText = "Mouse is here!";
}

function handleMouseLeave() {
    title.innerText = "Mouse is gone!";
}

title.addEventListener("click", handTitleClick); // click (클릭 시, 글자 색 파란색으로 바뀜)
title.addEventListener("mouseenter", handleMouseEnter); // mouseenter (title 위에 마우스를 올린 것을 감지하고, innerText를 변경)
title.addEventListener("mouseleave", handleMouseLeave); // mouseleave (title 위에서 마우스를 뗀 것을 감지하고, innerText를 변경)