(() => {
  const refs = {
    openMenuBtn: document.querySelector("[menu-modal-open]"),
    closeMenuBtn: document.querySelector("[menu-modal-close]"),
    menu: document.querySelector("[menu-modal]"),
  };
  refs.openMenuBtn.addEventListener("click", toggleMenu);
  refs.closeMenuBtn.addEventListener("click", toggleMenu);
  function toggleMenu() {
    refs.menu.classList.toggle("is-hidden");
  }
})();
