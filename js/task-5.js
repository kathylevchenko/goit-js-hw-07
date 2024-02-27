function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, 0)}`;
  }
  const colorBackGround = document.querySelector(".color");
  const colorBtn = document.querySelector(".change-color");

  colorBtn.addEventListener("click", (event) => {
    colorBackGround.textContent = getRandomHexColor()
    document.body.style.backgroundColor = colorBackGround.textContent
  })