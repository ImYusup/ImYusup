<<<<<<< HEAD
console.log('Jumat - More Arrays + Multidimensional Array'); 
console.log('[Exercises 13 (Auto)] Target Terdekat');
//13.Logic Challenge - Target Terdekat
function targetTerdekat(arr) {
  // you can only write your code here!
  var lookingO = arr.indexOf('o');
  //console.log('Nilai O : ' +lookingO);
  var isJarak = 0; //lookingO-i
  var realJarak = arr.length; //return hasil
  
  for (var i=0; i<arr.length; i++){
    if (arr[i] === 'x') {
      isJarak = Math.abs(lookingO-i);
        if (isJarak < realJarak) {
        realJarak = isJarak;
      }
    }
  }
  if (arr.indexOf('x') ===-1) {
    return 0;
  }
  //console.log('Real Jarak : ' +realJarak);
  return realJarak;
}

// TEST CASES
console.log(targetTerdekat(['', '', 'o', '', '', 'x', '', 'x'])); // 3
console.log(targetTerdekat(['o', '', '', '', 'x', 'x', 'x'])); // 4
console.log(targetTerdekat(['x', '', '', '', 'x', 'x', 'o', ''])); // 1
console.log(targetTerdekat(['', '', 'o', ''])); // 0
=======
console.log('Jumat - More Arrays + Multidimensional Array'); 
console.log('[Exercises 13 (Auto)] Target Terdekat');
//13.Logic Challenge - Target Terdekat
function targetTerdekat(arr) {
  // you can only write your code here!
  var lookingO = arr.indexOf('o');
  //console.log('Nilai O : ' +lookingO);
  var isJarak = 0; //lookingO-i
  var realJarak = arr.length; //return hasil
  
  for (var i=0; i<arr.length; i++){
    if (arr[i] === 'x') {
      isJarak = Math.abs(lookingO-i);
        if (isJarak < realJarak) {
        realJarak = isJarak;
      }
    }
  }
  if (arr.indexOf('x') ===-1) {
    return 0;
  }
  //console.log('Real Jarak : ' +realJarak);
  return realJarak;
}

// TEST CASES
console.log(targetTerdekat(['', '', 'o', '', '', 'x', '', 'x'])); // 3
console.log(targetTerdekat(['o', '', '', '', 'x', 'x', 'x'])); // 4
console.log(targetTerdekat(['x', '', '', '', 'x', 'x', 'o', ''])); // 1
console.log(targetTerdekat(['', '', 'o', ''])); // 0
>>>>>>> 7d9516bae2756a430bbbf55437f3e40000acf82c
console.log(targetTerdekat(['', 'o', '', 'x', 'x', '', '', 'x'])); // 2