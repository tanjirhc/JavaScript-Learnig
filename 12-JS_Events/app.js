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
