function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const bodyColor = document.querySelector("body");
const btn = document.querySelector(".change-color");
const spn = document.querySelector(".color");
btn.addEventListener("click", changeColor);

function changeColor (){
  bodyColor.style.backgroundColor = getRandomHexColor();
  spn.textContent = `-${bodyColor.style.backgroundColor}`
}















