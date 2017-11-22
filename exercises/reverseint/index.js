// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {
  if (n === 0){
    return 0;
  } else {
    var arr = parseInt(n.toString().split('').reverse().join(''));
    if (Math.sign(n) === -1){
      return arr * -1;
    } else {
      return arr;
    }
  }
}

module.exports = reverseInt;
