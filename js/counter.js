let elemento = document.querySelector('#counterLabel');
elemento.innerHTML = 0;
let valore = 0;

const plus = document.querySelector('#btnPlus');
const minus = document.querySelector('#btnMinus');

plus.innerHTML = '+';
minus.innerHTML = '-';


function addNumber() {
    valore++;
    elemento.innerHTML = valore;
}

function removeNumber() {
    valore--;
    elemento.innerHTML = valore;
}

plus.addEventListener("click", addNumber)
minus.addEventListener("click", removeNumber)