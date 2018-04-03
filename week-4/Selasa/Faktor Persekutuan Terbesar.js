function fpb (angka1, angka2) {
  
  var nilaiMax = Math.max(angka1, angka2); //ex1: 16
  var tampung = []; //Menampung angka persekutuan
  
  //mencari angka pd persekutuan
  for (var i=0; i<angka2; i++) {
    if (angka1 % i === 0 && angka2 % i === 0) {
      tampung.push(i);
    }
  }
  
  //Mencari nilai terbesar pd angka di perskutuan
  var max = tampung [0]; //ex1 : [1,2,4]
  for (var j=1; j<tampung.length; j++){
    if (tampung[j] > max){
      max = tampung[j];
    }
  }
  
  return max;
}

// TEST CASES
console.log(fpb(12, 16)); // 4
console.log(fpb(50, 40)); // 10
console.log(fpb(22, 99)); // 11
console.log(fpb(24, 36)); // 12
console.log(fpb(17, 23)); // 1