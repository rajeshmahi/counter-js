let counter = 0;

const incrementFunction = () => {
    counter++;
    document.getElementById('counter-number').textContent = counter;
}

const decrementFunction = () => {
    counter--;
    document.getElementById('counter-number').textContent = counter;
}