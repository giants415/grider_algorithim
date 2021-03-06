// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

function chunk(array, size) {

  //DOWNSIDE of my soln: mutates original array.
  //SOLN: Create copy of array to mutate or use slice method
  // container = [];
  // while (array.length > 0){
  //   container.push(array.splice(0,size));
  // }
  // return container;
  //


  //Grider's Basic Soln
  // const chunked = [];
  //
  // for (let element of array){
  //   const last = chunked[chunked.length - 1];
  //   if(!last || last.length === size){
  //     chunked.push([element]);
  //   } else {
  //     last.push(element);
  //   }
  // }
  // return chunked



  //Grider's Slice Soln
  const chunked = [];
  let index = 0;

  while (index < array.length){
    chunked.push(array.slice(index, index + size));
    index += size;
  }

  return chunked;
}

module.exports = chunk;
