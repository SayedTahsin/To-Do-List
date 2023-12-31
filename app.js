const textBox = document.querySelector("#text-box");
const addButton = document.querySelector("#addBtn");
const taskList = document.querySelector(".taskList");
const allTaskButton = document.querySelector("#all");
const completedTaskButton = document.querySelector("#completed");
const pendingTaskButton = document.querySelector("#pending");

const allTask = [];
let page = 1;
textBox.focus();

const createTaskCard = (text, complete, key) => {
  const card = document.createElement("div");
  card.className = "task";
  if (complete) card.classList.add("complete");
  else card.classList.add("pending");

  card.appendChild(document.createTextNode(text));

  const ckbox = document.createElement("input");
  ckbox.type = "checkbox";
  ckbox.checked = complete;
  ckbox.id = key;
  ckbox.onchange = changeCardColor;
  card.appendChild(ckbox);

  return card;
};

const populate = (...Arr) => {
  taskList.innerHTML = "";
  Arr.forEach((child) => {
    taskList.appendChild(
      createTaskCard(child.task, child.completed, child.key)
    );
  });
};

addButton.onclick = (e) => {
  e.preventDefault();
  if (textBox.value !== "") {
    const newtask = { task: textBox.value, completed: false, key: Date.now() };
    allTask.push(newtask);
  }
  
  textBox.value = "";
  if (page == 1) {
    populate(...allTask);
  } else if (page == 2) {
    showCompletedTask();
  } else {
    showPendingTask();
  }
};

const changeCardColor = (event) => {
  allTask.forEach((val) => {
    if (val.key == event.target.id) {
      if (val.completed === false) val.completed = true;
      else val.completed = false;
    }
  });
  if (page == 1) {
    populate(...allTask);
  } else if (page == 2) {
    showCompletedTask();
  } else {
    showPendingTask();
  }
};

const showAllTask = () => {
  page = 1;
  populate(...allTask);
};
const showPendingTask = () => {
  page = 3;
  const res = allTask.filter(negative);
  populate(...res);
};

const showCompletedTask = () => {
  page = 2;
  const res = allTask.filter(positive);
  populate(...res);
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

const negative = (val) => {
  return val.completed === false;
};
const positive = (val) => {
  return val.completed === true;
};
