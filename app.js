const loginInput = document.querySelector("#login-form input");
const loginButton = document.querySelector("#login-form button");

function onLoginBtnClick() {
    console.log("hello", loginInput.value); // input창에 입력한 값을 console에 표시
}

loginButton.addEventListener("click", onLoginBtnClick);