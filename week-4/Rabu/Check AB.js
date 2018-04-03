function checkAB(num) {
  
  var arr2 =[];
  var arr = num.split('');
  
  for (var i=0; i<arr.length; i++) {
    if(arr[i] !== ' '){
      arr2.push(arr[i]); //circular object array
    }
  }
  //console.log(arr2);
  //Looping untuk setiap huruf pda arr2
  for (var j=0; j<arr2.length; j++){
    //kondisi utuk jarak a & b
    if (arr2 [j] === 'a'){
      for (var k=j; k<=(j+3); k++){
        if (arr2 [k] === 'b'){
          return true;
        }
      }
    }
  }
  return false;
}

// TEST CASES
console.log(checkAB('lane borrowed')); // true
console.log(checkAB('i am sick')); // false
console.log(checkAB('you are boring')); // true
console.log(checkAB('barbarian')); // true
console.log(checkAB('bacon and meat')); // false