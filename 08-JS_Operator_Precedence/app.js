/* 
! JavaScript Datatypes
 */
let firstName = 'Hasan';
let fullName = 'My name is "Tanjir"';

let finalName = `My name is ${firstName}`;

let age = 30;
let age2 = 35;
let calculation = age + age2 + firstName + age + age2;

let numberBg = 9999999999999999n;
let numberBg2 = 99999999999999999n;

let ifAdult = true;

let someInfo = null;

let fruits = ['Apple', 'Lemon', 'Peer', 'Oranges', 32];

let student = {
  fullName: 'Tanjir Hasan',
  age: 33,
  dateOfBirth: 1989,
};

console.log(numberBg*numberBg2);
console.log(finalName);

console.log(fullName);
console.log(typeof calculation);
console.log(student);
console.log(typeof student);
