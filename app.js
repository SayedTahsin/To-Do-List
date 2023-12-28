const textBox = document.querySelector("#text-box");
const addButton = document.querySelector("#addBtn");
const taskList = document.querySelector(".taskList");
const allTaskButton = document.querySelector("#all");
const completedTaskButton = document.querySelector("#completed");
const pendingTaskButton = document.querySelector("#pending");

textBox.focus();

const newTaskCard = (text) => {
  const card = document.createElement("div");
  card.className = "task pending";

  card.appendChild(document.createTextNode(text));

  const ckbox = document.createElement("input");
  ckbox.type = "checkbox";
  ckbox.onchange = changeCardColor;
  card.appendChild(ckbox);

  return card;
};
const changeCardColor = () => {
  const children = taskList.querySelectorAll(".task");

  children.forEach((child) => {
    if (child.querySelector("input").checked) {
      child.classList.add("complete");
      child.classList.remove("pending");
    } else {
      child.classList.remove("complete");
      child.classList.add("pending");
    }
  });
};

addButton.onclick = (e) => {
  e.preventDefault();
  if (textBox.value !== "") {
    taskList.appendChild(newTaskCard(textBox.value));
  }
  textBox.value = "";
};

const showAllTask = () => {
  const children = taskList.querySelectorAll(".task");

  children.forEach((child) => {
    child.style.display = "block";
  });
};

const showPendingTask = () => {
  const children = taskList.querySelectorAll(".task");

  children.forEach((child) => {
    if (child.querySelector("input").checked) {
      child.style.display = "none";
    } else {
      child.style.display = "block";
    }
  });
};

const showCompletedTask = () => {
  const children = taskList.querySelectorAll(".task");
  children.forEach((child) => {
    if (!child.querySelector("input").checked) {
      child.style.display = "none";
    } else {
      child.style.display = "block";
    }
  });
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
