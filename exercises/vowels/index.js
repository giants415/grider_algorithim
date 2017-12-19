// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0


//Grider's condensed soln
function vowels(str) {
  //regex explanation: letters in brackets = LMK if one of these are present
  //g = keep going after finding instance, i = insensitive to case
  const matches = str.match(/[aeiou]/gi);

  // ternary if matches is 'truthy' (i.e. not null), return matches.length else return 0 since
  // the regex above, will return null unless letters are present in which case an array is returned
  return matches ? matches.length : 0;
}



//Grider's iterative soln
// function vowels(str) {
//   let count = 0;
//   const checker = ['a', 'e', 'i', 'o', 'u'];
//
//   for (let char of str.toLowerCase()){
//     if (checker.includes(char)){
//       count++;
//     }
//   }
//
//   return count;
// }


//my initial soln
// function vowels(str) {
//   const a = str.toLowerCase().split('');
//   let count = 0;
//
//   for (i = 0; i <= a.length; i++){
//     if (a[i] === 'a' || a[i] === 'e' || a[i] === 'i' || a[i] === 'o' || a[i] === 'u'){
//       count++;
//     }
//   }
//   return count;
// }

module.exports = vowels;
