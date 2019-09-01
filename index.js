function breakOut(array, changeValue, stopValue) {
  for(var i = 0; i < array.length; i+=1) {
    if (i !== stopValue) { 
      array[i] = changeValue;
    } else {
      break;
    }
  }
  return array; // return mutated array
}