function breakOut(array, changeValue, stopValue) {
  for(var i = 1; i < array.length; i+=1) {
    if (i == stopValue) { 
      break;
    }
    array[i] = changeValue;
    
  }
  return array; // return mutated array
}

function keepGoing(array, changeValue, skipValue) {
  for(var i = 0; i < array.length; i++) {
    if (i === skipValue) {
    continue; // skip this iteration of loop
    }
  array[i] = changeValue;
  }
  return array; // return the array
}