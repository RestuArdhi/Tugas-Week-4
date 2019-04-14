function digitPerkalianMinimum(angka) {
  var output = []
 
  for(var i = 1; i <= angka; i++){
      if (angka % i === 0){
          output.push(i)
      } 
} 
var keluar = []
for (var j = angka; j > 0; j--){
    if (angka % j === 0){
        keluar.push(j)
    }
}
var hasil = []
for (var k = 0; k < output.length; k++){
hasil.push(String(output[k]) + String(keluar[k]))
// console.log(k)
}
var digitTerkecil = hasil[0].length
for (var a = 0; a < hasil.length; a++){
    if (hasil[a].length < digitTerkecil) {
        digitTerkecil = hasil[a].length
    }
}
return digitTerkecil
// console.log(hasil)

// console.log(keluar)
// console.log(output)

 
  }
  
  // TEST CASES
console.log(digitPerkalianMinimum(24)); // 2
console.log(digitPerkalianMinimum(90)); // 3
console.log(digitPerkalianMinimum(20)); // 2
console.log(digitPerkalianMinimum(179)); // 4
console.log(digitPerkalianMinimum(1)); // 2