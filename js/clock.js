const clock = document.querySelector("h2#clock");

// interval : 매번 일어나야하는 무언가 ex) 매 2초
function sayHello() {
    console.log("hello");
}

setInterval(sayHello, 5000); // 5초마다 sayHello 함수 실행