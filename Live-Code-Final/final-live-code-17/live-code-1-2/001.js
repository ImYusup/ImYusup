/**
Buatlah sebuah algoritma untuk kasus berikut:
Sebuah becak ketika dikayuh oleh pemiliknya yang tidak membawa penumpang memiliki kecepatan 20 km/jam. Jumlah penumpang yang bisa dibawa oleh becak tersebut bervariasi (maksimal 4 orang) dan kecepatan ketika becak itu dikayuh mengalami penurunun:
 - Lebih dari 2 orang kecepatan becak berkurang 5 km/jam
 - Maksimal penumpang kecepatan becak berkurang 7 km/jam
 - Selain itu kecepatan becak hanya berkurang 2 km/jam
 Tampilkan kecepatan becak sekarang jika membawa x penumpang
 noted: x bisa di isi nilai berapa saja (maksimal 4)
 **/


//your alogritma/pseudocode here
//psedecode
/*
SIMPAN dan TULIS banyaknya orang pada 'Jumlah Penumpang'
SIMPAN dan TULIS KECEPATAN MAXIMAL pada 'kecepatanMax'
IF 'jumlahPenumpang' sama dengan 0 THEN
  TULISKAN dan TAMPILKAN 'Kecepatan becak' adalah kecepatanMax 'km/jam' 
  ELSE IF 'jumlahPenumpang' lebih dari sama dengan 2 dan kurang dari 4 THEN
    TULISKAN 'kecepatanMax1' sama dengan kecepatanMax berkurang 5 
    TAMPILKAN 'Kecepatan becak' adalah kecepatanMax1 'km/jam'  
  ELSE IF 'jumlahPenumpang' sama dengan 4 THEN
    TULISKAN 'kecepatanMax2' sama dengan kecepatanMax berkurang 7 
    TAMPILKAN 'Kecepatan becak' adalah kecepatanMax2 'km/jam'
ELSE 'jumlahPenumpang' selain dari angka disebutkan THEN
    TULISKAN 'kecepatanMax3' sama dengan kecepatanMax berkurang 2
    TAMPILKAN 'Kecepatan becak' adalah kecepatanMax3 'km/jam'  
*/
console.log('Live Code Week 1 Number 1 - Psedecode');
var jumlahPenumpang = 4; //Input variabel jumlah penumpang
var kecepatanMax = 20;
if (jumlahPenumpang === 0){
  console.log('Kecepatan Becak : ' +kecepatanMax+ ' km/jam');
}
    else if (jumlahPenumpang >= 2 && jumlahPenumpang < 4){
    kecepatanMax1 = kecepatanMax -5;
    console.log('Kecepatan Becak : ' +kecepatanMax1+ ' km/jam');
    }
    else if (jumlahPenumpang === 4){
    kecepatanMax2 = kecepatanMax -7;
    console.log('Kecepatan Becak : ' +kecepatanMax2+ ' km/jam');
    }
else {
  kecepatanMax3 = kecepatanMax -2;
  console.log('Kecepatan Becak : ' +kecepatanMax3+ ' km/jam');
}
