/* 회원정보를 array 구조로 정리하면, 각 항목이 어떤 것을 의미하는 지를 알 수 없기 때문에 적합한 방법이 아님
const user = ["sujung", 27, "song123", "sujung033131@gmail.com"] */

// Objects
let user = {
    name: "sujung",
    age: 27,
    id: "song123",
    email: "sujung033131@gmail.com"
}

console.log(user); // 'sujung', 27, 'song123', 'sujung033131@gmail.com'
console.log(user.name); // 'sujung'
console.log(user.age); // 27
console.log(user.id); // 'song123'
console.log(user.email); // 'sujung033131@gmail.com'

// Objects 안의 값 변경
user.name = "SongSujung";
user.age = user.age + 1;
console.log(user); // 정상적으로 변경됨 'SongSujung', 28, 'song123', 'sujung033131@gmail.com'

/* Objects 자체(const)를 변경하면 오류발생 - const는 업데이트할 수 없기 때문에
user = "SongSujung";
console.log(user); // 에러 */

// Objects 안에 값을 추가
user.phoneNum = "010-1234-5678";
console.log(user); // 'SongSujung', 28, 'song123', 'sujung033131@gmail.com', '010-1234-5678'