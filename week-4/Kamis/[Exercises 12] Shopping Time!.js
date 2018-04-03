<<<<<<< HEAD
console.log('[Exercises 12] Shopping Time!');
function shoppingTime(memberId, money) {
  // you can only write your code here!

  if (memberId === undefined || memberId === '') {
    return 'Mohon maaf, toko X hanya berlaku untuk member saja';
  } else if (money < 50000) {
    return 'Mohon maaf, uang tidak cukup';
  }

  // create data person here
  var dataPerson = {};
  dataPerson.memberId = memberId;
  dataPerson.money = money;
  var order = [
    'Sepatu Stacattu',
    'Baju Zoro',
    'Baju H&N',
    'Sweater Uniklooh',
    'Casing Handphone',
  ];
  //console.log(order[1]);

  var isOrder = [];
  for (var i = 0; i < order.length; i++) {
    if (money >= 1500000) {
      isOrder.push(order[0]);
      money -= 1500000;
    } else if (money >= 500000) {
      isOrder.push(order[1]);
      money -= 500000;
    } else if (money >= 250000) {
      isOrder.push(order[2]);
      money -= 250000;
    } else if (money >= 175000) {
      isOrder.push(order[3]);
      money -= 175000;
    } else if (money >= 50000) {
      isOrder.push(order[4]);
      money -= 50000;
      break; // biar stop looping
    }
  }
  //console.log(isOrder);
  dataPerson.listPurchased = isOrder;
  dataPerson.changeMoney = money;
  return dataPerson;

  /*
    const items = [{"Sepatu Stacattu": 1500000}, {"Baju Zoro": 500000}, {"Baju H&N": 250000}, {"Sweater Uniklooh": 175000}, {"Casing Handphone": 50000}]
  let wallet  = money
  let objRes  = {}
  let cart    = []
  let message = ''
  // console.log(memberId, money);
  if (memberId == undefined || memberId == '') {
    return 'Mohon maaf, toko X hanya berlaku untuk member saja'
  } else if ((memberId == undefined || memberId == '') && (money == undefined || money == '')) {
    return 'Mohon maaf, toko X hanya berlaku untuk member saja'
  } else {
    items.map((item, i) => {
      let product = Object.keys(items[i])
      let price   = Object.values(items[i])
      // console.log(product[0], price[0]);
      if (money >= price[0]) {
        cart.push(product[0])
        money -= price[0]
      }
    })
    if (cart.length > 0) {
      return {
        memberId: memberId,
        money: wallet,
        listPurchased: cart,
        changeMoney: money
      }
    } else {
      return 'Mohon maaf, uang tidak cukup'
    }
  }
}
  */
}
console.log(shoppingTime('1820RzKrnWn08', 2475000));
//{ memberId: '1820RzKrnWn08',
// money: 2475000,
// listPurchased:
//  [ 'Sepatu Stacattu',
//    'Baju Zoro',
//    'Baju H&N',
//    'Sweater Uniklooh',
//    'Casing Handphone' ],
// changeMoney: 0 }
console.log(shoppingTime('82Ku8Ma742', 170000));
//{ memberId: '82Ku8Ma742',
// money: 170000,
// listPurchased:
//  [ 'Casing Handphone' ],
// changeMoney: 120000 }
console.log(shoppingTime('', 2475000)); //Mohon maaf, toko X hanya berlaku untuk member saja
console.log(shoppingTime('234JdhweRxa53', 15000)); //Mohon maaf, uang tidak cukup
=======
console.log('[Exercises 12] Shopping Time!');
function shoppingTime(memberId, money) {
  // you can only write your code here!

  if (memberId === undefined || memberId === '') {
    return 'Mohon maaf, toko X hanya berlaku untuk member saja';
  } else if (money < 50000) {
    return 'Mohon maaf, uang tidak cukup';
  }

  // create data person here
  var dataPerson = {};
  dataPerson.memberId = memberId;
  dataPerson.money = money;
  var order = [
    'Sepatu Stacattu',
    'Baju Zoro',
    'Baju H&N',
    'Sweater Uniklooh',
    'Casing Handphone',
  ];
  //console.log(order[1]);

  var isOrder = [];
  for (var i = 0; i < order.length; i++) {
    if (money >= 1500000) {
      isOrder.push(order[0]);
      money -= 1500000;
    } else if (money >= 500000) {
      isOrder.push(order[1]);
      money -= 500000;
    } else if (money >= 250000) {
      isOrder.push(order[2]);
      money -= 250000;
    } else if (money >= 175000) {
      isOrder.push(order[3]);
      money -= 175000;
    } else if (money >= 50000) {
      isOrder.push(order[4]);
      money -= 50000;
      break; // biar stop looping
    }
  }
  //console.log(isOrder);
  dataPerson.listPurchased = isOrder;
  dataPerson.changeMoney = money;
  return dataPerson;

  /*
    const items = [{"Sepatu Stacattu": 1500000}, {"Baju Zoro": 500000}, {"Baju H&N": 250000}, {"Sweater Uniklooh": 175000}, {"Casing Handphone": 50000}]
  let wallet  = money
  let objRes  = {}
  let cart    = []
  let message = ''
  // console.log(memberId, money);
  if (memberId == undefined || memberId == '') {
    return 'Mohon maaf, toko X hanya berlaku untuk member saja'
  } else if ((memberId == undefined || memberId == '') && (money == undefined || money == '')) {
    return 'Mohon maaf, toko X hanya berlaku untuk member saja'
  } else {
    items.map((item, i) => {
      let product = Object.keys(items[i])
      let price   = Object.values(items[i])
      // console.log(product[0], price[0]);
      if (money >= price[0]) {
        cart.push(product[0])
        money -= price[0]
      }
    })
    if (cart.length > 0) {
      return {
        memberId: memberId,
        money: wallet,
        listPurchased: cart,
        changeMoney: money
      }
    } else {
      return 'Mohon maaf, uang tidak cukup'
    }
  }
}
  */
}
console.log(shoppingTime('1820RzKrnWn08', 2475000));
//{ memberId: '1820RzKrnWn08',
// money: 2475000,
// listPurchased:
//  [ 'Sepatu Stacattu',
//    'Baju Zoro',
//    'Baju H&N',
//    'Sweater Uniklooh',
//    'Casing Handphone' ],
// changeMoney: 0 }
console.log(shoppingTime('82Ku8Ma742', 170000));
//{ memberId: '82Ku8Ma742',
// money: 170000,
// listPurchased:
//  [ 'Casing Handphone' ],
// changeMoney: 120000 }
console.log(shoppingTime('', 2475000)); //Mohon maaf, toko X hanya berlaku untuk member saja
console.log(shoppingTime('234JdhweRxa53', 15000)); //Mohon maaf, uang tidak cukup
>>>>>>> 7d9516bae2756a430bbbf55437f3e40000acf82c
console.log(shoppingTime()); ////Mohon maaf, toko X hanya berlaku untuk member saja