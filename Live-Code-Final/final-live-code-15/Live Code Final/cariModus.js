/*
Diberikan sebuah function cariModus(arr) yang menerima sebuah array angka. Function akan me-return modus dari array atau deret angka tersebut. Modus adalah angka dari sebuah deret yang paling banyak atau paling sering muncul. Contoh, modus dari [10, 4, 5, 2, 4] adalah 4. Jika modus tidak ditemukan, function akan me-return -1. Apabila ditemukan lebih dari dua nilai modus, tampilkan nilai modus yang paling pertama muncul (dihitung dari kiri ke kanan).
*/

function cariModus(arr) {
  // you can only write your code here!
  //console.log(arr.length);
  //check kalo nomor cuman ada satu(tidak di hitung sebagai modus)
  //slice dipake soalnya kalo nga pake array ke sort
  //console.log(arr.sort(function(a,b){return a-b}));
  //console.log(arr.sort(function(a,b){return b-a}));
  if(arr.slice(0).sort(function(a,b){return a-b})[0]=== (arr.slice(0).sort(function(a,b){return b-a}))[0]){
    return -1;
  } else{
    var newArr=[];
    for(var x=0; x<=arr.length-1; x++){
      for(var i=0; i<=arr.length-1; i++){
        if(x !== i && arr[x] === arr[i]){
          newArr.push(arr[i]);
          
        }
      }
    }
    if(newArr[0] === undefined){
     return -1;
   } else {
     return newArr[0];
   }
  }
 
        
}

// TEST CASES
console.log(cariModus([10, 4, 5, 2, 4])); // 4
//kalo 10 nya di tambah satu lagi gimana?
console.log(cariModus([5, 10, 10, 6, 5])); // 5
console.log(cariModus([10, 3, 1, 2, 5])); // -1
console.log(cariModus([1, 2, 3, 3, 4, 5])); // 3
console.log(cariModus([7, 7, 7, 7, 7])); // -1
