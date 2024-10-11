/* 
! JavaScript Variable
 */

/* 
* Variable
*/
var a = 10;
var a =20;
a = 'Bangladesh';
{
  var blocked = '30';
  console.log(a);
  
}
console.log(a);
console.log(blocked);
let firstName;

let fruits = 'Orange';
var country = 'Bangladesh';
console.log(country);


console.log(`${fruits} is my fav, ${fruits} I like to eat`);

/* 
* let Variable
! can't be redeclared
! let is block Scoped
! let is not hosted
*/

{
 let b = 10; 
}


b = 11;
console.log(b);
// console.log(people);
// let people = 'someone';

/* const Variable
! can't be redeclared
! can't be re-assigned
! let is block Scoped
! let is not hosted
*/

const c = 10;
console.log(c);
{
  const d = 50
  console.log(c);
  console.log(d);
}

const person = {
  firstName: 'Tanjir', 
  age: 30,
};

person.country = 'Bangladesh';
person.age = 32;

console.log(person);