var studentObj = {
  
 nama : 'Yusup',
 umur : 22,
 lahir : '06 Juni 1990',
 kelamin : 'Male', 
 pelajar : 28042017,
 hobi : ['Belajar','Coding','Maen Dota'],
  
  setName : function(name){
      if (name === String(name)) {
        this.nama = name ;
      }
  },
  
  setAge : function(age) {
    if (age === Number(age)) {
      this.umur = age;
    }
  },

  setDateOfBirth : function(newBirth){
    if (newBirth === String(newBirth)){
      this.lahir = newBirth;
    }
  },
  
  setGender : function(newGen) {
    if (newGen.toLowerCase() === 'Male' || newGen.toLowerCase() === 'Female'){
      this.kelamin = newGen.toLowerCase();
    }
  },
  
  addHobby : function(newHob) {
    if (newHob === String(newHob)){ 
    return this.hobi.push(newHob);
    }
  },
  
  removeHobby : function(remHobby) {
    for (var i=0; i<this.hobi.length; i++){
      if (remHobby === String(remHobby) && remHobby === this.hobi[i]){
        this.hobi.splice (this.hobi.indexOf(remHobby), 1) ; 
      }
    }
  },
    
   getData : function() {
     return 'Nama saya : ' + this.nama + ', Umur saya : ' + this.umur + ' Tahun, Tanggal Lahir : ' + this.lahir + ', Gender : ' + this.kelamin + ', NIM saya : ' + this.pelajar +
     ', Hobi saya : ' + this.hobi; 
   },  

}
  
studentObj.setName('Arsyad');
studentObj.setAge(100);
studentObj.setDateOfBirth('28 April 2017');
studentObj.setGender('Male');
studentObj.addHobby('Nangis');
studentObj.removeHobby('Belajar');

console.log(studentObj.getData());

    