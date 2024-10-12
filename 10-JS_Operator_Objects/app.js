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
};


mobileModel.model = 's25 Ultra';
Object.freeze(mobileModel);
mobileModel.model = 's26 Ultra';
console.log(mobileModel.model);

console.log(mobileModel['selfie camera']);
console.log(mobileModel[newSym]);