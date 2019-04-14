function changeMe(arr) {
    var nomor = 0;
    var namaLengkap = ''
    for (var x = 0; x < arr.length; x++){
        nomor ++
        namaLengkap = arr[x][0] + ' ' + arr[x][1]
        var objOrang = {}
        objOrang.firstName = arr[x][0]
        objOrang.lastName = arr[x][1]
        objOrang.gender = arr[x][2]
        if(arr[x][3] === undefined){
            objOrang.age = 'Invalid Birth Year'
        } else {
            objOrang.age = 2019 - arr[x][3]
        }
    console.log(nomor + '.' +namaLengkap)
    console.log(objOrang)
    }
}



// TEST CASES
changeMe([['Christ', 'Evans', 'Male', 1982], ['Robert', 'Downey', 'Male']]); // 1. Christ Evans:
// { firstName: 'Christ',
//   lastName: 'Evans',
//   gender: 'Male',
//   age: 37 }
// 2. Robert Downey:
// { firstName: 'Robert',
//   lastName: 'Downey',
//   gender: 'Male',
//   age: 'Invalid Birth Year' }
changeMe([]); // ""