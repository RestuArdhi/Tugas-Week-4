// Diberikan function naikAngkot(listPenumpang) yang akan menerima satu parameter berupa array dua dimensi. Function akan me-return array of object.

// Diberikan sebuah rute, dari A - F. Penumpang diwajibkan membayar Rp2000 setiap melewati satu rute.

// Contoh: input: [['Dimitri', 'B', 'F']] output: [{ penumpang: 'Dimitri', naikDari: 'B', tujuan: 'F', bayar: 8000 }]

// Code


function naikAngkot(arrPenumpang) {
  // INISIALISASI VARIABEL SCOPE FUNGSI naikAngkot
  // variabel rute sebagai library/ panduan rute angkot
  rute = ['A', 'B', 'C', 'D', 'E', 'F'];
  // variabel angkot sebagai penampung hasil
  var angkot = [{},{}];
  // variabel i sebagai counter iterasi
  var i=0;
  // variabel asal dan tujuan akan menampung value asal dan tujuan dari input yang diberikan
  var asal = '';
  var tujuan = '';

  // ITERASI LEVEL i untuk mengambil input pada level i, --> ['Dimitri', 'B', 'F'] ... dst
  for (i; i<arrPenumpang.length; i++) {
      // variabel j sbg counter iterasi
      var j = 0;

      // iterasi level j untuk mengambil value pada array level i ['Dimitri', 'B', 'F'] --> 'Dimitri' / 'B' / 'F'
      for (j; j<arrPenumpang[i].length; j++) {
          // kondisi pada j untuk menempatkan elemen array level j pada object angkot sesuai objective property yg diinginkan
          switch (j) {
              case 0: {
                  angkot[i].penumpang = arrPenumpang[i][j];
                  break;
              } case 1: {
                  angkot[i].naikDari = arrPenumpang[i][j];
                  angkot[i].tujuan = arrPenumpang[i][j+1];
                  break;
              } case 2: {
                  // kalkulasi bayar angkot
                  asal = arrPenumpang[i][j-1];
                  tujuan = arrPenumpang[i][j];
                  var jarak = 0;
                  for (var k=0; k<rute.length; k++) {
                      if (rute[k] === asal) {
                          for (var l=k+1; l<rute.length; l++) {
                              jarak += 1;
                              if (rute[l] === tujuan) {
                                  var bayar = jarak * 2000;
                                  angkot[i].bayar = bayar;
                              }
                          }
                      }
                  }
                  break;
              }
          }
      }
  }
// mengembalikan hasil melalui variabel angkot
return angkot;


}

//TEST CASE
console.log(naikAngkot([['Dimitri', 'B', 'F'], ['Icha', 'A', 'B']]));
// [ { penumpang: 'Dimitri', naikDari: 'B', tujuan: 'F', bayar: 8000 },
//   { penumpang: 'Icha', naikDari: 'A', tujuan: 'B', bayar: 2000 } ]
