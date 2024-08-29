const input = document.querySelector(".todo-input");
const button = document.querySelector(".Add-to-list");
const todo = document.querySelector(".task-list");
const calender = document.querySelector(".date-time");

const updateDate = () => {
  const now = new Date();
  const options = {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false, // 24h
  };

  const dateTimeString = now.toLocaleString("ko-KR", options);
  calender.textContent = dateTimeString;
};

updateDate();
setInterval(updateDate, 1000);

const addTask = () => {
  if (input.value.trim() === "") {
    alert("아무것도 입력되지 않았습니다");
    return;
  }

  let list = document.createElement("li");
  let span = document.createElement("span");
  let checkbox = document.createElement("input");
  let delBtn = document.createElement("button");

  checkbox.setAttribute("type", "checkbox");

  span.textContent = input.value;

  let icon = document.createElement("i");
  icon.classList.add("fas", "fa-trash-alt");
  delBtn.appendChild(icon);
  delBtn.classList.add("delete-btn");

  list.appendChild(checkbox);
  list.appendChild(span);
  list.appendChild(delBtn);
  todo.appendChild(list);

  todo.addEventListener("change", (e) => {
    if (e.target.type === "checkbox") {
      const listItem = e.target.parentElement;
      listItem.classList.toggle("checked", e.target.checked);

      if (e.target.checked) {
        todo.appendChild(listItem);
      } else {
        todo.insertBefore(listItem, todo.firstChild);
      }
    }
  });

  delBtn.addEventListener("click", (e) => {
    todo.removeChild(list);
  });

  input.value = "";
  input.focus();
};

button.addEventListener("click", addTask);
input.addEventListener("keyup", (e) => {
  if (e.keyCode === 13) {
    addTask();
  }
});
