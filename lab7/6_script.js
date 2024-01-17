document.addEventListener("DOMContentLoaded", () => {
  // Clicking a gallery item opens the lightbox
  const gallery = document.getElementById("gallery");
  const images = gallery.querySelectorAll("img");
  for (const image of images) {
    image.addEventListener("click", () => {
      lightbox.classList.add("active");
      const img = image.cloneNode();
      lightboxContent.replaceChildren(img);
    });
  }

  const lightbox = document.getElementById("lightbox");
  const lightboxContent = document.getElementById("lightbox-content");

  const closeLightbox = () => {
    lightbox.classList.remove("active");
    lightboxContent.replaceChildren();
  };
  const previousImage = () => {
    const currentImage = lightboxContent.querySelector("img");
    const prevImage = images[+currentImage.dataset.index - 1];
    if (prevImage) {
      const img = prevImage.cloneNode();
      lightboxContent.replaceChildren(img);
    }
  };
  const nextImage = () => {
    const currentImage = lightboxContent.querySelector("img");
    const nextImage = images[+currentImage.dataset.index + 1];
    if (nextImage) {
      const img = nextImage.cloneNode();
      lightboxContent.replaceChildren(img);
    }
  };

  const lightboxClose = document.getElementById("lightbox-close-btn");
  lightboxClose.addEventListener("click", closeLightbox);

  const lightboxPrev = document.getElementById("lightbox-prev-btn");
  lightboxPrev.addEventListener("click", previousImage);

  const lightboxNext = document.getElementById("lightbox-next-btn");
  lightboxNext.addEventListener("click", nextImage);

  // Handle keyboard events
  document.addEventListener("keydown", (event) => {
    if (lightbox.classList.contains("active")) {
      if (event.key === "Escape") {
        event.preventDefault();
        closeLightbox();
      }
      if (event.key === "ArrowLeft") {
        event.preventDefault();
        previousImage();
      }
      if (event.key === "ArrowRight") {
        event.preventDefault();
        nextImage();
      }
    }
  });

  // Clicking outside the lightbox closes it
  lightbox.addEventListener("click", (event) => {
    if (event.target === lightbox) closeLightbox();
  });
});
