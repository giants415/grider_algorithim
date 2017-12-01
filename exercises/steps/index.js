// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

// Grider Soln #1
function steps(n) {
  for (let row = 0; row < n; row++){
    let stair = '';

    // row processing
    for (let column = 0; column < n; column++){
      if (column <= row){
        stair += '#';
      } else {
        stair += ' ';
      }
    }
    console.log(stair);
  }
}




//my initial soln
// function steps(n) {
//   let init = 1;
//   while (init <= n) {
//     let a = '#'.repeat(init);
//     let b = ' '.repeat(n - init);
//     console.log(a + b);
//     init++;
//   }
// }


module.exports = steps;
