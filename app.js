const loginInput = document.querySelector("#login-form input");
const loginButton = document.querySelector("#login-form button");

function onLoginBtnClick() {
    const userName = loginInput.value;
    /* 이 코드는 html에서 required과 maxlength로 설정 가능
    if(userName === "") {
        alert("Pleaes write name."); // input창에 아무 것도 입력이 안됐을 때, 경고창 띄움
    } else if(userName.length > 15) {
        alert("Your name is too long.") // userName의 글자수가 15보다 클 때, 경고창 띄움
    }
    */
   console.log(userName);
}

//loginButton.addEventListener("click", onLoginBtnClick); // html에서 submit을 사용하면서, 클릭이벤트가 필요없어짐