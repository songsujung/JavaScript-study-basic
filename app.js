// html에 접근해 특정 항목를 가져와 Javascript에서 수정해보자.

// html의 title이라는 id 요소를 가져와 title에 할당
const title = document.getElementById("title");

console.dir(title); // title object 안의 여러 요소들이 console에 표시됨

// Javascript에서 innerText, className을 수정해보자.
title.innerText = "Got you!";
title.className = "Hello!!!!!!!";

console.log(title.id); // title
console.log(title.innerText); // Got you! ( Grab me!에서 Got you!로 변경됨)
console.log(title.className); // Hello!!!!!!! ( Hello에서 Hello!!!!!!!로 변경됨)