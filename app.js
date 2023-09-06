/*const mon = "mon";
* const tue = "tue";
* const wed = "wed";
* const thu = "thu";
* const fri = "fri";
* const sat = "sat";
* const sun = "sun";
* const daysOfWeek2 = mon + tue + wed + thu + tri + sat + sun; // 좋지 않은 예, mon만, tue만, ... 골라서 활용 못함 
* console.log(daysOfWeek2) // montuewedthutrisatsun */

//                      0,     1,     2,     3,     4,     5
const daysOfWeek = ["mon", "tue", "wed", "thu", "tri", "sat"]; // [] 배열을 사용해서 나열, 필요한 항목을 골라서 사용 가능
console.log(daysOfWeek); // ["mon", "tue", "wed", "thu", "tri", "sat"]

// fri값을 가지고 오기 : []안에 번지수 넣기
console(daysOfWeek[4]); // tri

// 배열 안에 요일 더 추가하기
daysOfWeek.push("sun");
console.log(daysOfWeek); // ["mon", "tue", "wed", "thu", "tri", "sat", "sun"]