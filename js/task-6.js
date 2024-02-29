 function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const input = document.querySelector('input[type="number"]');
const createBtn = document.querySelector("button[data-create]");
const destroyBtn = document.querySelector("button[data-destroy]");
const container = document.querySelector("#boxes");

createBtn.addEventListener("click", createBoxes);
destroyBtn.addEventListener("click", destroyBoxes);

function createBoxes() {
  const amount = input.valueAsNumber;
  if (amount >= 0 && amount <= 100) {
    container.innerHTML = "";
    const boxes = Array.from({ length: amount }, (_, index) => {
      const box = document.createElement("div");
      box.classList.add("box");
      box.style.backgroundColor = getRandomHexColor();
      box.style.width = `${30 + index * 10}px`;
      box.style.height = `${30 + index * 10}px`;

      return box;
    });
    container.append(...boxes);
    input.value = "";
  } else {
    alert("Please enter a number between 1 and 100");
  }
}

function destroyBoxes() {
  container.innerHTML = "";
}