// Object 생성하고, 그 안에 function을 이용해서 계산기 만들기(더하기, 빼기, 나누기, 제곱)
const calculator = {
    puls: function(a, b) {
        console.log(a + b);
    },
    minus: function(a, b) {
        console.log(a - b);
    },
    divide: function(a, b) {
        console.log(a / b);
    },
    powerof: function(a, b) {
        console.log(a ** b);
    }
}

calculator.puls(1, 2); // 3
calculator.minus(2, 1); // 1
calculator.divide(6, 2); // 3
calculator.powerof(3, 3); // 27