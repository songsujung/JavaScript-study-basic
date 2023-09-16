const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.getElementById("todo-list");

function paintTodo(newTodo) {
    const li = document.createElement("li");
    const span = document.createElement("span");
    li.appendChild(span); // li태그안에 span태그를 넣기
    span.innerText = newTodo; // span의 텍스트로 newTodo를 넣기
    //console.log(li);
    toDoList.appendChild(li); // list에 li을 넣기
}

function handleToDoSubmit(event) {
    event.preventDefault();
    const newTodo = toDoInput.value; // input에 입력된 값을 newTodo에 할당(새로운 변수에 값을 저장)
    toDoInput.value = "" // 엔터를 누르면 값이 입력되었던 input란이 비워짐(newTodo가 비워지지 않음 무관)
    paintTodo(newTodo); // newTodo를 paintTodo에 넣어서 호출
}

toDoForm.addEventListener("submit", handleToDoSubmit);