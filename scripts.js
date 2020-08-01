function isPalindrome(word) {
    
    
    word = word.toLowerCase();
    
    // regex expression Stack Overflow https://stackoverflow.com/questions/9364400/remove-not-alphanumeric-characters-from-string
    let newWord = word.replace(/[^0-9a-z]/gi, "");
    
    let palindrome = true;
    
    let iterations = 1;
    
    for (let i = 0; i < newWord.length; i++) {
        for (let j = (newWord.length - iterations); j >= 0; j--) {
            if (newWord[i] !== newWord[j]) {
                palindrome = false;
                return palindrome;
            }
            else {
                iterations++;
                break;
            }
        }
    }
    
    return palindrome;
}

console.log(isPalindrome("EYe"));