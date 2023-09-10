/* 
// 나이계산기를 만들어보기 전에 데이터타입 변환에 대해 알아보자.
// prompt는 사용자에게 입력창을 띄울 수 있도록 해줌(하지만 예전의 방식이라 사용하진 않음)
const age = prompt("How old are you?"); // prompt(message?:string, default?:string)

// 입력한 값의 데이터타입을 알 수 있음(현재까지의 코드에선 무엇을 입력하든 string타입으로 나옴)
console.log(typeof age); 

// 데이터타입 변환 (string -> number)
console.log(parseInt(age)); // 브라우저에서 숫자를 입력하면 number타입의 숫자, 문자를 입력하면 NaN(Not a Number)

// isNaN : 입력값을 boolean으로 반환(숫자인지 아닌지)
console.log(isNaN(age)); // 숫자입력하면 false(NaN 아니라는 뜻 = 숫자이다.), 문자입력하면 true(NaN이다.)

// or연산자(둘 중 하나라도 true면 true실행)
true || true === true
true || false === true
false || true === true
false || false === false

// and연산자(모두 true여야 true실행)
true && true === true
true && false === false
false && true === false
false && false === false

// === : 값이 일치하는지 여부 확인(=와는 다름. =는 값을 할당하는 것)
// !== : 값이 불일치하는지 여부 확인
*/

// 조건문 if ~ else if로 나이 계산기를 만들어보자. (미성년자인지 아닌지)
const age = parseInt(prompt("나이를 입력해 주시기 바랍니다.")); // 브라우저창에서 나이를 물어보고 답한 값이 27이라면, 그 값을 숫자타입으로 변환하고, 문자라면 NaN

if(isNaN(age) || age < 0) {
    // 조건이 true일 때 실행되는 영역(숫자가 아니다, 0보다 작다) : or연산자는 둘 중 하나라도 true면 true를 실행
    console.log("숫자를 입력해주세요.(문자, 음수 입력불가)")
} else if(age < 18) {
    // 조건이 false일 때 실행되는 영역(숫자이다. + 18미만)
    console.log("음주가 불가능한 미성년자입니다.")
} else if(age >= 18 && age <= 50) {
    // 숫자(false)이고, + 18이상 and 50이하일 때 실행되는 영역 : and연산자는 둘 다가 true여야 true를 실행
    console.log("음주가 가능한 성인입니다.")
} else if(age === 100) {
    // 숫자(false)이고, 100일 때에 실행되는 영역 : 실행 위치가 중요함(맨 아래로 갈 경우 50초과일 때의 조건에 먼저 해당되어 이 코드가 실행되지 않음)
    console.log("모든 것을 누리시길 바랍니다!")
} else  {
    // 숫자(false)이고, + 100이 아니고, 50초과일 때 실행되는 영역
    console.log("성인이지만, 음주에 주의가 필요한 연령입니다.")
}