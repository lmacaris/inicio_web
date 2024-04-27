// loader - usamos un setTimeout para que dure 2 secs y despues desaparezca cambiando el display de navbar y footer a "flex"
setTimeout(() => {
  document.querySelector(".loader").classList.add("loader--hidden");
  document.querySelector(".navbar").style.display = "flex";
  document.querySelector(".footer").style.display = "flex";
}, 2000);
// -----------------------------------------------
// --------------------- MENU y Sandwich menu --------------------------

const toggleBtn = document.querySelector(".toggle_btn");
const toggleBtnIcon = document.querySelector(".toggle_btn i");
const dropDownMenu = document.querySelector(".dropdown_menu");

toggleBtn.onclick = () => {
  dropDownMenu.classList.toggle("open");
  const isOpen = dropDownMenu.classList.contains("open");

  toggleBtnIcon.classList = isOpen ? "fa-solid fa-xmark" : "fa-solid fa-bars";
};

//
