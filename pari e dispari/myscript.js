// faccio scegliere all'utente pari o dispari

let choice = prompt("pari o dispari?");
console.log(choice);

// dico all'utente di inserire un numero da 1 a 5

let numUser = parseInt(prompt("scegli un numero da 1 a 5"));
console.log(numUser);

// genero un numero random per il computer

function generaNumeroCasuale(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  console.log(generaNumeroCasuale(1, 5));