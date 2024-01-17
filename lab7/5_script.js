function registerAccordion(element) {
  const sections = element.querySelectorAll(".accordion-section");
  for (const section of sections) {
    const header = section.querySelector(".accordion-header");
    header.addEventListener("click", () => {
      const otherSections = element.querySelectorAll(
        ".accordion-section.expanded"
      );
      for (const otherSection of otherSections) {
        if (otherSection === section) continue;
        otherSection.classList.remove("expanded");
      }
      section.classList.toggle("expanded");
    });
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const accordions = document.querySelectorAll(".accordion");
  for (const accordion of accordions) {
    registerAccordion(accordion);
  }
});
