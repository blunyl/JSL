//자료형 변환
//1
const input = Number(prompt("inch 단위의 숫자를 입력해주세요."));
const cast = input;
alert(`${cast}inch는 ${cast * 2.54}cm 입니다`);

//2
const cm = Number(prompt("cm 단위의 숫자를 입력해주세요"));
const input2 = cm;
alert(`${cm}는 ${cm * 0.393701}inch 입니다.`);

//3
const pi = Number(prompt("원의 반지름을 입력해주세요"));
const width = 3.14 * pi * pi;
const circle = 2 * 3.14 * pi;
alert(`원의 반지름: ${pi}
원의 넓이 : ${width}
원의 둘레 : ${circle}`);

//4
const dollar = Number(prompt("달러 단위의 금액을 입력해주세요"));
const money = dollar;
alert(`달러 : ${money} -> 원화 : ${money * 1207}`);

//배열
const arr = [273, "string", true, function () {}, {}, [273, 103]];
//뒤에 요소 추가하기
arr.push("push");

//인덱스로 제거하기
arr.splice(4, 1); //4번째 요소부터 1개 제거

//값으로 제거하기
const index = arr.indexOf[273]; //특정 값의 위치를 찾음
arr.splice(index, 1); //없을경우 -1 리턴

//반복문
//for in: 배열을 하나씩 꺼내서 실행(인덱스 사용)
const todos = ["shopping", "mail", "pilates", "cleaning", "mopping"];
for (const i in todos) {
  console.log(`${i}번째 할일 : ${todos}`);
}

//for of
for (const todo of todos) {
  console.log(`할일:${todo}`);
}

//for
for (let i = 0; i < todos.length; i++) {
  console.log(`할 일 : ${todos[i]}`);
}

//1부터 100까지 곱한 값
let output = 1;
for (let i = 1; i <= 100; i++) {
  output *= i;
}
console.log(`1~100을 모두 곱하면 ${output}입니다.`);
