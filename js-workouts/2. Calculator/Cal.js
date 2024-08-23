function toggleChange() {
  const toggle = document.querySelector(".toggle");
  const calculator = document.querySelector(".calculator");
  toggle.classList.toggle("active");
  calculator.classList.toggle("active");
}

function calculate(f) {
  try {
    return new Function("return " + f)();
  } catch (e) {
    return "Error";
  }
}

let value = "";
const button = document.querySelector(".button-grid");
const expression = document.querySelector(".expression");
const outcome = document.querySelector(".outcome");

const calClick = (e) => {
  if (!e.target.closest(".grid-item")) {
    return;
  }

  const text = e.target.closest(".grid-item").innerText.trim();
  if (["+", "-", "*", "/", "="].includes(text)) {
    if (value === "" || /[\+\-\*\/]$/.test(value)) {
      return;
    }
  }
  console.log(text);

  switch (text) {
    case "AC":
      value = "";
      expression.innerText = "";
      outcome.innerText = "";
      break;
    case "=":
      outcome.innerText = calculate(value);
      value = "";
      break;
    default:
      if (!(value == "" && text == "0")) {
        value += text;
        expression.innerText = value;
      }
      break;
  }
};

button.addEventListener("click", calClick);
