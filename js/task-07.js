const inputRange = document.querySelector('#font-size-control');
const text = document.querySelector('#text');

const fontSizeControl = ({ currentTarget }) =>
  (text.style.fontSize = `${currentTarget.value}px`);

inputRange.addEventListener('input', fontSizeControl);