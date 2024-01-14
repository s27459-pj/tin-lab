document.addEventListener("DOMContentLoaded", () => {
  const hamburgerToggle = document.getElementById("hamburger-toggle");
  const nav = document.querySelector("nav");

  hamburgerToggle.addEventListener("click", () => {
    nav.classList.toggle("active");
  });

  const navItems = nav.querySelectorAll("a");
  for (const navItem of navItems) {
    navItem.addEventListener("click", () => {
      nav.classList.remove("active");
    });
  }
});
