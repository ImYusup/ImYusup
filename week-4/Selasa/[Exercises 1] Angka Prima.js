console.log('Selasa - Numbers Crunching and Play with Strings');
console.log('[Exercises 1] Angka Prima');
function angkaPrima(angka) {
  // you can only write your code here!
  let simpan = [];
 
  for (let i = 2; i <= angka; i++) {
    let counter = 0;
    for (let j=0; j<=i; j++) {
      if (i % j === 0) {
        counter++;
      }
    }
      if (counter === 2) {
        simpan.push([i]);
      }
  }
  //console.log(simpan);
  return parseInt(simpan[simpan.length-1]) === angka;
}
// TEST CASES
console.log(angkaPrima(3)); // true
console.log(angkaPrima(7)); // true
console.log(angkaPrima(6)); // false
console.log(angkaPrima(23)); // true
console.log(angkaPrima(33)); // false
