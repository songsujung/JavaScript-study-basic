// event를 listen해보자.(click event)
const title = document.querySelector("div.hello:first-child h1"); // html의 element를 가져오기

// 이벤트 실행시 실행될 function 만들기
function handTitleClick() {
    console.log("title was clicked!")
}

title.addEventListener("click", handTitleClick); // click event를 listen하고, 클릭 시 handTitleClick 함수를 실행