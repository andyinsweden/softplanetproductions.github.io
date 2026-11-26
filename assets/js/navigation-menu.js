document.addEventListener("DOMContentLoaded", function () {
  const toggleBtn = document.getElementById("menu-toggle");
  const closeBtn = document.getElementById("menu-close");
  const wrapper = document.getElementById("menu-wrapper");

  function openMenu() {
    if (!wrapper) return;
    wrapper.classList.remove("invisible", "opacity-0");
    wrapper.setAttribute("aria-hidden", "false");
    if (toggleBtn) toggleBtn.setAttribute("aria-expanded", "true");
    if (closeBtn) closeBtn.focus();
  }

  function closeMenu() {
    if (!wrapper) return;
    wrapper.classList.add("invisible", "opacity-0");
    wrapper.setAttribute("aria-hidden", "true");
    if (toggleBtn) {
      toggleBtn.setAttribute("aria-expanded", "false");
      toggleBtn.focus();
    }
  }

  if (toggleBtn) {
    toggleBtn.addEventListener("click", function(e) {
      e.preventDefault();
      if (wrapper.classList.contains("invisible")) {
        openMenu();
      } else {
        closeMenu();
      }
    });
  }

  if (closeBtn) {
    closeBtn.addEventListener("click", function(e) {
      e.preventDefault();
      closeMenu();
    });
  }

  document.addEventListener("keydown", function(e) {
    const languageMenu = e.target.closest(".softplanet-language[open]");
    if (e.key === "Escape" && languageMenu) {
      languageMenu.open = false;
      languageMenu.querySelector("summary").focus();
      return;
    }
    if (e.key === "Escape" && wrapper && !wrapper.classList.contains("invisible")) {
      e.preventDefault();
      closeMenu();
    }
  });
});
