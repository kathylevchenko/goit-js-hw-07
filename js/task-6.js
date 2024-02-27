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
  
  
  const boxCreate = document.querySelector("#boxes");
  const input = document.querySelector("input");
  const createBtn = document.querySelector('button[data-create]');
  const destroyBtn = document.querySelector('button[data-destroy]');
  
  
  createBtn.addEventListener("click", (event) => {
    boxCreate.innerHTML = '';
    let side = 20
    const amount = input.value
    if (amount >=1 && amount <= 100) {
      for( let i = 1; i <= amount; i += 1) {
        const divElem = document.createElement("div");
        side = side + 10;
        divElem.style.width = String(`${side}px`);
        divElem.style.height = String(`${side}px`);
        divElem.style.backgroundColor = getRandomHexColor();
       boxCreate.append(divElem);
      }
    }
    clearInput();
  }) 
  
  destroyBtn.addEventListener("click", (event) => {
    boxCreate.innerHTML = '';
  })