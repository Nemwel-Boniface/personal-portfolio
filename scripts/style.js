const menubtn = document.getElementById('navright');
const mobilemenu = document.querySelector('.mobile-menu');
const menu = document.getElementById('menu');

mobilemenu.style.display = 'none';
menubtn.onclick = function () {
  if (mobilemenu.style.display === 'none') {
    mobilemenu.style.display = 'block';
    menu.src = 'images/close.png';
  } else {
    mobilemenu.style.display = 'none';
    menu.src = 'images/menu.png';
  }
};