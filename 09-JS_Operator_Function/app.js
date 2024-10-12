/* 
! JavaScript Functions
 */
function myFunction(fullName, age, dateOfBirth = 1989) {
  console.log('Hello ' + fullName +' I am '+ age + ' My date of Birth is '+dateOfBirth);
}
myFunction('Tanjir', 32, 1987);
myFunction('Hasan', 35, true);


function isSubscribed() {
  console.log('Subscribed');
}

document.getElementById('btn').addEventListener('click', isSubscribed)