console.log('JS OK');

palindromeButton = document.getElementById('palindrome');
evenOddButton = document.getElementById('evenodd');

// Parola palindroma

// Creo una funzione che, data una parola, mi faccia sapere se è palindroma
function isPalindrome(word)
{
    let wordReverse = "";

    // Creo la parola al contrario
    for(let i = word.length; i >= 0; i--)
    {
        wordReverse += word.substring(i - 1, i);
    }

    // Verifico se la parola è palindroma o no
    if(wordReverse === word) return true;
    else return false;
}

// Al click del pulsante, verifico se la parola inserita dall'utente è palindroma
palindromeButton.addEventListener('click', function()
{
    const userWord = prompt('Inserisci una parola: ');

    if(isPalindrome(userWord) === true) console.log("La parola è palindroma");
    else console.log("La parola non è palindroma");
})

// Pari o dispari

// Creo una funzione che restituisca un numero randomico tra un minimo e un massimo
function randomNumber(min, max)
{
    const result = Math.floor(Math.random() * (max + 1 - min)) + min;
    return result;
}

// Creo una funzione che, dato un numero, mi faccia sapere se è pari
function isEven(n)
{
    if(n % 2 === 0) return true;
    else return false;
}

// Al click del pulsante
evenOddButton.addEventListener('click', function()
{
    // Chiedo all'utente le sue scelte
    const userChoice = prompt('Pari o dispari?', 'pari').toLowerCase();
    console.log('Scelta dell\'utente:', userChoice);
    const userNumber = parseInt(prompt('Inserisci un numero da 1 a 5', 2));
    console.log('Numero dell\'utente:', userNumber);

    // Creo il numero del computer
    const computerNumber = randomNumber(1, 5);
    console.log('Numero del computer:', computerNumber);

    // Sommo i due numeri
    const sum = userNumber + computerNumber;
    console.log('Somma:', sum);

    // Verifico chi ha vinto in base alla somma e alla scelta dell'utente
    if(isEven(sum))
    {
        if(userChoice === 'pari') console.log('Ha vinto l\'utente');
        else console.log('Ha vinto il computer');
    }
    else
    {
        if(userChoice === 'dispari') console.log('Ha vinto l\'utente');
        else console.log('Ha vinto il computer');
    }
})