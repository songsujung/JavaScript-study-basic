/* Functions이 없다면, 아래와 같이 반복적인 코드를 일일히 작성해야함.
console.log("hello. my name is sujung and I'm 27");
console.log("hello. my name is yujin and I'm 28");
console.log("hello. my name is suji and I'm 29");
console.log("hello. my name is jiyoung and I'm 30");
console.log("hello. my name is minjung and I'm 31"); */

// function : 어떤 코드를 캡슐화해서, 여러번 실행될 수 있게 해줌
// sayHello를 실행할 때마다 {}안에 작성 된 것이 실행됨
// 위 코드와 같은 결과를 내기 위해선 function을 사용할 때 인수(argument)가 필요
// argument : function을 실행하는 동안 어떤 정보를 function에게 보낼 수 있는 방법
// nameOfPerson, age이 인수
function sayHello(nameOfPerson, age){
    console.log("hello. my name is " + nameOfPerson + " and I'm " + age);
}

// 실행
sayHello("sujung", 27); // hello. my name is sujung and I'm 27
sayHello("yujin", 28); // hello. my name is yujin and I'm 28
sayHello("suji", 29); // hello. my name is suji and I'm 29


// 간단한 계산기 만들어보기
function plus(a, b){
    console.log(a + b);
}

function divide(firstNum, secondNum){
    console.log(firstNum / secondNum);
}

// 실행
plus(); // a, b 값이 비어도 실행은 되지만, NaN(Not a Number)이라는 좋지 않은 결과가 뜸
plus(3, 4); // 7
divide(6, 2) // 3


// 응용해서 사용해보기(object.function 형식)
// 회원 Object 생성하고, 그 안에 function추가
const user = {
    name: "sujung",
    sayHello: function(otherPersonsName) {
        console.log("hello!" + otherPersonsName + " nice to meet you!");
    }
}

// 실행
console.log(user.name); // sujung
user.sayHello("yujin"); // hello! yujin nice to meet you!
user.sayHello("suji"); // hello! suji nice to meet you!


