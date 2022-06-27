numero = 0;
let elemento = document.querySelector('#counterLabel');
let plus = document.querySelector('#btnPlus');
let minus = document.querySelector('#btnMinus');


function addNumber() {
    numero++;
    elemento.innerHTML = numero;
}

function removeNumber() {
    numero--;
    elemento.innerHTML = numero;
}

plus.addEventListener("click", addNumber)
minus.addEventListener("click", removeNumber)