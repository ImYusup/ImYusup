class Mobil {
  constructor(merk, harga, warna, bensin, jumlahRoda) {
    this.merkPA = merk;
    this.hargaPA = harga;
    this.warnaPA = warna;
    this.bensinPA = bensin;
    this.jumlahRodaPA = jumlahRoda;
  }
  
  tampilkanSpesifikasi() {
    return 'Mobil saya bermerk ' + this.merkPA + ' dengan harga ' + this.hargaPA + ' rupiah, berwarna ' + this.warnaPA + ', bensinnya ' + this.bensinPA + ', dan beroda ' + this.jumlahRodaPA;
  }
  
  jualMobil() {
    return this.hargaPA - (this.hargaPA * 20/100);
  }
}
let okey = new Mobil('Hando', 300000000, 'merah', 'solar', 4);

console.log(okey.tampilkanSpesifikasi());
console.log(okey.jualMobil());	