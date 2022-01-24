let menu_icon = document.querySelector(".open");
let mobileToggle = document.querySelector(".mobile-menu");

menu_icon.addEventListener("click", function () {
  mobileToggle.classList.toggle('hidden');
});
