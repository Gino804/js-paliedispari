# Pali e dispari

## Traccia:

<br>

### Palidroma

- Chiedere all’utente di inserire una parola
- Creare una funzione per capire se la parola inserita è palindroma

### Pari e Dispari

- L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
- Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
- Sommiamo i due numeri
- Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
- Dichiariamo chi ha vinto.

## Steps:

### Palindroma

- Creo una funzione che mi faccia sapere se una parola è palindroma:
  - Creo una variabile in cui andrò ad inserire la parola al contrario
  - **SE** la parola al contrario è uguale alla parola originale
    - La funzione restituisce un valore vero
  - **ALTRIMENTI**
    - La funzione restituisce un valore falso
- Chiedo una parola all'utente
- **SE** la funzione invocata con quella parola come parametro restituisce un valore vero
  - Stampo in console "la parola è palindroma"
- **ALTRIMENTI**
  - Stampo in console "la parola non è palindroma"

### Pari o dispari

- Creo una funzione che restituisca un numero randomico compreso tra due parametri:
  - Creo un numero randomico compreso tra i due parametri
  - La funzione restituisce quel numero
- Creo una funzione che mi faccia sapere se un numero è pari:
  - **SE** il numero diviso per due dà resto 0
    - La funzione restituisce un valore vero
  - **ALTRIMENTI**
    - La funzione restituisce un valore falso
- Chiedo all'utente di scegliere pari o dispari, e di inserire un numero da 1 a 5
- Creo una variabile in cui invoco la funzione per il numero random, passandole come parametri 1 e 5
- Sommo i due numeri
- **SE** la funzione invocata con la somma come parametro restituisce un valore vero
  - **SE** l'utente ha scelto pari
    - Stampo in console "ha vinto l'utente"
  - **ALTRIMENTI**
    - Stampo in console "ha vinto il computer"
- **ALTRIMENTI**
  - **SE** l'utente ha scelto dispari
    - Stampo in console "ha vinto l'utente"
  - **ALTRIMENTI**
    - Stampo in console "ha vinto il computer"
