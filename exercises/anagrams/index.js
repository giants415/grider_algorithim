// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False


function anagrams(stringA, stringB) {
  
}

//helper function for building charMap
function buildCharMap(str){
  const charMap = {};

  for (let char of str.replace(/[^\w]/g, "").toLowerCase()){
    charMap[char] = charMap[char] + 1 || 1;
  }

  return charMap;
}


//my original soln attempt
// function anagrams(stringA, stringB) {
//   let charMap = {};
//   var a = stringA.replace(/[^\w]/g, "").toLowerCase();
//   var b = stringB.replace(/[^\w]/g, "").toLowerCase();
//   const holder = [a,b];
//
//   for (let str of holder){
//     if (charMap[char]){
//       charMap[char]++;
//     } else {
//       charMap[char] = 1;
//     }
//   }
//   console.log(charMap);
// }

module.exports = anagrams;
