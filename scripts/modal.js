const body = document.querySelector('body');
const featuredModal = document.querySelector('.featuredmodal');
const featuredbtn = document.getElementById('muiltipostbtn');
const projectBtn = document.querySelectorAll('.openProject button');

const popUp = document.createElement('div');
popUp.classList.add('popup');

const projectList = [
  {
    id : 'proj1',
    title : "Multi Post Stories",
    closebtn : `<i class="fa fa-times" aria-hidden="true"></i>`,
    html : 'html',
    bootstrap : 'bootstrap',
    ruby : 'Ruby On Rails',
    projectImage : './images/mobilemodal.png',
    projectDesc : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam amet animi voluptate doloribus at quaerat, vitae dicta sunt possimus voluptatum, facilis vel? Eligendi, harum ipsum excepturi sint at quasi? Repellendus eveniet suscipit quibusdam inventore architecto minus eligendi adipisci. Harum atque voluptate dolore fugiat pariatur eius ullam architecto porro aspernatur nihil.",
    projectbtnlive : 'https://nemwel-boniface.github.io/personal-portfolio/',
    projectbtnsource : 'https://nemwel-boniface.github.io/personal-portfolio/'
  },
  {
    id : 'proj6',
    title : "Multi Post Stories",
    closebtn : `<i class="fa fa-times" aria-hidden="true"></i>`,
    html : 'html',
    bootstrap : 'bootstrap',
    ruby : 'Ruby On Rails',
    projectImage : './images/mobilemodal.png',
    projectDesc : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam amet animi voluptate doloribus at quaerat, vitae dicta sunt possimus voluptatum, facilis vel? Eligendi, harum ipsum excepturi sint at quasi? Repellendus eveniet suscipit quibusdam inventore architecto minus eligendi adipisci. Harum atque voluptate dolore fugiat pariatur eius ullam architecto porro aspernatur nihil.",
    projectbtnlive : 'https://nemwel-boniface.github.io/personal-portfolio/',
    projectbtnsource : 'https://nemwel-boniface.github.io/personal-portfolio/'
  }
];

