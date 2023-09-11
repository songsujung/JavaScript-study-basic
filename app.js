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

function handleWindowResize() {
    document.body.style.backgroundColor = "tomato"; // 위 title과 document title은 다른 것임. document는 .body, .head, .title만 가능
}

function handleWindowCopy() {
    alert("copy!")
}

function handleWindowOffline() {
    alert("The Wi-Fi is not connected.")
}

function handleWindowOnline() {
    alert("The Wi-Fi is connected.")
}

title.addEventListener("click", handTitleClick); // click (클릭 시, 글자 색 파란색으로 바뀜)
title.addEventListener("mouseenter", handleMouseEnter); // mouseenter (title 위에 마우스를 올린 것을 감지하고, innerText를 변경)
title.addEventListener("mouseleave", handleMouseLeave); // mouseleave (title 위에서 마우스를 뗀 것을 감지하고, innerText를 변경)

window.addEventListener("resize", handleWindowResize); // resize (화면 크기가 바뀌게 될 경우, 바탕색을 빨간색으로 변경)
window.addEventListener("copy", handleWindowCopy); // copy (사용자가 복사를 하는 경우, alert창을 띄어줌)
window.addEventListener("offline", handleWindowOffline); // offline (와이파이가 연결되지 않은 경우, alert창을 띄어줌)
window.addEventListener("online", handleWindowOnline); // online (와이파이가 연결된 경우, alert창을 띄어줌)