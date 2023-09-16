const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.getElementById("todo-list");

function deleteToDo(event) {
    const li = event.target.parentElement; // 클릭된 element(button)의 부모Element(li)에 접근
    li.remove(); // li를 삭제
}

function paintTodo(newTodo) {
    const li = document.createElement("li"); // li 생성
    const span = document.createElement("span"); // span 생성
    span.innerText = newTodo; // span의 텍스트를 변경(newTodo로 변경)
    const button = document.createElement("button"); // button 생성
    button.innerText = "❌"; // button의 텍스트를 변경 (X로 변경)
    button.addEventListener("click", deleteToDo); // delete button 클릭 이벤트
    li.appendChild(span); // li태그 안에 span태그를 넣기 // appendChild는 맨 마지막에 놓여져야 함
    li.appendChild(button); // li태그 안에 button 넣기
    toDoList.appendChild(li); // list에 li을 넣기
}

function handleToDoSubmit(event) {
    event.preventDefault(); // 기본동작 막기
    const newTodo = toDoInput.value; // input에 입력된 값을 newTodo에 할당(새로운 변수에 값을 저장)
    toDoInput.value = "" // 엔터를 누르면 값이 입력되었던 input란이 비워짐(newTodo가 비워지지 않음 무관)
    paintTodo(newTodo); // newTodo를 paintTodo에 넣어서 호출
}

toDoForm.addEventListener("submit", handleToDoSubmit);