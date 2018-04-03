<<<<<<< HEAD
console.log('[Exercises 13] X dan O');
//4. Logic Challenge - X dan O
function xo(str) {
  // you can only write your code here!
  var isX = 0 ;
  var isO = 0 ;
  for (var i=0; i<str.length; i++) {
    if (str[i] === 'x') {
      isX++;
    }
    else {
      isO++;
    }
  }
  //console.log(isX);
  //console.log(isO);
  if (isX === isO) {
    return true;
  }
  else {
    return false;
  }
}

// TEST CASES
console.log(xo('xoxoxo')); // true
console.log(xo('oxooxo')); // false
console.log(xo('oxo')); // false
console.log(xo('xxxooo')); // true
=======
console.log('[Exercises 13] X dan O');
//4. Logic Challenge - X dan O
function xo(str) {
  // you can only write your code here!
  var isX = 0 ;
  var isO = 0 ;
  for (var i=0; i<str.length; i++) {
    if (str[i] === 'x') {
      isX++;
    }
    else {
      isO++;
    }
  }
  //console.log(isX);
  //console.log(isO);
  if (isX === isO) {
    return true;
  }
  else {
    return false;
  }
}

// TEST CASES
console.log(xo('xoxoxo')); // true
console.log(xo('oxooxo')); // false
console.log(xo('oxo')); // false
console.log(xo('xxxooo')); // true
>>>>>>> 7d9516bae2756a430bbbf55437f3e40000acf82c
console.log(xo('xoxooxxo')); // true