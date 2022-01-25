const multipost = document.getElementById('muiltipostbtn');
const featuredModal = document.querySelector('.featuredmodal');
const closeProject = document.getElementById('closeproject');
const projectList = [
  {
    title : "Multi Post Stories",
    closebtn : "&times;",
    html : 'html',
    bootstrap : 'bootstrap',
    ruby : 'Ruby On Rails',
    projectImage : './images/featuredWork.png',
    projectDesc : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam amet animi voluptate doloribus at quaerat, vitae dicta sunt possimus voluptatum, facilis vel? Eligendi, harum ipsum excepturi sint at quasi? Repellendus eveniet suscipit quibusdam inventore architecto minus eligendi adipisci. Harum atque voluptate dolore fugiat pariatur eius ullam architecto porro aspernatur nihil.",
    projectbtnlive : 'https://nemwel-boniface.github.io/personal-portfolio/',
    projectbtnsource : 'https://nemwel-boniface.github.io/personal-portfolio/'
  },
]

multipost.addEventListener('click', displayProject);

function displayProject () {
  const modal = `
  <div class="modalcont">
  <div class="popupproject" id="popupproject">
  <div class="popupprojectHeader">
    <h2>${projectList[0].title}</h2>
    <p id="closeproject">${projectList[0].closebtn}</p>
  </div>

  <div class="popupprojectLangs">
    <ul>
      <li>${projectList[0].html}</li>
      <li>${projectList[0].bootstrap}</li>
      <li>${projectList[0].ruby}</li>
    </ul>
  </div>
  <div class="popupprojectBody">
    <div class="popupprojectBodyleft">
      <img src="${projectList[0].projectImage}">
    </div>
    <div class="popupprojectbodyright">
      <p>${projectList[0].projectDesc}
      </p>
      <div class="popupprojectbtn">
        <button id="seelive" onclick="${projectList[0].projectbtnlive}">See live</button>
        <button id="source" onclick="${projectList[0].projectbtnsource}">See source</button>
      </div>
    </div>

  </div>
</div>
  </div>

  `;

  featuredModal.innerHTML = modal;

  document.getElementById('seelive').addEventListener('click', () => {
    window.open('https://nemwel-boniface.github.io/personal-portfolio/');
  });
  document.getElementById('source').addEventListener('click', () => {
     window.open('https://nemwel-boniface.github.io/personal-portfolio/');
    });

    document.getElementById('closeproject').addEventListener('click', () => {
      featuredModal.style.display = 'none';
    });
}
function closeModalPopup() {
 featuredModal.innerHTML = '';
}

// if(featuredModal.innerHTML == '') {
//   multipost.addEventListener('click', displayProject);
// } else if(featuredModal.innerHTML !== '') {
//   closeProject.addEventListener('click', closeModalPopup);
// }
