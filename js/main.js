
function generatoreNome() {
    let nome = prompt("Qual è il tuo nome?");
    console.log(`L'utente dichiara che il suo nome è ${nome}`);   
    document.getElementById("name").innerText = nome;

}

function generatoreCognome() {
    let cognome = prompt("Qual è il tuo cognome?");
    console.log(`L'utente dichiara che il suo cognome è ${cognome}`);
    document.getElementById("surname").innerText = cognome;

}

function generatoreColore() {
    let colorePreferito = prompt("Qual è il tuo colore preferito?");
    console.log(`L'utente dichiara che il suo colore preferito è ${colorePreferito}`);
    document.getElementById("color").innerText = colorePreferito;
}

function generatore() {
    // let nome = prompt("Qual è il tuo nome?");
    // console.log(`L'utente dichiara che il suo nome è ${nome}`);
    // let cognome = prompt("Qual è il tuo cognome?");
    // console.log(`L'utente dichiara che il suo cognome è ${cognome}`);
    // let colorePreferito = prompt("Qual è il tuo colore preferito?");
    // console.log(`L'utente dichiara che il suo colore preferito è ${colorePreferito}`);
    let nome = document.getElementById("name").innerText;
    let colore = document.getElementById("color").innerText;
    let cognome = document.getElementById("surname").innerText;
    let anno = 2023;
    let risultato = nome + cognome + colore + anno;
    // document.getElementById("name").innerText = nome;
    // document.getElementById("surname").innerText = cognome;
    // document.getElementById("color").innerText = colorePreferito;
    document.getElementById("risult").innerText = risultato;    

}


