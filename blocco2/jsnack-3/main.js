// Crea un array di numeri interi e fai la somma di tutti gli elementi che sono in posizione dispari

//creo l'array dei numeri interi
const numeri = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
    ];

    document.writeln(numeri)

    //creo la variabile 

    let sommaDispari = 0;

    //ciclo for per calcolare la somma dei numeri dispari

    for (let i = 0; i < numeri.length; i++) {
        if (i % 2 !== 0 )
        sommaDispari += numeri[i]
    }

    document.writeln(`la somma totale dei numeri in posizione dispari è: ${sommaDispari}`)