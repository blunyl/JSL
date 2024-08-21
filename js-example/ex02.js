//함수
//익명 함수 function() {}
const f01 = function () {
  console.log("익명함수입니다");
};

f01();

//선언적 함수
function f02() {
  console.log("선언적 함수입니다");
}

//매개변수와 리턴값
//함수 호출 시 괄호에 적는게 매개변수, 함수의 최종 결과 리턴값
function sumAll(a, b) {
  for (let i = a; i <= b; i++) {
    output += i;
  }
  return output;
}
console.log(sumAll(1, 500));

function min(arr) {
  let output = arr[0];
  for (const item of arr) {
    if (output > item) {
      output = item;
    }
  }
  return output;
}

const testArr = [52, 273, 32, 103, 275, 24, 57];
console.log(min(testArr));

//전개 연산자 ... 매개변수들이 배열로 들어옴
function min(...items) {
  let output = items[0];
  for (const item of items) {
    if (output > item) {
      output = item;
    }
  }
  return output;
}
min(552, 273, 32, 103, 275, 24, 57);

//범위안의 숫자를 모두 곱하는 함수
function multiplyAll(a, b) {
  let result = 1;
  for (let i = a; i <= b; i++) {
    result *= i;
  }
  return result;
}
console.log(multiplyAll(1, 3));

//배열 값 중 최대값을 찾는 함수
const max = function (arr) {
  let output = arr[0];
  for (let i = 1; i < arr.length; i++) {
    //첫번째와 비교안해도 되니 1부터 시작
    if (output < arr[i]) {
      output = arr[i];
    }
  }
  return output;
};
console.log(max([1, 2, 3, 4]));

//숫자 중 최대값
const max2 = function (...arr) {
  //가변 인자 배열로 받음
  let output = arr[0];
  for (const data of arr) {
    if (output < data) {
      output = data;
    }
  }
  return output;
};
console.log(max2(1, 2, 3, 4));

//배열, 숫자 모두 받기
const max3 = function (first, ...rests) {
  let output;
  let items;

  if (Array.isArray(first)) {
    output = first[0];
    items = first;
  } else if (typeof first === "number") {
    output = first;
    items = rests;
  } else {
    return undefined;
  }
  for (const data of items) {
    if (output < data) {
      output = data;
    }
  }
  return output;
};
console.log(max3([1, 2, 3, 4]));
console.log(max3(1, 2, 3, 4));
