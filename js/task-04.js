let counterValue = 0;
const valueRef = document.querySelector('#value');
const decrementBtn = document.querySelector('[data-action="decrement"]');
const incrementBtn = document.querySelector('[data-action="increment"]');
// console.log(valueRef);
// console.log(decrementBtn);
// console.log(incrementBtn);

const onClickDecrementBtn = (event) => {
    counterValue -= 1;
    valueRef.textContent = counterValue;
};
const onClickIncrementBtn = (event) => {
    counterValue += 1;
    valueRef.textContent = counterValue;
};

decrementBtn.addEventListener('click', onClickDecrementBtn);
incrementBtn.addEventListener('click', onClickIncrementBtn);
