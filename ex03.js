//자바스크립트는 함수도 매개변수로 전달가능 => 콜백함수
//콜백함수(1) 선언적함수 사용하기
function callThreeTimes(callback) {
  for (let i = 0; i < 3; i++) {
    callback(i); //매개변수 함수 호출가능
  }
}

function print(i) {
  console.log(`${i}번째 함수 호출`);
}
//callback 매개변수에 print() 함수 전달
callThreeTimes(print);

//콜백함수(2) 익명함수 사용하기
function callThreeTimes2(callback) {
  for (let i = 0; i < 3; i++) {
    callback(i);
  }
}
callThreeTimes2(function (i) {
  console.log(`${i}번째 함수 호출`);
});

//콜백함수 활용함수
/* 1. value: 현재 처리되고 있는 요소
2. index: 현재 요소의 인덱스
3. array: 호출된 배열*/

//forEach: 각 요소에 함수 호출하고 반환값은 없음
const numbers = [273, 52, 103, 32, 57];
numbers.forEach(function (value, index, array) {
  console.log(`${index}번째 요소 : ${value}`);
});

//map: 각 요소에 함수 호출하고 결과를 새 배열로 만듦
let num = [273, 52, 103, 32, 57];
num = num.map(function (value, index, array) {
  return value * value;
});

//filter : true만 모아서 새 배열 만듦
const numbers2 = [0, 1, 2, 3, 4, 5];
const evenNum = numbers2.filter(function (value) {
  return value % 2 === 0;
});
console.log(evenNum);

//화살표 함수(람다 함수), function 키워드 대신 => 사용
let numbers3 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
numbers3
  .filter((value) => value % 2 === 0)
  .map((value) => value * value)
  .forEach((value) => {
    console.log(value);
  });

//타이머함수: 특정 시간 후 콜백함수 호출
setTimeout(() => {
  console.log("1초 뒤 실행");
}, 1 * 1000); //밀리 초 단위

let count = 0;
setInterval(() => {
  console.log("1초마다 실행");
  count++;
}, 1 * 1000);

/*익명함수와 선언적 함수 차이
익명함수는 순차적으로 실행, 코드가 해당 줄을 읽을 때 생성
선언적 함수는 함수를 만들기 전 어디에서나 호출해도 문제없이 실행됨(호이스팅)*/

//익명함수 사용
let anonyFunc;

anonyFunc = function () {
  console.log("first");
};
anonyFunc = function () {
  console.log("second");
};
anonyFunc();

//선언적 함수 사용
func01();

function func01() {
  console.log("first");
}
function func01() {
  console.log("second");
}
//두 함수 모두 입력한대로 생성되고 이름이 같으면 덮어씀

//filter 로 홀수, 100이하 수, 5 배수만 출력
let num2 = [273, 25, 75, 52, 103, 32, 57, 24, 76];
num2 = num2.filter((value) => value % 2 === 1);
num2 = num2.filter((value) => value <= 100);
num2 = num2.filter((value) => value % 5 === 0);
console.log(num2);

//forEach
const array = ["사과", "배", "귤", "바나나"];
array.forEach((value, i) => {
  console.log(`${i}: ${value}`);
});
