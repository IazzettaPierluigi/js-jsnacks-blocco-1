// -Stampa il cubo dei primi N numeri,
// dove N è un numero indicato dall’utente.

// creo la variabile dal prompt
let numeroUser = prompt("inserisci un numero")



//uso il for per stampare i cubi dei numeri fino al numero indicato
for (let i = 0; i <= numeroUser; i++){
    let cubo = i ** 3; //calcolo del cubo
    document.writeln(`il cubo di ${i} è ${cubo}`)
    
}
