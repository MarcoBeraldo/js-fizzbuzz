// Scrivi un programma che stampi in console i numeri da 1 a 100,
// ma che per i multipli di 3 stampi “Fizz” al posto del numero e per i multipli di 5 stampi “Buzz”.
// Per i numeri che sono sia multipli di 3 che di 5 stampi “FizzBuzz”.
// Prima di partire a scrivere codice poniamoci qualche domanda:
// Come faccio a sapere se un numero è divisibile per un altro?
// Abbiamo visto qualcosa di particolare che possiamo usare?
// Consigli del giorno:
// 1. Scriviamo sempre prima dei commenti in italiano per capire cosa vogliamo fare
// 2. Proviamo ad immaginare le operazioni che vogliamo far svolgere al nostro programma così come lo faremmo "a mano"



// inizio il ciclo da 1 a 100

for (let i = 1; i <= 100; i++) {

    // verifico se il numero è multiplo di 15 (quindi sia di 3 che di 5) per primo per non rompere i multipli di 3 e di 5
    if (i % 15 == 0) {
        // se è multiplo di 15 stampo in console 'fizzbuzz'
        let i = 'fizzbuzz'
        console.log(i)
    }

    // verifico se il numero è multiplo di 3
    else if (i % 3 == 0) {
        // se è multiplo di 3 stampo in console 'fizz'
        let i = 'fizz'
        console.log(i)
    }

    // verifico se il numero è multiplo di 5 
    else if (i % 5 == 0) {
        // se è multiplo di 3 stampo in console 'buzz'
        let i = 'buzz'
        console.log(i)
    }

    // se non è multiplo di nè di 3, nè di 5 e quindi neanche di 15, stampo 'i' come dal ciclo 'for'
    else {
        console.log(i)
    }
}