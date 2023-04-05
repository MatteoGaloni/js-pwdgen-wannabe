let nome = prompt("Qual è il tuo nome?");
console.log(`L'utente dichiara che il suo nome è ${nome}`);
let cognome = prompt("Qual è il tuo cognome?");
console.log(`L'utente dichiara che il suo cognome è ${cognome}`);
let colorePreferito = prompt("Qual è il tuo colore preferito?");
console.log(`L'utente dichiara che il suo colore preferito è ${colorePreferito}`);


document.getElementById("name").innerText = nome;
document.getElementById("surname").innerText = cognome;
document.getElementById("color").innerText = colorePreferito;
