// Blocco 1 - JSnack 3
// Il software deve chiedere per 10 volte all’utente di inserire un numero.
// Il programma stampa la somma di tutti i numeri inseriti.

let somma = 0

for (let i = 1; i <= 10; i++) {
    let input = prompt("inserisci un numero");

    somma += +input;
}

console.log(`la somma è ${somma}`)