const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");

/* 이 function은 사실 입력값을 받아내려고만 하는 용도가 아니다. event라는 인자를 할당해 event object의 정보를 받기 위한 용도이며,
event object 중 preventDefault라는 함수를 사용해서 브라우저의 기본동작을 막을 것이다. */
// 이 경우 인자를 event로 작성하는 것이 관행이다. 인자를 할당하는 것 만으로도 js로부터 event의 정보를 받을 수 있다.
function onLoginSubmit(event) {  
    //const userName = loginInput.value; // 입력값 받기
    //console.log(event); // event object의 정보를 확인(preventDefault를 확인)
    event.preventDefault(); // submitdml 기본동작 막기
    console.log(loginInput.value); // 입력값 받기
}

// submit event를 감지(form을 submit할 때 입력값을 받아냄, 하지만 enter나 login버튼을 누를 때 새로고침이 되는 현상(submit의 기본동작)은 남아있음.-preventDefault로 해결)
loginForm.addEventListener("submit", onLoginSubmit);