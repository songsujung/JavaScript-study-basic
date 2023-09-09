// 한국 나이를 계산하는 function 만들기
const age = 26;
function calculateKrAge(ageOfForeigner){
    return ageOfForeigner + 2;
}

const krAge = calculateKrAge(age);// age에 96이라는 값이 들어가고,

console.log(krAge); // calculateKrAge에서 return을 사용했기 때문에 결과값이 반환되어, console에 찍힘

// -------------------------------------------------------------------------------------------------

// Object 생성하고, 그 안에 function을 이용해서 계산기 만들기(더하기, 빼기, 곱하기, 나누기, 제곱)
// console.log가 아닌 return을 활용해서 결과를 반환하고, 외부에서 console을 찍는다.
const calculator = {
    puls: function(a, b) {
        console.log("Hello") // 실행됨
        return a + b;
        console.log("Hello") // function은 실행되고 나면 사라지고, return결과를 남김 (return 이후에 적힌 코드는 실행되지 않음)
    },
    minus: function(a, b) {
        return a - b;
    },
    times: function(a, b) {
        return a * b;
    },
    divide: function(a, b) {
        return a / b;
    },
    power: function(a, b) {
        return a ** b;
    }
}

// 이렇게 실행하면 console에는 아무 것도 찍히지 않음
calculator.puls(1, 2); // 3
calculator.minus(2, 1); // 1
calculator.times(2, 2); // 4
calculator.divide(6, 2); // 3
calculator.power(3, 3); // 27

// calculator 내부에서 console.log를 사용하지 않고 외부에서 실행
// function에서 return을 사용했기 때문에 값이 반환되어, plusResult에 값이 할당됨
const plusResult = calculator.puls(1,2);
console.log(plusResult);

// return을 사용하는 이유 중 하나는 코드를 서로 의존할 수 있음
const minusResult = calculator.minus(plusResult, 10);
const timesResult = calculator.times(10, minusResult);
const divideResult = calculator.divide(timesResult, plusResult);
const powerResult = calculator.power(divideResult, minusResult);