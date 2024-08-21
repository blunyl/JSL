//객체 object, this 자신이 가진 속성
const product = {
  name: "apple",
  ingredient: "apple, sugar",
  origin: "philippine",
  eat: function (type) {
    alert(this.name + " is " + type);
  },
};

product.eat("jam");

//String 객체의 메서드
const stringA = " hi hello ";
stringA.trim(); //trim 문자열 양끝 공백 없애기

const stringB = "dollar,yen,euro,won";
stringB.split(","); //split 문자열을 잘라서 배열로 리턴

/* json 객체
자바스크립트 배열과 객체로 자료 표현
문자열, 숫자, 불린형만 사용 가능
key에 따옴표를 붙여야한다 */

const data = [
  {
    name: "python",
    price: 18000,
    publisher: "banbitmedia",
  },
  {
    name: "js",
    price: 20000,
    publisher: "banbitacademy",
  },
];

//stringfy()  자바스크립트 객체를 json 문자열로 변환
console.log(JSON.stringify(data));

//pasrse() json 문자열을 자바스크립트 객체로 전개할 때 사용
const json = JSON.stringify(data);
console.log(JSON.parse(json));

//Math 객체
//random() 0과 1 사이 숫자
const num = Math.random();
console.log(num * 50); //0~50 사이 숫자
console.log(Math.floor(num * 10 - 5)); //-5~5 사이 정수
//floor() 소수점을 버리고 숫자를 아래쪽으로 내림

//속성 지정하기
const book = {
  name: "python",
  price: 18000,
  publisher: "banbitmedia",
};

book.name = book.name !== undefined ? book.name : "not decided";
book.author = book.author !== undefined ? book.author : "unknown";

console.log(JSON.stringify(book));

//배열 다중할당
let [a, b] = [1, 2]; //a=1, b=2

let arrayA = [1, 2, 3, 4, 5];
const [c, d, e] = arrayA; // 1,2,3 까지 할당됨

//객체 다중할당
const person = {
  name: "John",
  age: 30,
};

const { name, age, city = "Unknown" } = person;
console.log(city); //unknown

//얕은 복사(참조 복사)
const produce1 = ["carrot", "broccoli", "spinach"];
const produce2 = produce1;
produce2.push("lettuce");
produce2.push("garlic");

console.log(produce1);
console.log(produce2);
//['carrot', 'broccoli', 'spinach', 'lettuce', 'garlic']로 둘의 값이 같음

/* 깊은 복사 : 복사한 두 배열이 완전히 독립적 참조가 아닌 다른 배열이 됨
수정해도 기존 배열에 영향을 미치지 않음, 전개 연산자 사용 */
const grocery1 = ["milk", "bread"];
const grocery2 = ["onion", ...grocery1]; // 배열 아무데나 올 수 있음
grocery2.push("potato");
grocery2.push("tomato");

console.log(grocery1); //["milk", "bread"]
console.log(grocery2); //["milk", "bread", "potato", "tomato"]
