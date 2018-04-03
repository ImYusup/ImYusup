console.log('[Exercises 17] Total Digit Rekursif');
function totalDigitRekursif(angka) {
  // you can only write your code here!
  //convert to string
  var str = angka.toString();
  //console.log(typeof str);
  //console.log(str.slice(1, angka.length));
  
  if (str.length === 1){
    return parseInt(str);
  }
  else {
    return parseInt(str[0]) + totalDigitRekursif(parseInt(str.slice(1, angka.length)));
  }
}

// TEST CASES
console.log(totalDigitRekursif(512)); // 8
console.log(totalDigitRekursif(1542)); // 12
console.log(totalDigitRekursif(5)); // 5
console.log(totalDigitRekursif(21)); // 3
console.log(totalDigitRekursif(11111)); // 5
console.log(totalDigitRekursif(0)); // 0