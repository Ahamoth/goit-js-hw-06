function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const inputList = document.querySelector('input');
const buttonCreateList = document.querySelector('button[data-create]');
const buttonDestroyList = document.querySelector('button[data-destroy]');
const boxList = document.querySelector('#boxes');
buttonCreateList.addEventListener('click', createBoxes);
buttonDestroyList.addEventListener('click', destroyBoxes);
function createBoxes() {
const boxesArray = []; 
  const amount = inputList.value; 
  console.log(amount); 
    for (let i = 0; i < amount; i += 1) {
    let widthNum = 30; 
    let heightNum = 30;
    widthNum += i * 10;
    heightNum += i * 10;
const divs = document.createElement('div');
divs.classList.add('box1')
 divs.style.width = widthNum +'px';
 divs.style.height = heightNum +'px';
 divs.style.backgroundColor = getRandomHexColor();
 boxesArray.push(divs);
 }
 boxList.append(...boxesArray);
}
function destroyBoxes() {
  const boxDel = document.querySelectorAll('.box1');
  console.log(boxDel);
  for (let list of boxDel) {
    list.remove();
  }
}
