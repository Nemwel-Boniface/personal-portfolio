const menubtn = document.getElementById('navright');
const mobilemenu = document.querySelector('.mobile-menu');
const menu = document.getElementById('menu');
const logo = document.querySelector('.navleft');
const lists = document.querySelectorAll('.mobilelist a');

mobilemenu.style.display = 'none';
menubtn.onclick = function () {
  if (mobilemenu.style.display === 'none') {
    mobilemenu.style.display = 'block';
    menu.src = 'images/close.png';
    menu.style.position = 'relative';
    menu.style.top = '30px';
    menu.style.left = '290px';
    logo.style.display = 'none';
  } else {
    mobilemenu.style.display = 'none';
    menu.src = 'images/menu.png';
    logo.style.display = 'block';
    menu.style.position = 'relative';
    menu.style.top = '0';
    menu.style.left = '0';
  }
};

function hideMenu() {
  mobilemenu.style.display = 'none';
  menu.src = 'images/menu.png';
  logo.style.display = 'block';
  menu.style.position = 'relative';
  menu.style.top = '0';
  menu.style.left = '0';
}

for (const list of lists) {
  list.onclick = hideMenu;
}