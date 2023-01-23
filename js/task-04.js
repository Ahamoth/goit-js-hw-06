const counter = {
    value: 0,
    increment() {
        this.value += 1;
    },
    decrement() {
        this.value -= 1;
    },
}

console.log(counter.value);
const btnDecrementList = document.querySelector('button[data-action="decrement"]');
const btnIncrementtList = document.querySelector('button[data-action="increment"]');
const valueList = document.querySelector('#value');

btnDecrementList.addEventListener('click', function () {
    counter.decrement();
    valueList.textContent = counter.value;
}
    );
btnIncrementtList.addEventListener('click', function () {
    counter.increment()
    valueList.textContent = counter.value;
});
