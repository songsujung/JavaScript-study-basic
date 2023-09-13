const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "userName";

// 제출한 유저이름을 기억(저장)시켜서, 새로고침을 해도 hello! username이 유지되게 하자.

function onLoginSubmit(event) {
    event.preventDefault(); // submitdml 기본동작 막기
    loginForm.classList.add(HIDDEN_CLASSNAME); // .hidden 추가 
    const userName = loginInput.value; // input 입력값 받기
    localStorage.setItem(USERNAME_KEY, userName); // userName 저장 ("저장될 아이템이름", 값은 변수);
    // greeting.innerText = `Hello! ${userName}`; // h1태그의 innerText // 같은작업의 코드가 반복되기때문에 function을 만들어서 함수로 넣어주기
    // greeting.classList.remove(HIDDEN_CLASSNAME); // .hidden 제거
    paintGreeting(userName);
}

function paintGreeting(userName) {
    greeting.classList.remove(HIDDEN_CLASSNAME); // greeting을 숨기는 hidden을 제거
    greeting.innerText = `Hello! ${userName}`;
}

const saveUserName = localStorage.getItem(USERNAME_KEY); // 불러온 유저정보를 savedUserName에 할당

/* 
    만약 localStorage에 유저정보가 없다면 loginForm의 submit을 기다리고, submit이 되면 input으로부터 유저정보를 받고 paintGreeting을 실행
    localStorage에 유저정보가 있다면 paintGreeting을 실행(새로고침을 해도 h1이 유지)
*/
if(saveUserName === null) {
    // show the form
    loginForm.classList.remove(HIDDEN_CLASSNAME); // form을 숨기는 hidden을 제거
    loginForm.addEventListener("submit", onLoginSubmit);
} else {
    // show the greetings
    // greeting.innerText = `Hello! ${saveUserName}`; // 같은작업의 코드가 반복되기때문에 function을 만들어서 함수로 넣어주기
    // greeting.classList.remove(HIDDEN_CLASSNAME);
    paintGreeting(saveUserName);
}