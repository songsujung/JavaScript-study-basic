// html에 접근해 특정 항목를 가져와 Javascript에서 수정해보자.-2 querySelector

// querySelector로 hello className요소의 h1태그를 가져와 title에 할당(element가 한 개일때)
// const title = document.querySelector(".hello h1"); // .은 클래스라는 뜻

// console.log(title);

// querySelectorAll로 조건에 부합하는 모든 hello className요소의 h1태그를 가져와 title에 할당(element가 여러 개일때)
const title = document.querySelectorAll(".hello h1"); // .은 클래스라는 뜻

console.log(title);