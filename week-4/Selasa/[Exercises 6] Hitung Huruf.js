console.log('[Exercises 6] Hitung Huruf');
function hitungHuruf(kata) {
  // you can only write your code here!
  //this code same with split code (' ')
  kata += ' ';
  var tampungWords = [];
  var tampungKata = '';
  for (var i = 0; i < kata.length; i++) {
    if (kata[i] === ' ') {
      tampungWords.push(tampungKata);
      tampungKata = ' ';
    } else {
      tampungKata += kata[i];
    }
  }
  //console.log(tampungWords);

  //membandingkan nilai array dengan semua looping
  //1. looping untuk ambil kata
  //2. looping untuk ambil huruf
  //3. looping 3 untuk banding huruf
  var counter = 0;
  for (var p = 0; p < tampungWords.length; p++) {
    for (var q = 0; q < tampungWords[p].length; q++) {
      //console.log(tampungWords[p][q]);
      for (var r = 0; r < tampungWords[p].length; r++) {
        //console.log('compare II : ' +tampungWords[p][r]);
        if (
          tampungWords[p][q] === tampungWords[p][r] &&
          tampungWords[q] !== tampungWords[r]
        ) {
          //console.log('Tampung Q : ' +tampungWords[q]);
          //console.log('Tampung R : ' +tampungWords[r]);
          counter++;
          //console.log('counter : ' +counter);
        }
      }
    }
    //console.log(counter);
    if (counter > 1) {
      //console.log(tampungWords[p]);
      return tampungWords[p];
    }
  }
}
// TEST CASES
console.log(hitungHuruf('Today, is the greatest day ever')); // greatest
console.log(hitungHuruf('I am a passionate developer')); // passionate
console.log(hitungHuruf('aku adalah anak gembala')); // adalah
console.log(hitungHuruf('rajin pangkal kaya')); // pangkal
console.log(hitungHuruf('mengayuh perahu di danau')); // danau
