console.log('JS OK');

palindromeButton = document.getElementById('palindrome');
evenOddButton = document.getElementById('evenodd');

// Parola palindroma

// Creo una funzione che, data una parola, mi faccia sapere se è palindroma
function isPalindrome(word)
{
    let wordReverse = "";
    let j = word.length;

    // Creo la parola al contrario
    for(let i = 0; i < word.length; i++)
    {
        wordReverse += word.substring(j - 1, j);
        j--;
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