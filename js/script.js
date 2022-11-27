//PROBLEMA
//generare password

// - 1 Chiedere Nome
let nome = prompt("inserire nome")
console.log(nome)

// - 2 Chiedere Cognome
let surname = prompt("inserire cognome")
console.log(surname)


// - 3 Chiedere Colore
let color = prompt("inserire colore")
console.log(color)


// - 4 Concatenare
let concat = nome+surname+color+21;
console.log(concat)

// - 5 Risultato a schermo
document.getElementById("unsecure-password").innerHTML=concat;