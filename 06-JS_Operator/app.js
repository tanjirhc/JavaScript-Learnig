/* 
! JavaScript Operator
 */


/* 
* Arithmatice Operator
*/
let a = 50;
let b = 20;
let c = a%b;

console.log(c);
let userInput = prompt('Enter a Number');
let number = parseInt(userInput);

if(number % 2 === 0) {
  console.log(`${number} is even.`);
}
else {
  console.log(`${number} is odd.`);
}