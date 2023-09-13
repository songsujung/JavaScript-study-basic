const loginForm = document.querySelector("#login-form"); // loginForm
const loginInput = document.querySelector("#login-form input"); // loginForm
const greeting = document.querySelector("#greeting"); // h1태그

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "userName";

// 로그인 정보를 submit한다.
function onLoginSubmit(event) {
    event.preventDefault(); // submit을 실행했을 때 submit의 기본동작(새로고침)을 막고,
    loginForm.classList.add(HIDDEN_CLASSNAME); // .hidden 추가해 form이 보이지 않게 한다.
    const userName = loginInput.value; // input창에 입력한 값을 userName이라는 변수에 저장한다.
    localStorage.setItem(USERNAME_KEY, userName); // localStorage에 userName을 저장한다. 아이템이름 : USERNAME_KEY
    paintGreeting(userName); // userName값을 넣어 paintGreeting를 실행한다.
}

function paintGreeting(userName) {
    greeting.classList.remove(HIDDEN_CLASSNAME); // greeting을 숨기는 hidden을 제거한다.
    greeting.innerText = `Hello! ${userName}`; // 화면에 Hello! userName 이라고 뜸
}

const saveUserName = localStorage.getItem(USERNAME_KEY); // 불러온 유저정보를 savedUserName에 할당(유저정보 저장여부에 따른 화면출력을 위함)

/* 
    만약 localStorage에 유저정보가 없다면 loginForm의 submit을 기다리고, submit이 되면 input으로부터 유저정보를 받고 paintGreeting을 실행
    localStorage에 유저정보가 있다면 paintGreeting을 실행(새로고침을 해도 h1이 유지)
*/
if(saveUserName === null) { // 유저정보가 null이라면 show the form영역을 화면에 출력
    // show the form
    loginForm.classList.remove(HIDDEN_CLASSNAME); // form을 숨기는 hidden을 제거해 form을 보이게 한다.
    loginForm.addEventListener("submit", onLoginSubmit); // submit버튼 보여짐
} else {
    // show the greetings
    paintGreeting(saveUserName); // 유저정보가 있다면 유저정보를 담아 paintGreeting을 즉시 실행한다.
}