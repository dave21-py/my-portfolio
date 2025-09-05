document.addEventListener("DOMContentLoaded", () => {
  // Correctly destructure the 'animate' function from the global 'Motion' object
  const { animate } = Motion;

  // Animate Header
  animate(document.querySelector(".main-header"), 
      { y: [-100, 0], opacity: [0, 1] }, 
      { duration: 0.8, ease: "ease-out" }
  );

  // Animate Hero Title
  animate(document.querySelector(".hero-content"),
      { x: [-100, 0], opacity: [0, 1] },
      { duration: 1, delay: 0.2, ease: "ease-out" }
  );

  // Animate Hero Description
  animate(document.querySelector(".hero-description"),
      { x: [100, 0], opacity: [0, 1] },
      { duration: 1, delay: 0.4, ease: "ease-out" }
  );

  // Animate Hero Image
  animate(document.querySelector(".hero-image"),
      { scale: [1.2, 1], opacity: [0, 0.85] },
      { duration: 1.5, delay: 0.6, ease: [0.16, 1, 0.3, 1] }
  );

  // Hover effect for buttons
  document.querySelectorAll(".cta-button, .email-button").forEach((button) => {
      button.addEventListener("mouseenter", () => {
          animate(button, 
              { scale: 1.05 }, 
              { duration: 0.2 }
          );
      });
      button.addEventListener("mouseleave", () => {
          animate(button, 
              { scale: 1 }, 
              { duration: 0.2 }
          );
      });
  });
});