// chiedo all'utente di inserire una parola

let word = prompt("inserisci una parola").toLowerCase();

// creo la funzione per stabilire se la parola scelta è palindroma

function palWord(word) {
    let lunghezza = word.length;
    for (let i = 0; i < Math.floor(lunghezza / 2); i++) {
        if (word[i] !== word[lunghezza - 1 - i]) {
            return false;
        }
    }
    return true;
}

if (palWord(word)) {
    console.log("la parola è palindroma")
} else {
    console.log("la parola non è palindroma")
}
