function breakOut(array, changeValue, stopValue) {
  for(var i = 0; i < array.length; i+=1) {
    if (i !== stopValue) { 
      array[i] = changeValue;
    }
      break;
  }
  return array; // return mutated array
}