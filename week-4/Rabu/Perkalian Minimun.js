function digitPerkalianMinimum(angka) {
  
  var simpanString = '';
  var arr =[];
  
  for (var i=1; i<=angka; i++){
    if (angka % i === 0) {
      var hitung =angka/i;
      simpanString += i.toString() + hitung.toString() + '-'; 
    }
  }
  var split = simpanString.split('-');
  split.pop();
  
  for (var j=0; j<split.length; j++){
    arr.push(split[j].length) ;
  }
  var min = Math.min.apply (null, arr);
  return min;
}

// TEST CASES
console.log(digitPerkalianMinimum(24)); // 2
console.log(digitPerkalianMinimum(90)); // 3
console.log(digitPerkalianMinimum(20)); // 2
console.log(digitPerkalianMinimum(179)); // 4
console.log(digitPerkalianMinimum(1)); // 2