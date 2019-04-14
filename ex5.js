function ubahHuruf(kata) {
      // you can only write your code here!
      var penampung = '';
      
      for(var i = 0; i < kata.length; i++){
        let code = kata.charCodeAt(i);
        penampung += String.fromCharCode(code + 1); 
      }
      return penampung; 
    }

// TEST CASES
console.log(ubahHuruf('wow')); // xpx
console.log(ubahHuruf('developer')); // efwfmpqfs
console.log(ubahHuruf('javascript')); // kbwbtdsjqu
console.log(ubahHuruf('keren')); // lfsfo
console.log(ubahHuruf('semangat')); // tfnbohbu