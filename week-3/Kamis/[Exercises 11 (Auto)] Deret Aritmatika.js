console.log('[Exercises 11 (Auto)] Deret Aritmatika');
//11. Logic Challenge - Tentukan Deret Aritmatika
function tentukanDeretAritmatika(arr) {
  // you can only write your code here!
  for (var i=0; i<arr.length; i++){
    return arr[i+1] - arr[i] === arr[arr.length-1] -  arr[arr.length-2];
  }
}

// TEST CASES
console.log(tentukanDeretAritmatika([1, 2, 3, 4, 5, 6])); // true
console.log(tentukanDeretAritmatika([2, 4, 6, 12, 24])); // false
console.log(tentukanDeretAritmatika([2, 4, 6, 8])); // true
console.log(tentukanDeretAritmatika([2, 6, 18, 54])); // false
console.log(tentukanDeretAritmatika([1, 2, 3, 4, 7, 9])); // false