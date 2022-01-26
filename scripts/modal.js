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


projectBtn.forEach((project) => {
  project.addEventListener('click', modalpopup);
});
featuredbtn.onclick = modalpopup;
function modalpopup() {
  popUp.style.display = 'block';
  body.appendChild(popUp);
  let showing = `
  <div class="popupcont">
      <div class="popupcontheader">
        <h2 class="desktophide">${projectList[1].title}</h2>
        <h2 class="mobilehide">Keeping track of hundreds  of components website</h2>
        <button id="closeModal" class="closeModal">${projectList[1].closebtn}</button>
      </div>
      <div class="popupcontlangs">
        <ul>
          <li>${projectList[1].html}</li>
          <li>${projectList[1].bootstrap}</li>
          <li>${projectList[1].ruby}</li>
        </ul>
      </div>
      <div class="popupcontbody">
        <div class="popupcontbodyleft">
          <img src="${projectList[1].projectImage}" alt="image">
        </div>
        <div class="popupcontbodyright">
          <p class="desktophide">${projectList[1].projectDesc}</p>
          <p class="mobilehide">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita.</p>
          <div class="popupcontbodyrightbtns">
          <a href="https://nemwel-boniface.github.io/personal-portfolio/"><button type="button" id="modalbtns live">See Live <img src="./images/viewlive.png" alt="view live"></button></a>
          <a href="https://github.com/Nemwel-Boniface/personal-portfolio"><button type="button" id="modalbtns live">See Live <img src="./images/viewsource.png" alt="view live"></button></a>
          </div>
        </div>
      </div>
    </div>
  `;
  popUp.innerHTML = showing;
  body.appendChild(popUp);

  document.addEventListener('click', (action) => {
    if (action.target.id === 'closeModal') {
      popUp.style.display = 'none';
    }
  });
}