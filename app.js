const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

// 위 const처럼 중요한 정보를 담은 게 아니고, string값만을 담은 것이라서 변수를 대문자로 작성(관습)
const HIDDEN_CLASSNAME = "hidden";

// 유저가 이름을 제출하면, 입력 후 클릭했을 때의 form(input창에 입력한 내용이 클릭을 해도 그대로 남아있는 것)을 없애보자.

// preventDefault라는 함수를 사용해서 브라우저의 기본동작을 막고, 입력값을 받기
// .hidden을 추가해서 form을 숨기고, 유저이름을 변수로 저장해주고 그 이름은 h1 안에 넣기 그리고 화면에 띄우기
function onLoginSubmit(event) {
    event.preventDefault(); // submitdml 기본동작 막기
    loginForm.classList.add(HIDDEN_CLASSNAME); // .hidden 추가 
    const userName = loginInput.value; // 입력값 받기
    // greeting.innerText = "Hello! " + userName; // h1태그의 innerText
    greeting.innerText = `Hello! ${userName}`; // `문자 ${변수명}` 이 규칙으로 바로 위 코드와 같은 결과를 낼 수 있다. `백틱기호`
    greeting.classList.remove(HIDDEN_CLASSNAME);
}

loginForm.addEventListener("submit", onLoginSubmit);