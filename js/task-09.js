function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

console.log(getRandomHexColor());

const bodyList = document.querySelector('body');
const spanList = document.querySelector('.color');
const btnList = document.querySelector('.change-color');

btnList.addEventListener('click', onChangeColorBg);

function onChangeColorBg() {
  const colorNum = getRandomHexColor();
  bodyList.style.backgroundColor = colorNum;
  spanList.textContent = colorNum;
}
