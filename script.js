document.addEventListener("DOMContentLoaded", () => {
  // Correctly destructure the 'animate' function from the global 'Motion' object
  const { animate } = Motion;

  // Animate Header on page load
  animate(document.querySelector(".main-header"),
      { y: [-100, 0], opacity: [0, 1] },
      { duration: 0.8, ease: "ease-out" }
  );

  // Animate Hero Title on page load
  animate(document.querySelector(".hero-content"),
      { x: [-100, 0], opacity: [0, 1] },
      { duration: 1, delay: 0.2, ease: "ease-out" }
  );

  // Animate Hero Description on page load
  animate(document.querySelector(".hero-description"),
      { x: [100, 0], opacity: [0, 1] },
      { duration: 1, delay: 0.4, ease: "ease-out" }
  );

  // Animate Hero Image on page load
  animate(document.querySelector(".hero-image"),
      { scale: [1.4, 1], opacity: [0, 0.85] },
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

  // --- DYNAMIC SCROLL BLUR EFFECT ---
  const heroImage = document.querySelector(".hero-image");

  const updateBlur = () => {
      // Get the current vertical scroll position
      const scrollY = window.scrollY;
      
      // Calculate the blur amount. A smaller divisor (e.g., 20) makes it blur faster.
      const blurAmount = scrollY / 30;
      
      // Set a maximum blur value (e.g., 20px) so it doesn't get excessively blurry.
      const cappedBlur = Math.min(blurAmount, 20);

      // Apply the blur filter directly to the image's style
      if (heroImage) {
          heroImage.style.filter = `blur(${cappedBlur}px)`;
      }
  };

  // Listen for the scroll event and call the update function.
  // Using requestAnimationFrame ensures the animation is smooth and efficient.
  window.addEventListener("scroll", () => {
      requestAnimationFrame(updateBlur);
  });

  // --- "SHOW MORE" PROJECTS FUNCTIONALITY ---
const allWorksButton = document.querySelector(".all-works-link");
const projectCards = document.querySelectorAll(".project-card");

// Make sure the button exists before adding an event listener
if (allWorksButton) {
    allWorksButton.addEventListener("click", (event) => {
        // Prevent the link from trying to navigate away
        event.preventDefault();

        let delay = 0;
        // Loop through all project cards
        projectCards.forEach((card, index) => {
            // Target the cards that are currently hidden (index 4 is the 5th item)
            if (index >= 4) {
                // First, make the card part of the layout
                card.style.display = "block";

                // Add the class that triggers the animation
                card.classList.add("is-visible");

                // Apply a staggered delay to each card for a nicer effect
                card.style.animationDelay = `${delay}s`;
                delay += 0.1; // Increase the delay for the next card
            }
        });

        // Add a class to fade out the "All Works" button
        allWorksButton.classList.add("is-hidden");
    });
}

// --- EXPERIENCE CARD FLIPPER ---
const experienceItems = document.querySelectorAll(".experience-item");
let currentExperienceIndex = 0;

// Check if there are items to flip
if (experienceItems.length > 0) {
    // Set an interval to run the flipping function every 2 seconds (2000 milliseconds)
    setInterval(() => {
        // Remove 'active' class from the current item
        experienceItems[currentExperienceIndex].classList.remove("active");

        // Move to the next item, and loop back to 0 if at the end
        currentExperienceIndex = (currentExperienceIndex + 1) % experienceItems.length;

        // Add 'active' class to the new current item
        experienceItems[currentExperienceIndex].classList.add("active");
    }, 2000); // The duration is 2 seconds
}
});