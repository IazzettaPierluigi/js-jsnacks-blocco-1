// Generatore di “nomi cognomi” casuali: il Grande Gatsby ha una lista di nomi e una lista di cognomi, e da queste vuole generare una falsa lista di invitati con nome e cognome.

//creo l'array dei nomi
const nomiPersone = [
    "Luke",
    "Leia",
    "Han",
    "Indiana",
    "Frodo",
    "Aragorn",
    "Neo",
    "Trinity",
    "Marty",
    "Ellen"
];

//creo l'array dei cognomi 
const cognomiPersone = [
    "Skywalker",
    "Organa",
    "Solo",
    "Jones",
    "Baggins",
    "Elessar",
    "Anderson",
    "Moss",
    "McFly",
    "Ripley"
  ];


  //creo un array da riempire col push dopo aver unito cognome e nome
  const listaPersone = []; 

  for (let i = 0; i <10; i++) {
    //nome random
    let nomeRandom = nomiPersone[Math.floor(Math.random() * nomiPersone.length)];

    //cognome random
    let cognomeRandom = cognomiPersone[Math.floor(Math.random() * cognomiPersone.length)];

    let personaRandom = `${nomeRandom} ${cognomeRandom} <br>`;

    //faccio il push di personaRandom nell'array listaPersone

    listaPersone.push(personaRandom);
  }

  document.writeln(`ecco le persone invitate: ${listaPersone}`)