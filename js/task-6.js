function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, 0)}`;
  }
  function clearInput() {
    let getValue= document.querySelector("input");
      if (getValue.value !="") {
          getValue.value = "";
      }
  }

  function createBoxes(amount) {
    if (amount >=1 && amount <= 100) {
    for (let i = 0; i < amount; i++) {
      const div = document.createElement('div');
      div.style.width = `${30 + i * 10}px`;
      div.style.height = `${30 + i * 10}px`;
      div.style.background = getRandomHexColor();
      document.querySelector('#boxes').appendChild(div);
    }
  }
  }
  
  function destroyBoxes() {
    let boxes = document.querySelector('#boxes');
    while (boxes.firstChild) {
      boxes.removeChild(boxes.firstChild);
    }
  }
  
  const controls = document.querySelector('#controls');
  const createButton = controls.querySelector('[data-create]');
  const destroyButton = controls.querySelector('[data-destroy]');
  const input = controls.querySelector('input');
  
  createButton.addEventListener('click', () => {
    createBoxes(input.value);
  });
  
  destroyButton.addEventListener('click', () => {
    destroyBoxes();
    clearInput();
  });