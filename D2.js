/* ESERCIZIO 1
 Scrivi un algoritmo per trovare il più grande tra due numeri interi.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let numero1 = 100;
let numero2 = 20;

let maggiore = numero1 < numero2 ? console.log(numero2) : console.log(numero1);

/* ESERCIZIO 2
  Scrivi un algoritmo che mostri "not equal" in console se un numero intero fornito è diverso da 5.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let numbb = 6;

if (numbb !== 5) {
  console.log("not equal");
} else {
  console.log("equal");
}

/* ESERCIZIO 3
  Scrivi un algoritmo che mostri "divisibile per 5" in console se un numero fornito è perfettamente divisibile per 5 (suggerimento: usa l'operatore modulo)
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let num = 6;

if (num % 5 === 0) {
  console.log("il numero è divisibile per 5");
} else {
  console.log("il numero non è divisibile per 5");
}

/* ESERCIZIO 4
  Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let Number1 = 8;
let Number2 = 9;

let somma = Number1 + Number2;

let sottrazione = Number1 - Number2;

if (Number1 === 8 || Number2 === 8 || somma === 8 || sottrazione === 8) {
  console.log("8 è presente");
} else {
  console.log("8 non è presente");
}

/* ESERCIZIO 5
  Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".
  C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
  Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

console.log("-----------------------------------------------------------------------");

let totalShoppingCart = 35;

if (totalShoppingCart > 50) {
  console.log("il totale spesa supera 50 euro e hai diritto alla spedizione gratuita!");
  console.log("Totale spesa + spedizione: ", totalShoppingCart);
} else {
  console.log("il totale spesa non supera 50 euro, aggiungi altri prodotti al carrello per ottenere la spedizione gratuita!");
  console.log("Totale spesa + spedizione: ", totalShoppingCart + 10);
}

/* ESERCIZIO 6
  Stai lavorando su un sito di e-commerce. Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando come prima se le spedizioni sono gratuite oppure no e e calcolando il totale.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

console.log("-----------------------------------------------------------------------");

console.log("Oggi è il Black Friday, 20% di sconto su tutti i prodotti!!");

totalShoppingCart = totalShoppingCart * 0.8;

if (totalShoppingCart > 50) {
  console.log("il totale spesa supera 50 euro e hai diritto alla spedizione gratuita!");
  console.log("Totale spesa - 20% Black Friday:", totalShoppingCart, "+ spedizione gratuita!");
} else {
  console.log("il totale spesa non supera 50 euro, aggiungi altri prodotti al carrello per ottenere la spedizione gratuita!");
  console.log("Totale spesa - 20% Black Friday:", totalShoppingCart, "+ spedizione 10 euro, Totale:", totalShoppingCart + 10);
}

/* ESERCIZIO 7
  Crea tre variabili, e assegna un valore numerico a ciascuna di esse.
  Utilizzando un blocco condizionale, crea un algoritmo per ordinarle secondo il loro valore, dal più alto al più basso.
  Alla fine mostra il risultato in console.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let val1 = 540;
let val2 = 30;
let val3 = 1230;

let decrescente = [0, 0, 0];

// if (val1 > val2 && val3 < val2) {
//   console.log(val1, val2, val3);
// } else if (val2 > val1 && val3 < val1) {
//   console.log(val2, val1, val3);
// } else {
// }

if (val1 > val2 && val1 > val3 && val2 > val3) {
  decrescente[0] = val1;
  decrescente[1] = val2;
  decrescente[2] = val3;
  console.log(decrescente);
} else if (val1 > val2 && val1 > val3 && val3 > val2) {
  decrescente[0] = val1;
  decrescente[1] = val3;
  decrescente[2] = val2;
  console.log(decrescente);
} else if (val2 > val1 && val2 > val3 && val1 > val3) {
  decrescente[0] = val2;
  decrescente[1] = val1;
  decrescente[2] = val3;
  console.log(decrescente);
} else if (val2 > val1 && val2 > val3 && val3 > val1) {
  decrescente[0] = val2;
  decrescente[1] = val3;
  decrescente[2] = val1;
  console.log(decrescente);
} else if (val3 > val1 && val3 > val2 && val1 > val2) {
  decrescente[0] = val3;
  decrescente[1] = val1;
  decrescente[2] = val2;
  console.log(decrescente);
} else {
  decrescente[0] = val3;
  decrescente[1] = val2;
  decrescente[2] = val1;
  console.log(decrescente);
}

/* ESERCIZIO 8
  Crea un algoritmo per verificare che un valore fornito sia un numero oppure no (suggerimento: cerca su un motore di ricerca "typeof").
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let chetipo = "ciao";

typeof chetipo == "number" ? console.log(chetipo, " è un numero") : console.log(chetipo, " non è un numero");

/* ESERCIZIO 9
  Crea un algoritmo per controllare se un numero fornito sia pari o dispari (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let cosa = 5;

if (cosa % 2 === 0) {
  console.log("il numero è pari");
} else {
  console.log("il numero è dispari");
}

/* ESERCIZIO 10
  Modifica la logica del seguente algoritmo in modo che mostri in console il messaggio corretto in ogni circostanza.
  let val = 7
  if (val < 10) {
      console.log("Meno di 10");
    } else if (val < 5) {
      console.log("Meno di 5");
    } else {
      console.log("Uguale a 10 o maggiore");
    }
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 11
  Fornito il seguente oggetto, scrivi del codice per aggiungere una proprietà "city", il cui valore sarà "Toronto".
*/

const me = {
  name: "John",
  lastName: "Doe",
  skills: ["javascript", "html", "css"],
};

/* SCRIVI QUI LA TUA RISPOSTA */

console.log(me);

me.city = "Toronto";
console.log(me);

/* ESERCIZIO 12
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere la proprietà "lastName".
*/

/* SCRIVI QUI LA TUA RISPOSTA */

delete me.lastName;
console.log(me);

/* ESERCIZIO 13
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere l'ultimo elemento della proprietà "skills".
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const meme = structuredClone(me);
meme.skills = ["javascript", "html"];
console.log(meme);

/* ESERCIZIO 14
  Scrivi del codice per creare un array inizialmente vuoto. Riempilo successivamente con i numeri da 1 a 10.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const arr = [];

arr.push(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);

console.log(arr);

/* ESERCIZIO 15
  Scrivi del codice per sostituire l'ultimo elemento dell'array, ovvero il valore 10, con il valore 100.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

arr.splice(9, 1, 100);
console.log(arr);
