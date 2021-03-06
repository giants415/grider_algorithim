// --- Directions
// Write a program that console logs the numbers
// from 1 to n. But for multiples of three print
// “fizz” instead of the number and for the multiples
// of five print “buzz”. For numbers which are multiples
// of both three and five print “fizzbuzz”.
// --- Example
//   fizzBuzz(5);
//   1
//   2
//   fizz
//   4
//   buzz

function fizzBuzz(n) {
  // var start = 1;
  // while (start <= n){
  //   if (start % 3 === 0 && start % 5 === 0){
  //     console.log('fizzbuzz');
  //   } else if (start % 3 === 0){
  //     console.log('fizz');
  //   } else if (start % 5 === 0){
  //     console.log('buzz');
  //   } else {
  //     console.log(start);
  //   }
  //   start++;
  // }



  //Grider's soln, uses for loop which removes the "start" variable
  for (let i = 1; i <= n; i++){
    if (i % 3 === 0 && i % 5 === 0){
      console.log('fizzbuzz');
    } else if (i % 3 === 0){
      console.log('fizz');
    } else if (i % 5 === 0){
      console.log('buzz');
    } else {
      console.log(i);
    }
  }
}

module.exports = fizzBuzz;
