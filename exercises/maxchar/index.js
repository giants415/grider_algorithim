// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
  var count = {};
  var max = 0;
  var maxChar = '';
  var arr = str.split('');
  arr.forEach((char) => {
    if (count.hasOwnProperty(char)){
      count[char] = count[char] + 1;
    } else {
      count[char] = 1;
    }
  });

  for (let char in count){
    if (count[char] > max){
      max = count[char];
      maxChar = char;
    }
  }
  return maxChar;
}

module.exports = maxChar;
