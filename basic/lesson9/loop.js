// document.getElementById('btn')
//   .onclick = () => {
//   console.log('clc');
// }
//
//
// console.log(1);
//
// setTimeout(() => {
//   console.log(2);
// }, 0)
//
// console.log(3);
//
//
// let i = 0
// while (i < 999999999) {
//   i++
// }
//
//
//
// function dead() {
//   return dead();
// }
//
// dead();
//
//
// function goToTurkey(isCovidPresent, cb) {
//   setTimeout(() => {
//     if (isCovidPresent === true) {
//       cb('Ковід в країні. Беру під особистй контролЬ!!!', null);
//     } else {
//       cb(null, 'Ура. Я лечу в Мармарис !!!!!!!! ЄЄЄЄЄЄЄ');
//     }
//   }, 2000)
// }
//
//
// goToTurkey(false, (negative, positive) => {
//   console.log(negative);
//   console.log(positive);
//
//   if (negative) {
//     console.log('Блін. Мінус відпустка')
//   } else {
//     console.log('УРАААА')
//   }
// })
//
//
// let money = 0;
//
// function clearHouse(isJobDone, cb) {
//   setTimeout(() => {
//     if (isJobDone) {
//       money = 500;
//       cb(null, money);
//     } else {
//       cb('ERRROOOOR', null)
//     }
//   }, 1000)
// }
//
// function buyJeans(money, cb) {
//   setTimeout(() => {
//     if (money > 200) {
//       console.log('Good jeans bro')
//       money = money - 200
//       cb(null, money)
//     } else {
//       console.log('Nema groshey');
//       cb('NEMA', null)
//     }
//   }, 1000)
// }
//
//
// clearHouse(true, (err, money) => {
//   if (err) {
//     document.write('House is not clear')
//   } else {
//     document.write('Job done boss')
//     buyJeans(money, (e, resta) => {
//       if (e) {
//         document.write('Nema dinig')
//       } else {
//         document.write('УРАААА')
//       }
//     })
//   }
// });


// function clearHouse(isJobDone) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (isJobDone) {
//         money = 500;
//         resolve(money)
//       } else {
//         reject('ERRROOOOR')
//       }
//     }, 1000)
//   })
// }
//
// function buyJeans(money) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (money > 200) {
//         console.log('Good jeans bro')
//         money = money - 200
//         resolve(money)
//       } else {
//         console.log('Nema groshey');
//         reject('NEMA')
//       }
//     }, 1000)
//   })
// }
//
//
// clearHouse(true)
//   .then(reward => {
//     console.log('______________________');
//     console.log(reward);
//     console.log('______________________');
//
//     return buyJeans(money);
//   })
//   .then(reshta => {
//     console.log('**************************');
//     console.log(reshta);
//     console.log('**************************');
//   })
//   .catch(reason => {
//     console.error(reason)
//   })
//   .finally(() => {
//     console.log('F');
//   })
//
// let uno = new Promise((resolve) => {
//   setTimeout(() => {
//     resolve(1);
//   }, 3000)
// })
//
//
// let due = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     reject(2);
//   }, 2000)
// })
//
//
// let tre = new Promise((resolve) => {
//   setTimeout(() => {
//     resolve(3);
//   }, 1000)
// })
//
// Promise.race([uno, due, tre])
//   .then(value => {
//     console.log(value);
//   })
//
//
// Promise.all([uno, due.catch(reason => {}), tre])
//   .then(value => {
//     console.log(value);
//   })
//
// Promise.allSettled([uno, due, tre])
//   .then(value => {
//     console.log(value);
//   })
//


function clearHouse(isJobDone) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (isJobDone) {
        money = 500;
        resolve(money)
      } else {
        reject('ERRROOOOR')
      }
    }, 1000)
  })
}

function buyJeans(money) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (money > 200) {
        console.log('Good jeans bro')
        money = money - 200
        resolve(money)
      } else {
        console.log('Nema groshey');
        reject('NEMA')
      }
    }, 1000)
  })
}


async function houseCleaner() {
  try {
    let reward = await clearHouse(true);
    console.log('__________________________');
    console.log(reward);
    console.log('__________________________');

    let resta = await buyJeans(100);

    console.log('*****************************');
    console.log(resta);
    console.log('*****************************');
  } catch (e) {
    console.error(e);
  }
}


houseCleaner();

