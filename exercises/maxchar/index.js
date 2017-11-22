// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
  var count = {};
  var arr = str.split('');
  arr.forEach((char) => {
    if (count.hasOwnProperty(char)){
      count[char] = count[char] + 1;
    } else {
      count[char] = 1;
    }
  });
  return count;
}

module.exports = maxChar;
