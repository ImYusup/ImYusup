<<<<<<< HEAD
console.log('Rabu - Logic Challenges Refresh');
console.log('[Exercises 5 (Auto)] Palindrome');
//5. Logic Challenge - Palindrome
function palindrome(kata) {
  // you can only write your code here!
  var hasilKata = '';
  for (var i=kata.length-1; i>=0; i--){
    hasilKata += kata[i];
  }
  //console.log(hasilKata);
   return hasilKata === kata;
}

// TEST CASES
console.log(palindrome('katak')); // true
console.log(palindrome('blanket')); // false
console.log(palindrome('civic')); // true
console.log(palindrome('kasur rusak')); // true
console.log(palindrome('mister')); // false
=======
console.log('Rabu - Logic Challenges Refresh');
console.log('[Exercises 5 (Auto)] Palindrome');
//5. Logic Challenge - Palindrome
function palindrome(kata) {
  // you can only write your code here!
  var hasilKata = '';
  for (var i=kata.length-1; i>=0; i--){
    hasilKata += kata[i];
  }
  //console.log(hasilKata);
   return hasilKata === kata;
}

// TEST CASES
console.log(palindrome('katak')); // true
console.log(palindrome('blanket')); // false
console.log(palindrome('civic')); // true
console.log(palindrome('kasur rusak')); // true
console.log(palindrome('mister')); // false
>>>>>>> 7d9516bae2756a430bbbf55437f3e40000acf82c
