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
// 그리고, 1~9초도 01, 02, 03...처럼 형식에 맞춰서 출력되도록 만들자.(12:12:02)
// padStart : String의 길이가 지정한 숫자 길이보다 부족하면 지정한 문자를 string 앞에 넣어준다.
function getClock() {
    const date = new Date();
    const hours = String(date.getHours()).padStart(2, "0"); 
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0"); // 초의 자릿수를 string으로 변환시킨 뒤, 2보다 적으면 앞에 0을 붙여준다. -> 8(자릿수가 1개)이면, 08
    clock.innerText = `${hours}:${minutes}:${seconds}`;
    //clock.innerText = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
}

getClock(); // 시계 바로실행(setInterval만 사용하면 바로 실행안되고 1초기다렸다가 뜨기 때문에)
setInterval(getClock, 1000); // 1초마다 getClock 함수 실행(시계)

