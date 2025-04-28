// DATATYPEs
// Primative datatypes:
// string = tekst
// number = tall 
// boolean = sant/usant sjekk

// VARIABLES
// let = kan bytte verdi
// const = kan ikkje btte verdi
// var = utdatert

let userName = "Joakim";
userName = "Pæren"
console.log(userName);
console.log(typeof userName);

let userAge = 26;
console.log(userAge);
console.log(typeof userAge);

let isPresent = true;
console.log(isPresent);
console.log(typeof isPresent);

const firstName = "Joakim"
// firstName = "Ceasar"
console.log(firstName)

const lastName = "Pære"

// Variable chaining med +
let fullName = firstName + " " + lastName + "?"
console.log(fullName)

// Template litteral
fullName = `${firstName} ${lastName}??`
console.log(fullName)

const num1 = 10
const num2 = 10
const sum = num1 + num2
console.log(sum)

// NON-PRIMATIVE  DATATYPES
// Function = Ein blokk med kode som kjøres samtidig
// Array = Ein liste av data
// Object = key:value liste av data

function beeskneesCard() {
    console.log("Hei fra inni ein funksjon")
    // Sett opp variabler for navn og tittel
    const tittel = "Kursgåer"
    const forNavn = "Joakim"
    console.log(`${forNavn}, ${tittel}`)

    const main = document.querySelector("main")
    main.textContent = `${forNavn}, ${tittel}`
}
beeskneesCard()

