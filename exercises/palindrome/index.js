// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

function palindrome(str) {
  //doubles "work" done by the function but does solve the question
  return str.split('').every((char, i) => {
    return char === str[str.length - 1 - i];
  });

  // most "straight forward" solution
  // const reverse = str.split('').reverse().join('');
  // return reverse === str;
}

module.exports = palindrome;
