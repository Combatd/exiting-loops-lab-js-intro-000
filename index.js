function breakOut(array, changeValue, stopValue) {
  for(var i = 0; i < stopValue; i+=1) {
    if (array[i] !== stopValue) { 
      array[i] = changeValue;
    }
    
    break;
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