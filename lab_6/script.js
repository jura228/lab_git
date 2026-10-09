// ===== Налаштування варіанту =====
const STUDENT_NAME = "Струсь Юрій"; // <-- впиши своє ім'я та прізвище
const VARIANT = 14;

// ===== 1. Зміна вмісту елемента (клік) =====
const text = document.getElementById("text");
const changeBtn = document.getElementById("change-btn");

function changeText() {
  text.textContent = "Текст змінено! Це новий вміст.";
  // перезапуск анімації
  text.classList.remove("changed");
  void text.offsetWidth;
  text.classList.add("changed");
}
changeBtn.addEventListener("click", changeText);

// ===== 2. Наведення курсору – зміна стилю =====
const hoverBtn = document.getElementById("hover-btn");

hoverBtn.addEventListener("mouseover", () => {
  hoverBtn.style.background = "linear-gradient(135deg, #f59e0b, #ec4899)";
  hoverBtn.style.fontSize = "20px";
  hoverBtn.style.transform = "rotate(-3deg) scale(1.08)";
});
hoverBtn.addEventListener("mouseout", () => {
  hoverBtn.style.background = "";
  hoverBtn.style.fontSize = "";
  hoverBtn.style.transform = "";
});

// ===== 3. Додавання / видалення елементів =====
const container = document.getElementById("container");
const addBtn = document.getElementById("add-btn");
const removeBtn = document.getElementById("remove-btn");
let itemCount = 0;

addBtn.addEventListener("click", () => {
  itemCount++;
  const item = document.createElement("div");
  item.classList.add("new-item");
  item.textContent = `Це новий доданий елемент №${itemCount}.`;
  container.appendChild(item);
  console.log("Додано елемент", itemCount);
});

removeBtn.addEventListener("click", () => {
  const last = container.lastElementChild;
  if (last && !last.classList.contains("removing")) {
    last.classList.add("removing");
    last.addEventListener("animationend", () => last.remove());
    console.log("Останній елемент видалено");
  }
});

// ===== 4. Додаткове завдання: натиснути VARIANT разів =====
const variantBtn = document.getElementById("variant-btn");
const counter = document.getElementById("counter");
let clicks = 0;

variantBtn.addEventListener("click", () => {
  clicks++;
  counter.textContent = `Натискань: ${clicks} / ${VARIANT}`;
  counter.classList.remove("bump");
  void counter.offsetWidth;
  counter.classList.add("bump");
  if (clicks === VARIANT) {
    alert(`${STUDENT_NAME} варіант номер ${VARIANT}!`);
    clicks = 0;
    counter.textContent = `Натискань: 0 / ${VARIANT}`;
  }
});