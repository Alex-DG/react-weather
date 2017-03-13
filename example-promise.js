// function getTempCallback(location, callback) {
//   callback(undefined, 15);
//   callback('City not found');
// }
//
// getTempCallback('London', function (err, temp) {
//   if (err) {
//     console.log('error', err);
//   } else {
//     console.log('success', temp);
//   }
// });
//
// function getTempPromise(location) {
//   return new Promise(function (resolve, reject) {
//       resolve(16);
//       reject('City not found');
//   });
// }
//
// // First function is succes second is error
// getTempPromise('London').then(function (temp) {
//   console.log('Promise success', temp);
// }, function (err) {
//   console.log('Promise error', err);
// });

function addPromise(a, b) {
  return new Promise(function (resolve, reject) {
    if (typeof a === 'number' && typeof b === 'number') {
      resolve(a+b);
    } else {
      reject('A and B need to be numbers');
    }
  });
}

addPromise(2, 3).then(function (sum) {
  console.log('Test1Promise success', sum);
}, function (err) {
  console.log('Test1Promise error', err);
});

addPromise('alex', 9).then(function (sum) {
  console.log('Test2Promise success', sum);
}, function (err) {
  console.log('Test2Promise error', err);
});
