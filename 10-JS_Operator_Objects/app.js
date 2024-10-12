/* 
! JavaScript Objects
 */
const newSym = Symbol('key1');
const mobileModel = {
  //key: value
  brand: 'Samsung',
  model: 's24 Ultra',
  processor: 'Snapdragon Gen 3',
  camera: ['200MP', '12MP', '12MP'],
  hasZoomCamera: true,
  'selfie camera': 12,
  [newSym] : 'MyKey1',
  brandModel: function() {
    return `Mobile Brand is ${this.brand} and model is ${this.model}`
  },
  battery: {
    mah: 5000,
  },
};


mobileModel.model = 's25 Ultra';
Object.freeze(mobileModel);
mobileModel.model = 's26 Ultra';

console.log(mobileModel.hasOwnProperty('camera'));
console.log(mobileModel.brandModel());

const obj1 = {
  a: 1,
  b: 2,
  c: 3
};

const obj2 = {
  x: 1,
  y: 2,
  z: 3
};

const obj3 = {
  p: 1,
  q: 2,
  r: 3
};

//const objFinal = Object.assign(target, source); //memory efficient
//const objFinal = Object.assign({}, obj1, obj2, obj3);

const objFinal = { ...obj1, ...obj2, ...obj3} //spread operator ...
console.log(objFinal);

console.log(mobileModel.battery.mah);