const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.getElementById("todo-list");

const TODOS_KEY = "todos"

// newTodo가 그려질 때(paintTodo)마다 array에 push
// const toDos = []; // 사용자가 newTodo를 입력하게 되면 기존의 todo에 덮어 씌어져 사라지기 때문에 아래와 같이 처리
// let으로 바꿔 업데이트가 가능한 빈배열로 시작하게 만든다.
let toDos = [];

// toDos array의 내용을 localStorage에 담기
// localStorage에는 array가 array형식으로 저장되지 않는다. "a", "b", "c"이런식으로 저장됨
// JSON.stringify로 array를 string타입으로 변환 후, localStorage에 string을 array의 모양으로 저장 ["a", "b", "c"]
// JSON.stringify : array든 어떠한 js코드던 string으로 변환
function saveToDos() {
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

// Filter함수 : 새 array에도 1,2,3,4를 포함하고 싶으면, 반드시 true를 리턴해야 한다.
// return값이 true이면 array에 유지되고, fales가 나오면 array에서 삭제된다.
function deleteToDo(event) {
    const li = event.target.parentElement; // 클릭된 element(button)의 부모Element(li)에 접근
    li.remove(); // li를 삭제
    //console.log(typeof li.id); // li.id는 string타입, 아래와 같이 li.id를 int로 타입변경을 해주어야 정상적으로 실행됨(id가 숫자타입이기 때문에)
    toDos = toDos.filter(toDo => toDo.id !== parseInt(li.id)) // 클릭했던 li의 id를 갖고 있는 toDo를 삭제
    saveToDos(); // 삭제 후에는 반드시 저장
}

function paintTodo(newTodo) {
    const li = document.createElement("li"); // li 생성
    li.id = newTodo.id // li.id를 newTodo.id로 생성
    const span = document.createElement("span"); // span 생성
    span.innerText = newTodo.text; // span의 텍스트를 변경(newTodo.text로 변경, text로 하지 않으면 [object, object]가 화면에 출력됨)
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
    // text만 받던 방식에서 text와 랜덤한id도 받는 방식으로 const 생성
    const newTodoObj = {
        text : newTodo,
        id : Date.now() // li item을 각각 구별하기 위해 id 사용
    }
    toDos.push(newTodoObj); // toDos array를 가져와서 newTodoObj를 push
    paintTodo(newTodoObj); // newTodoObj를 paintTodo에 넣어서 호출
    saveToDos(); // toDo 저장
}

toDoForm.addEventListener("submit", handleToDoSubmit);

// event처럼 item도 js에서 제공해줌 (어떤 아이템을 실행하고 있는지를 확인할 수 있다.)
/* 아래와 같이 =>(화살표함수)를 사용해서 같은 결과를 낼 수 있다.
   (item) => console.log("this is the turn of ", item) */

// function sayHello(item) {
//     console.log("this is the turn of", item);
// }

// localStorage에 담긴 array모양새의 string을 array로 변환
// JSON.parse : array로 변환
const savedToDos = localStorage.getItem(TODOS_KEY);

// 새로고침을 해도 입력했던 값들이 날아가지 않고, 화면에 찍혀있게 하자.
if (savedToDos !== null) {
    // saveToDos에 값이 있다면,
    const parsedToDos = JSON.parse(savedToDos);
    toDos = parsedToDos; // toDos에 parsedToDos를 넣어서 이전의 toDo를 복원
    // forEach : array의 각 item에 대해서 function을 실행해준다.
    parsedToDos.forEach(paintTodo); // 작성한 todo에 대해서 각각 paintTodo를 실행
}