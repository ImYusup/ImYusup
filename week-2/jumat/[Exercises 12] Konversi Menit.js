<<<<<<< HEAD
console.log('Jumat-[Exercises 12] Konversi Menit');
//3.Logic Challenge - Konversi Menit
function konversiMenit(menit) {
  // you can only write your code here!
  var jam = menit/60;
  var isHours = Math.floor(jam);
  //console.log(isHours);
  
  var minute = menit % 60;
  //console.log(minute);
  var nol='';
  if(minute < 10) {
    nol += 0;
  }
  return isHours+ ':' +nol+ +minute; 
}

// TEST CASES
console.log(konversiMenit(63)); // 1:03
console.log(konversiMenit(124)); // 2:04
console.log(konversiMenit(53)); // 0:53
console.log(konversiMenit(88)); // 1:28
=======
console.log('Jumat-[Exercises 12] Konversi Menit');
//3.Logic Challenge - Konversi Menit
function konversiMenit(menit) {
  // you can only write your code here!
  var jam = menit/60;
  var isHours = Math.floor(jam);
  //console.log(isHours);
  
  var minute = menit % 60;
  //console.log(minute);
  var nol='';
  if(minute < 10) {
    nol += 0;
  }
  return isHours+ ':' +nol+ +minute; 
}

// TEST CASES
console.log(konversiMenit(63)); // 1:03
console.log(konversiMenit(124)); // 2:04
console.log(konversiMenit(53)); // 0:53
console.log(konversiMenit(88)); // 1:28
>>>>>>> 7d9516bae2756a430bbbf55437f3e40000acf82c
console.log(konversiMenit(120)); // 2:00