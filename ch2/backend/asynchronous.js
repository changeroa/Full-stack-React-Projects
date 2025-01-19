// You can use the Loupe tool to visualize the inner workings of the Call Stack, web APIs, Event Loop, and Callback/Task Queue: http://latentflip.com/loupe/

console.log('first')
setTimeout(() => {
  console.log('second')
}, 1000)
console.log('third')


// console.log('first')
// setTimeout(() => {
//   console.log('second')
// }, 0)
// console.log('third')