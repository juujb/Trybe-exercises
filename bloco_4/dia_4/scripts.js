

function verificaPalindrome(word) {

    let reverseWord = '';
    for (let i = word.length - 1; i >= 0; i--) {
        reverseWord += word[i];
    }

    
    if (word === reverseWord) {
        palindrome = true
    } else {
        palindrome = false
    }

    return console.log(palindrome)
}

verificaPalindrome('arara');

