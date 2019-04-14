// Problem
// Diberikan sebuah function checkAB(str) yang menerima satu parameter berupa string. 
// function tersebut mengembalikan nilai true jika di dalam string tersebut terdapat karakter a dan b 
// yang memiliki jarak 3 karakter lain minimal satu kali. Jika tidak ditemukan sama sekali, kembalikan nilai false. 
// Jarak bisa dari a ke b, atau b ke a.

// Code

function checkAB(str) {
    var tampungA = []
    var tampungB = []

 for (var i = 0; i < str.length; i++){
    if (str[i] === 'a'){
        tampungA.push(i)
    }
    else if (str[i] === 'b'){
        tampungB.push(i)
    }
 }
 var jarak = []
 for (var j = 0; j < tampungA.length; j++){
     var flag = false
    for (var k = 0; k < tampungB.length; k++){
        var jarak2 = Math.abs(tampungA[j] - tampungB[k])
        jarak.push(jarak2)
    }
 }

 
 if(tampungB.length < 1 || tampungA.length < 1) {
    return false
}

 for (var a = 0; a < jarak.length; a++){
     if (jarak[a] === 4){
         return true
 }   
}

return false

}




// // TEST CASES
console.log(checkAB('lane borrowed')); // true
console.log(checkAB('i am sick')); // false
console.log(checkAB('you are boring')); // true
console.log(checkAB('barbarian')); // true
console.log(checkAB('bacon and meat')); // false

