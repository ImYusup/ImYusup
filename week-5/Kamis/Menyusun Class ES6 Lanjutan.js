class Student {
  
  constructor(Name, Age, DateOfBirth, Gender, StudentID, Hobbies) {
  this.nama = Name;
  this.umur = Age;
  this.lahir = DateOfBirth;
  this.kelamin = Gender;
  this.pelajar = StudentID;
  this.hobi = Hobbies;  
 }
  
  setName (newNama){
      if (newNama === String(newNama)) {
        this.nama = newNama ;
      }
  }
  
  setAge (newAge) {
    if (newAge === Number(newAge)) {
      this.umur = newAge;
    }
  }

  setDateOfBirth (newBirth){
    if (newBirth === String(newBirth)){
      this.lahir = newBirth;
    }
  }
  
  setGender (newGen) {
    if (newGen.toLowerCase() === 'male' || newGen.toLowerCase() === 'Female'){
      this.kelamin = newGen.toLowerCase();
    }
  }
  
  addHobby  (newHob) {
    if (newHob === String(newHob)){ 
    return this.hobi.push(newHob);
    }
  }
  
  removeHobby(remHobby) {
    for (var i=0; i<this.hobi.length; i++){
      if (remHobby === String(remHobby) && remHobby === this.hobi[i]){
        this.hobi.splice (this.hobi.indexOf(remHobby), 1) ; 
      }
    }
  }
    
   getData() {
     return 'Nama saya : ' + this.nama + ', Umur saya : ' + this.umur + ' Tahun, Tanggal Lahir : ' + this.lahir + ', Gender : ' + this.kelamin + ', NIM saya : ' + this.pelajar +
     ', Hobi saya : ' + this.hobi; 
   }  

}
  
var okey = new Student ('Arsyad', 1, '20 April 2017', 'Male ' , 28042017, ['Belajar ',' Coding',' Maen Dota']);

okey.setName('Yusup');
okey.setAge(20);
okey.setDateOfBirth('6 Juni 1990');  
okey.setGender('MALE');
okey.addHobby (' Berkuda');
okey.removeHobby('Belajar');
console.log(okey.getData());    