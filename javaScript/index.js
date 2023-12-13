const value = document.getElementById('value');
const incrementbutton = document.getElementById('increment');
const decrementbutton = document.getElementById('decrement');
const resettbutton = document.getElementById('reset');

const updateValue = () => {
    value.innerHTML = count;
};

let count = 0;
let intervalId = 0;

incrementbutton.addEventListener('mousedown', () => {
    intervalId = setInterval(() => {
        count += 1;
        updateValue();
    }, 100);
});

decrementbutton.addEventListener('mousedown', () => {
    intervalId = setInterval(() => {
        count -= 1;
        updateValue();
    }, 100);
});

resettbutton.addEventListener('click', () => {
    count = 0;
    updateValue();
})

document.addEventListener('mouseup', () => clearInterval(intervalId));