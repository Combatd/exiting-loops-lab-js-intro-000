function breakOut(array, changeValue, stopValue) {
  for(var i = 0; i < array.length; i+=1) {
    if (i === stopValue) { // break out of loop condition
      // array[i] = changeValue;
      break;
    }
    array[i] = changeValue;
  }
  return array; // return mutated array
}