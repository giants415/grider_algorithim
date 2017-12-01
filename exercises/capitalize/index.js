// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

//Grider's 1st soln; very similar to mine but much DRYer so I've combined the 2 here
function capitalize(str) {
  const output = [];
  for (let word of str.split(' ')){
    output.push(word[0].toUpperCase() + word.slice(1));
  }
  return output.join(' ');
}





//my original soln
// function capitalize(str) {
//   const output = [];
//   const input = str.split(' ');
//   for (let word of input){
//     let a = word[0].slice(0).toUpperCase();
//     let b = word.slice(1);
//     output.push(a + b);
//   }
//   return output.join(' ');
// }

module.exports = capitalize;
