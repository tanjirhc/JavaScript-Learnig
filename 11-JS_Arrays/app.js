/* 
! JavaScript Arrays
 */
//const language2 = new Array('HTML', 'CSS', 'JavaScript', 'PHP', true, 50);
//let firstName = 'Tanjir Hasan';
//console.log(firstName);

const language = ['HTML', 'CSS', 'JavaScript', 'PHP', true, 50];


language[4] = 'Tailwind CSS';
language[5] = 'React.js';
language[6] = 'vue.js';
language[7] = 'Laravel';

//last item
//console.log(language[language.length-1]);
//Delete or remove last item
language.pop();
//ADD Last item
language.push('Angular.js');
//add first
language.unshift('Basic Computing');
//Delete first item
language.shift();

console.log(language.at(5));

console.log(language);
//console.log(language.toString());
//console.log(language.join('$'));
//console.log(language.length);
//console.log(language[2]);
//console.log(language2);


const person = [];
person['firstName'] = 'Tanjir';
person['lastName'] = 'Hasan';
person[2] = 35;
// console.log(person.length);
// console.log(person);
// console.log(person[2]);

// //const num = [20];
// const num = new Array(20, 21);

// console.log(num);


const x = [1, 2, 3, 4, [3, 5, 8]];
const y = [1, 2, 3, 4];
const p = [2, 3, 4]
const z = x.concat(y, p);
//console.log(z);

const a = [
  [1, 2, 3], 
  [4, 5, 6], 
  [2, 4, 6]
];
// console.log(a);
// console.log(a.flat());

language.splice(2, 0, 'Info', 'Info2');
console.log(language);