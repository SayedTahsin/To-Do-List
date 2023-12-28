const textBox = document.querySelector("#text-box");
const addButton = document.querySelector("#addBtn");
const task_list = document.querySelector(".taskList");
const allTaskButton = document.querySelector("#all");
const completedTaskButton = document.querySelector("#completed");
const pendingTaskButton = document.querySelector("#pending");

textBox.focus();

let newTaskCard = (text) => {
  let card = document.createElement("div");
  card.className = "task pending";

  card.appendChild(document.createTextNode(text));

  let ckbox = document.createElement("input");
  ckbox.type = "checkbox";
  ckbox.onchange = changeCardColor;
  card.appendChild(ckbox);

  return card;
};
let changeCardColor = () => {
  let children = task_list.querySelectorAll(".task");
  for (let i = 0; i < children.length; i++) {
    if (children[i].querySelector("input").checked) {
      children[i].classList.add("complete");
      children[i].classList.remove("pending");
    } else {
      children[i].classList.remove("complete");
      children[i].classList.add("pending");
    }
  }
};

addButton.onclick = (e) => {
  e.preventDefault();
  if (textBox.value !== "") {
    task_list.appendChild(newTaskCard(textBox.value));
  }
  textBox.value = "";
};

let showAllTask = () => {
  let children = task_list.querySelectorAll(".task");
  for (let i = 0; i < children.length; i++) {
    children[i].style.display = "block";
  }
};

let showPendingTask = () => {
  let children = task_list.querySelectorAll(".task");
  for (let i = 0; i < children.length; i++) {
    if (children[i].querySelector("input").checked) {
      children[i].style.display = "none";
    } else {
      children[i].style.display = "block";
    }
  }
};

let showCompletedTask = () => {
  let children = task_list.querySelectorAll(".task");
  for (let i = 0; i < children.length; i++) {
    if (!children[i].querySelector("input").checked) {
      children[i].style.display = "none";
    } else {
      children[i].style.display = "block";
    }
  }
};

allTaskButton.onclick = (e) => {
  showAllTask();
};

pendingTaskButton.onclick = () => {
  showPendingTask();
};

completedTaskButton.onclick = () => {
  showCompletedTask();
};
