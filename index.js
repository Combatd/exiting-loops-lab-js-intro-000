function breakOut(array, changeValue, stopValue) {
  for(var i = 0; i < array.length; i+=1) {
    array[i] = changeValue;
    if (i === stopValue) { // break out of loop condition
      array[i] = changeValue;
      break;
    }
  }
  return array; // return mutated array
}