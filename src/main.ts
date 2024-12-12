import "./index.scss";

const slides = document.querySelector<HTMLElement>(".slides");
const slideElements = document.querySelectorAll<HTMLElement>(".slide");
const slideCount = slideElements.length;
const leftArrow = document.querySelector(".hero-arrow.left");
const rightArrow = document.querySelector(".hero-arrow.right");

let currentIndex = 0;

const updateSlidePosition = () => {
  if (slides) {
    slides.style.transition = "transform 0.6s ease-in-out";
    slides.style.transform = `translateX(-${currentIndex * 100}%)`;
  }
};

const loopSlidePosition = () => {
  if (slides) {
    if (currentIndex >= slideCount) {
      currentIndex = 0;
      slides.style.transition = "none";
      slides.style.transform = `translateX(-${currentIndex * 100}%)`;
      slides.offsetHeight;
      setTimeout(() => {
        slides.style.transition = "transform 0.6s ease-in-out";
        updateSlidePosition();
      }, 20);
    } else if (currentIndex < 0) {
      currentIndex = slideCount - 1;
      slides.style.transition = "none";
      slides.style.transform = `translateX(-${currentIndex * 100}%)`;
      slides.offsetHeight;
      setTimeout(() => {
        slides.style.transition = "transform 0.6s ease-in-out";
        updateSlidePosition();
      }, 20);
    } else {
      updateSlidePosition();
    }
  }
};

if (leftArrow && rightArrow) {
  leftArrow.addEventListener("click", () => {
    currentIndex--;
    loopSlidePosition();
  });

  rightArrow.addEventListener("click", () => {
    currentIndex++;
    loopSlidePosition();
  });
}

document.querySelector(".hero")?.addEventListener("wheel", (event) => {
  event.preventDefault();
});

window.addEventListener("load", () => {
  if (slides) {
    updateSlidePosition();
  }
});

const scrollDownButton = document.querySelector(".scroll-down");

if (scrollDownButton) {
  scrollDownButton.addEventListener("click", () => {
    const aboutSection = document.getElementById("about");
    if (aboutSection) {
      aboutSection.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  });
}
