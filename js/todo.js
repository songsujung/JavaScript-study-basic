const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.getElementById("todo-list");

// newTodo가 그려질 때(paintTodo)마다 array에 push
const toDos = [];

// toDos array의 내용을 localStorage에 담기
// localStorage에는 array가 array형식으로 저장되지 않는다. "a", "b", "c"이런식으로 저장됨
// JSON.stringify로 array를 string타입으로 변환 후, localStorage에 string을 array의 모양으로 저장 ["a", "b", "c"]
// JSON.stringify : array든 어떠한 js코드던 string으로 변환
function saveToDos() {
    localStorage.setItem("todos", JSON.stringify(toDos)); 
}

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
    toDos.push(newTodo); // toDos array를 가져와서 newTodo를 push
    paintTodo(newTodo); // newTodo를 paintTodo에 넣어서 호출
    saveToDos(); // toDo 저장
}

toDoForm.addEventListener("submit", handleToDoSubmit);