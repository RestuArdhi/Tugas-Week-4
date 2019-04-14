function countProfit(shoppers) {
  let listBarang = [ ['Sepatu Stacattu', 1500000, 10],
                     ['Baju Zoro', 500000, 2],
                     ['Sweater Uniklooh', 175000, 1]
                   ];

  var arrayBaru = []

  var stokStacat = listBarang[0][2]
  var stokZoro = listBarang[1][2]
  var stokUnik = listBarang[2][2]

  var pembeliStacat = []
  var pembeliZoro = []
  var pembeliUnik = []

  for (var x = 0; x < shoppers.length; x++){
    if (shoppers[x].product === 'Sepatu Stacattu'){
      if (stokStacat >= shoppers[x].amount){
          pembeliStacat.push(shoppers[x].name)
          stokStacat -= shoppers[x].amount
      }
  } else if (shoppers[x].product === 'Baju Zoro'){
      if (stokZoro >= shoppers[x].amount){
          pembeliZoro.push(shoppers[x].name)
          stokZoro -= shoppers[x].amount
      }
  } else if (shoppers[x].product === 'Sweater Uniklooh'){
      if (stokUnik >= shoppers[x].amount){
          pembeliUnik.push(shoppers[x].name)
          stokUnik-= shoppers[x].amount
      }
  }
  }

  var pembeli;
  var sisa;
  
  for(var y = 0; y<listBarang.length; y++){
    if(listBarang[y][0] === 'Sepatu Stacattu'){
      pembeli = pembeliStacat;
      sisa = stokStacat;
      totProfit = (listBarang[y][2]- stokStacat) * listBarang[y][1];
    } else if(listBarang[y][0] === 'Baju Zoro'){
      pembeli = pembeliZoro;
      sisa = stokZoro;
      totProfit = (listBarang[y][2] - stokZoro) * listBarang[y][1];
    } else if(listBarang[y][0] === 'Sweater Uniklooh'){
      pembeli = pembeliUnik;
      sisa = stokUnik;
      totProfit = (listBarang[y][2] - stokUnik) * listBarang[y][1];
    }
    
    
    var objectProduct = {};
    objectProduct.product = listBarang[y][0];
    objectProduct.shoppers = pembeli;
    objectProduct.leftOver = sisa;
    objectProduct.totalProfit = totProfit;
    arrayBaru.push(objectProduct);
  }

  return arrayBaru;

}

// TEST CASES
console.log(countProfit([{name: 'Windi', product: 'Sepatu Stacattu', amount: 2}, {name: 'Vanessa', product: 'Sepatu Stacattu', amount: 3}, {name: 'Rani', product: 'Sweater Uniklooh', amount: 2}]));
//[ { product: 'Sepatu Stacattu',
//   shoppers: [ 'Windi', 'Vanessa' ],
//   leftOver: 5,
//   totalProfit: 7500000 },
// { product: 'Baju Zoro',
//   shoppers: [],
//   leftOver: 2,
//   totalProfit: 0 },
// { product: 'Sweater Uniklooh',
//   shoppers: [],
//   leftOver: 1,
//   totalProfit: 0 } ]

console.log(countProfit([{name: 'Windi', product: 'Sepatu Stacattu', amount: 8}, {name: 'Vanessa', product: 'Sepatu Stacattu', amount: 10}, {name: 'Rani', product: 'Sweater Uniklooh', amount: 1}, {name: 'Devi', product: 'Baju Zoro', amount: 1}, {name: 'Lisa', product: 'Baju Zoro', amount: 1}]));
// [ { product: 'Sepatu Stacattu',
//     shoppers: [ 'Windi' ],
//     leftOver: 2,
//     totalProfit: 12000000 },
//   { product: 'Baju Zoro',
//     shoppers: [ 'Devi', 'Lisa' ],
//     leftOver: 0,
//     totalProfit: 1000000 },
//   { product: 'Sweater Uniklooh',
//     shoppers: [ 'Rani' ],
//     leftOver: 0,
//     totalProfit: 175000 } ]
console.log(countProfit([{name: 'Windi', product: 'Sepatu Naiki', amount: 5}]));
// [ { product: 'Sepatu Stacattu',
//     shoppers: [],
//     leftOver: 10,
//     totalProfit: 0 },
//   { product: 'Baju Zoro',
//     shoppers: [],
//     leftOver: 2,
//     totalProfit: 0 },
//   { product: 'Sweater Uniklooh',
//     shoppers: [],
//     leftOver: 1,
//     totalProfit: 0 } ]
console.log(countProfit([])); //[]