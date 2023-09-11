const h1 = document.querySelector("div.hello:first-child h1"); // html의 element를 가져오기

/* 이 코드는 CSS에 정의된 clicked이라는 단어(string)를 정확하게 사용해야 하는 코드 (오탈자가 생기는 경우 에러가 뜰 위험)
   그렇기 때문에 코드를 다른 방법으로 정리해줄 필요가 있다.
function handTitleClick() {
    h1.className = "clicked";
    if(h1.className === "clicked") {
        h1.className = "";
    } else {
        h1.className = "clicked";
    }
}
*/

/*
// 방법 1. const를 생성해서 className을 변경(에러가 발생할 부분을 축소)
// 하지만 h1에 good-font라는 다른 클래스가 있으면, clicked로 덮어씌어져서 사라지는 경우가 생김
// 또한, html의 클래스가 변경되면, CSS와 js까지 업데이트해줘야 하는 번거로운 경우가 생길 수 있어 좋지 않은 코드이다.
function handTitleClick() {
    const clickedClass = "clicked";
    if(h1.className === clickedClass) {
        h1.className = "";
    } else {
        h1.className = clickedClass;
    }
}
*/

// 방법 2. classList를 이용해서 className을 추가, 제거
// classList : element의 class 내용물을 조작하는 것을 허용
// classList에 class name이 포함되었다면 제거, 포함되지 않았다면 추가
// 이 코드를 사용하면 원래 있던 good-font클래스가 유지된 채로 good-fond clicked 이런식으로 추가 또는 제거됨
function handTitleClick2() {
    const clickedClass = "clicked";
    if(h1.classList.contains(clickedClass)) {
        h1.classList.remove(clickedClass);
    } else {
        h1.classList.add(clickedClass);
    }
}

// 방법 3. toggle function(방법2 코드를 toggle로 간단하게 구현)
// toggle : classList에 .clicked이 있다면 clicked를 제거, 없다면 추가
function handTitleClick3() {
    // const clickedClass = "clicked"; // 한번만 사용하기 때문에 toggle()에 바로 기입. 이 string을 반복하는 순간에 const생성이 필요
    h1.classList.toggle("clicked"); 
}

h1.addEventListener("click", handTitleClick3);