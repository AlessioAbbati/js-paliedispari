// faccio scegliere all'utente pari o dispari

let choice = prompt("pari o dispari?");
console.log("hai scelto:" + choice);

// dico all'utente di inserire un numero da 1 a 5

let numUser = parseInt(prompt("scegli un numero da 1 a 5"));
console.log("hai scelto:" + numUser)
// genero un numero random per il computer


function generaNumeroCasuale(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
    
}
console.log("Bishop ha scelto:" + generaNumeroCasuale(1, 5));

let sum = choice + generaNumeroCasuale;

function isEven(number) {
    return number % 2 == 0;
} 

if (isEven(sum) == "pari") {
    console.log("La somma dei numeri è pari. Complimenti, hai vinto!");
} else if (!isEven(sum) == "dispari") {
    console.log("La somma dei numeri è dispari. Complimenti, hai vinto!");
} else {
    console.log("La somma dei numeri non corrisponde alla tua scelta. Hai perso!");
}
