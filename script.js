document.addEventListener("DOMContentLoaded", () => {
  const { motion } = framerMotion;

  // Animate Header
  motion(document.querySelector(".main-header"), {
    initial: { y: -100, opacity: 0 },
    animate: { y: 0, opacity: 1 },
    transition: { duration: 0.8, ease: "easeOut" },
  });

  // Animate Hero Title
  motion(document.querySelector(".hero-content"), {
    initial: { x: -100, opacity: 0 },
    animate: { x: 0, opacity: 1 },
    transition: { duration: 1, delay: 0.2, ease: "easeOut" },
  });

  // Animate Hero Description
  motion(document.querySelector(".hero-description"), {
    initial: { x: 100, opacity: 0 },
    animate: { x: 0, opacity: 1 },
    transition: { duration: 1, delay: 0.4, ease: "easeOut" },
  });

  // Animate Hero Image
  motion(document.querySelector(".hero-image"), {
    initial: { scale: 1.2, opacity: 0 },
    animate: { scale: 1, opacity: 0.85 },
    transition: { duration: 1.5, delay: 0.6, ease: [0.16, 1, 0.3, 1] },
  });

  // Hover effect for buttons
  document.querySelectorAll(".cta-button, .email-button").forEach((button) => {
    button.addEventListener("mouseenter", () => {
      motion(button, {
        scale: 1.05,
        transition: { duration: 0.2 },
      });
    });
    button.addEventListener("mouseleave", () => {
      motion(button, {
        scale: 1,
        transition: { duration: 0.2 },
      });
    });
  });
});
