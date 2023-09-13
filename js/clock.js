const clock = document.querySelector("h2#clock");

/*
// interval : 매번 일어나야하는 무언가 ex) 매 2초
// Timeout : 함수 실행 지연 ec) 5초 후 실행

function sayHello() {
    console.log("Hello")
}

//setInterval(sayHello, 5000); // 5초마다 sayHello 함수 실행
//setTimeout(sayHello, 5000) // 5초 후에 sayHello 함수 실행
*/

// 00:00:00 형식의 시계를 만들어보자.
function getClock() {
    const date = new Date();
    clock.innerText = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
}

getClock(); // 시계 바로실행(setInterval만 사용하면 바로 실행안되고 1초기다렸다가 뜨기 때문에)
setInterval(getClock, 1000); // 1초마다 getClock 함수 실행(시계)

