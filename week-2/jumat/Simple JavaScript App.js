function validasi () {

// Minta input nama.
var nama = prompt('Nama lengkap:');

// Selama input nama masih kosong, minta input lagi dari user.
while (nama == '') {
	// \n => artina new-line atau bari baru.
  nama = prompt('Input nama tidak boleh kosong!\nNama lengkap:');
}


// Minta input tanggal.
var tanggalLahir = prompt('Tanggal lahir: (1-31)');

// Selama input tanggal lahir bukan antara 1-31, minta input lagi dari user.
while (tanggalLahir < 1 || tanggalLahir > 31) {
  tanggalLahir = prompt('Input tanggal lahir tidak valid!\nTanggal lahir: (1-31)');
}


// Array nama-nama bulan.
var pilihanBulan = ['Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni', 'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember'];

// Minta input bulan.
var bulanLahir = prompt('Bulan lahir: (Januari-Desember)');

// Selama input bulan lahir tidak valid, minta input lagi dari user.
// array.indexOf(elemenYangDicari) => nomor index array dari element yang dicari, 
// -1 artinya elemen yang dicari tidak ditemukan
while (pilihanBulan.indexOf(bulanLahir) == -1) {
  bulanLahir = prompt('Input bulan lahir tidak valid!\nBulan lahir: (Januari - Desember)');
}


// Minta input tahun.
var tahunLahir = prompt('Tahun lahir:');

// Selama input umur (2017 - tahunLahir) < 17 tahun, minta input lagi dari user.
while (2017 - tahunLahir < 17) {
  tahunLahir = prompt('Anda masih dibawah 17 tahun!\nTahun lahir:');
}

// Minta input jenis kelamin.
var jenisKelamin = prompt('Jenis kelamin: (Pria/Wanita)');

// Selama input jenis kelamin bukan pria/wanita, minta input lagi dari user.
while (jenisKelamin !== 'Pria' && jenisKelamin !== 'Wanita') {
  jenisKelamin = prompt('Input jenis kelamin tidak valid!\nJenis kelamin: (Pria/Wanita)');
}


// Minta input alamat.
var alamat = prompt('Alamat lengkap:');

// Selama input alamat masih kosong, minta input lagi dari user.
while (alamat == '') {
  alamat = prompt('Input alamat tidak boleh kosong!\nAlamat lengkap:');
}


// Array nama-nama agama.
var pilihanAgama = ['Islam', 'Katolik', 'Kristen', 'Hindu', 'Budha'];

// Minta input agama.
var agama = prompt('Agama: (Islam/Katolik/Kristen/Hindu/Budha)');

// Selama input agama tidak valid, minta input lagi dari user.
while (pilihanAgama.indexOf(agama) == -1) {
  agama = prompt('Input agama tidak valid!\nAgama: (Islam/Katolik/Kristen/Hindu/Budha)');
}

// Array status perkawinan
var statusPerkawinan = ['Menikah', 'Lajang', 'Duda', 'Janda'];

// Minta input status perkawinan
var perkawinan = prompt ('Perkawinan : (Menikah/Lajang/Duda/Janda)') ;

// Selama input status perkawinan tidak valid minta input lagi dari user
while (statusPerkawinan.indexOf(perkawinan) == -1) {
	perkawinan = prompt ('Input status perkawinan tidak valid\nPerkawinan : (Menikah/Lajang/Duda/Janda)');
}

// Array pekerjaan
var pekerjaan = ['Pegawai Swasta', 'Wiraswasta', 'Pegawai Negeri'];

// Minta input pekerjaan
var bekerja = prompt ('Pekerjaan : Pegawai Swasta/Wiraswasta/Pegawai Negeri') ;

// Selama input pekerjaan tidak valid minta input lagi dari user
while (pekerjaan.indexOf(bekerja) == -1) {
	bekerja = prompt ('Input status pekerjaan tidak valid\nPekerjaan : (Pegawai Swasta/Wiraswasta/Pegawai Negeri)') ;
}

// Array kewarganegaraan
var kewarganegaraan = ['Indonesia', 'Asing'];

// Minta input kewarganegaraan
var warga = prompt ('Kewarganegaraan : Indonesia/Asing');

// Selama input kewarganegaraan tidak valid minta input lagi dari user
while (kewarganegaraan.indexOf(warga) == -1) {
	warga = prompt ('Input kewarganegaraan tidak valid\nKewarganegaraan : (Indonesia/Asing)') ;
}


alert('Nama lengkap : ' + nama + '\nTanggal lahir : ' + tanggalLahir + ' ' + bulanLahir + ' ' + tahunLahir + '\nJenis kelamin : ' + jenisKelamin + '\nAlamat lengkap : ' + alamat + '\nAgama : ' + agama + '\nStatus Perkawinan : ' + perkawinan + '\nStatus Pekerjaan : ' + bekerja + '\nStatus Kewarganegaraan : ' + warga + '\nMasa berlaku KTP : Seumur Hidup');
} 
var tampung = validasi ();
console.log(tampung);