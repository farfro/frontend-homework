// Add your code here

function pick() {
    return Math.floor(Math.random() * 255);
}

let body = document.querySelector('body');
let number = document.querySelector('#number');
let button = document.querySelector('button');

function setColor(onInter) {
    return setInterval(() => {
        body.style.background = `rgba(${pick()}, ${pick()}, ${pick()}, 0.5)`;
    }, onInter);
}

let time;
button.classList.add('bg-primary');

button.addEventListener('click', () => {

    if (button.textContent === 'start') {
        button.innerHTML = 'stop';
        button.classList.remove('bg-primary');
        button.classList.add('bg-danger');
        if(number.value !== 0) {  
            clearInterval(time); 
            time = setColor(number.value * 1000);
        }
    }
    else {
        clearInterval(time);
        button.innerHTML = 'start';
        button.classList.remove('bg-danger');
        button.classList.add('bg-primary');
    }
})
