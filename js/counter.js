let valore = 0;

let elemento = document.createElement("text");
elemento.className = "numberBig";
elemento.innerHTML=valore;
document.body.appendChild(elemento);

const aggiungi = document.createElement("btnPlus");
aggiungi.className = "btnPlus";
aggiungi.innerHTML = "+";
document.body.appendChild(aggiungi);

const rimuovi = document.createElement("btnMinus");
rimuovi.className = "btnMinus";
rimuovi.innerHTML = "-";
document.body.appendChild(rimuovi);

function addNumber() {
    valore++;
    elemento.innerHTML = valore;
}

function removeNumber() {
    valore--;
    elemento.innerHTML = valore;
}

aggiungi.addEventListener("click", addNumber)
rimuovi.addEventListener("click", removeNumber)