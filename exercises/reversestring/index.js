// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
  // V simplest solution V
  // return str.split('').reverse().join('');

  // Solution that doesnt use reverse() "cheat"
  // var reverse = [];
  // var split = str.split('');
  // for (var i=str.length - 1; i > -1; i--){
  //   reverse.push(split[i]);
  // }
  // var joined = reverse.join('');
  // return joined;

  // uses for/of syntax
  // let reversed = '';
  //
  // for (let character of str){
  //   reversed = character + reversed;
  // }
  //
  // return reversed;

  // demonstrates knowledge of ES2015. can be simplified more though
  return str.split('').reduce((reversed, character) => {
    return character + reversed;
  }, '');
}

module.exports = reverse;
