const inputList = document.querySelector('#validation-input');
inputList.addEventListener('blur', onOutFocusSymbol);

function onOutFocusSymbol(event) {
    let symbolLength = event.currentTarget.value.length;
    event.currentTarget.dataset.length = 6;
    const numberN = event.currentTarget.dataset.length;
    if (symbolLength == numberN) {
        inputList.classList.add('valid');
        inputList.classList.remove('invalid');
    } else {
        inputList.classList.add('invalid');
        inputList.classList.remove('valid');
}     
}
