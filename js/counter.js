let elemento = document.querySelector('#counterLabel');
elemento.innerHTML = 0;

const plus = document.querySelector('#btnPlus');
const minus = document.querySelector('#btnMinus');
plus.innerHTML = '+';
minus.innerHTML = '-';


function addNumber() {
    elemento++;
    elemento.innerHTML = elemento;
}

function removeNumber() {
    numero--;
    elemento.innerHTML = numero;
}

plus.addEventListener("click", addNumber)
minus.addEventListener("click", removeNumber)