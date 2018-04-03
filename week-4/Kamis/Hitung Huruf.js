function hitungHuruf(kata) {
  
  var ubah1 = kata.split(' '); //Merubah mejadi split space
  var hitung1 = 0;
  var hasil = 1;
  
  for (var i=0; i<ubah1.length; i++){
   var ubah2 = ubah1[i].split(''); //merubah mejadi split per huruf
    
    for (var j=0; j<ubah2.length; j++){
      for (var k = 0; k<ubah2.length; k++){
        
        var hitung2 = 0;
        if (ubah2[k] === ubah2[j] && k !== j) {
          hitung2++; //nilai 1
        }
        if (hitung2 > hitung1){
        hitung1 = hitung2;
        hasil= ubah1[i];
        }
    } 
   }//console.log(ubah2);
  }
  return hasil;
}
 


// TEST CASES
console.log(hitungHuruf('Today, is the greatest day ever')); // greatest
console.log(hitungHuruf('I am a passionate developer')); // passionate
console.log(hitungHuruf('aku adalah anak gembala')); // adalah
console.log(hitungHuruf('rajin pangkal kaya')); // pangkal
console.log(hitungHuruf('mengayuh perahu di danau')); // danau