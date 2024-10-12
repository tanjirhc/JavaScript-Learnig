/* 
! JavaScript Functions
 */
// --- code driven
function myFunction(fullName, age, dateOfBirth = 1989) {
  console.log('Hello ' + fullName +' I am '+ age + ' My date of Birth is '+dateOfBirth);
}
myFunction('Tanjir', 32, 1987);
myFunction('Hasan', 35, true);

// event driven
function isSubscribed() {
  console.log('Subscribed');
}

document.getElementById('btn').addEventListener('click', isSubscribed)

//self driven

// (function () {
//   console.log('I am Self-Invoking Function');
// })();

// (function (message) {
//   console.log('I am self-Invokeing Function', message);
// })('Hello');

let maths = function(x, y){
  return x * y;
};
console.log(maths(3, 4));