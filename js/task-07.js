const inputList = document.querySelector('#font-size-control');
const textList = document.querySelector('#text');
const addList = document.querySelector('.add');

inputList.addEventListener('input', onChangeTextSize)

function onChangeTextSize(event) {
    const sizesNum = event.currentTarget.value;
    
    textList.style.fontSize = sizesNum + "px";
    console.log(sizesNum);
}
