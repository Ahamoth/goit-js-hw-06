const inputList = document.querySelector('#name-input');
const nameLabelList = document.querySelector('#name-output');

console.log(nameLabelList);

inputList.addEventListener('input', onInputChange);

function onInputChange(event) {
    
    nameLabelList.textContent = event.currentTarget.value;
    if (event.currentTarget.value === "") {
        nameLabelList.textContent = 'Anonymous';
    };
}
