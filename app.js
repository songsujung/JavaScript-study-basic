const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";

// 제출한 유저이름을 기억(저장)시키자.

function onLoginSubmit(event) {
    event.preventDefault(); // submitdml 기본동작 막기
    loginForm.classList.add(HIDDEN_CLASSNAME); // .hidden 추가 
    const userName = loginInput.value; // 입력값 받기
    localStorage.setItem("userName", userName); // userName 저장 ("저장될 아이템이름", 값은 변수);
    greeting.innerText = `Hello! ${userName}`; // h1태그의 innerText
    greeting.classList.remove(HIDDEN_CLASSNAME); // .hidden 제거
}

loginForm.addEventListener("submit", onLoginSubmit);