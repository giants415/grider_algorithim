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

// Grider soln #2 using recursion
function steps(n, row = 0, stair = '') {
  if (n === row) {
    return;
  }

  if (n === stair.length) {
    console.log(stair);
    steps(n, row + 1);
    //return could be next to steps but this is easier to read
    return;
  }

  if (stair.length <= row) {
    stair += '#';
  } else {
    stair += ' ';
  }

  steps (n, row, stair);
}



// Grider Soln #1
// function steps(n) {
//   for (let row = 0; row < n; row++){
//     let stair = '';
//
//     // row processing
//     for (let column = 0; column < n; column++){
//       if (column <= row){
//         stair += '#';
//       } else {
//         stair += ' ';
//       }
//     }
//     console.log(stair);
//   }
// }




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
