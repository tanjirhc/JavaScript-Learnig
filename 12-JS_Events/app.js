/* 
! JavaScript Events
 */
function subscribe() {
  document.getElementById('text').innerHTML = 'Subscribed';
  document.getElementById('btn').innerHTML = 'Subscribed';
  document.getElementById('btn').style.backgroundColor = '#e67e22';
}



function like()  {
  document.getElementById('like').innerHTML = '<i class="fa-solid fa-thumbs-up"></i> Liked';
  document.getElementById('like').style.backgroundColor = '#27ae60';
}

function keyPress() {
  document.getElementById("text").innerHTML = 'Key Pressed :)';
}



// function onLoad() {
//   alert('Testing JavaScript Onload');
//   document.getElementById("text").innerHTML = 'Website Loaded Properly';
// }

function windowResize() {
  document.getElementById("textarea").style.height = '200px';
  document.getElementById("form").style.fontFamily = 'Courier New';
}

function onScroll() {
  document.getElementById("text").innerHTML = 'Scrolling ';
}

// document.getElementById('btn').onclick = function () {
//   document.getElementById('btn').innerHTML = 'Subscribed';
// }

document.getElementById('btn').addEventListener('click', function (e) {
  document.getElementById('btn').innerHTML = 'Subscribed';
},
true
);