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
      
      // Calculate the blur amount.
      const blurAmount = scrollY / 30;
      
      // Set a maximum blur value
      const cappedBlur = Math.min(blurAmount, 20);

      if (heroImage) {
          heroImage.style.filter = `blur(${cappedBlur}px)`;
      }
  };

  // Listen for the scroll event and call the update function.
  window.addEventListener("scroll", () => {
      requestAnimationFrame(updateBlur);
  });

  // --- "SHOW MORE" PROJECTS FUNCTIONALITY ---
  const allWorksButton = document.querySelector(".all-works-link");
  const projectCards = document.querySelectorAll(".project-card");

  if (allWorksButton) {
      allWorksButton.addEventListener("click", (event) => {
          event.preventDefault();

          let delay = 0;
          projectCards.forEach((card, index) => {
              if (index >= 4) {
                  card.style.display = "block";
                  card.classList.add("is-visible");
                  card.style.animationDelay = `${delay}s`;
                  delay += 0.1;
              }
          });

          allWorksButton.classList.add("is-hidden");
      });
  }

  // --- EXPERIENCE CARD FLIPPER ---
  const experienceItems = document.querySelectorAll(".experience-item");
  let currentExperienceIndex = 0;

  if (experienceItems.length > 0) {
      setInterval(() => {
          experienceItems[currentExperienceIndex].classList.remove("active");
          currentExperienceIndex = (currentExperienceIndex + 1) % experienceItems.length;
          experienceItems[currentExperienceIndex].classList.add("active");
      }, 2000);
  }

  // --- NEW: STICKY HORIZONTAL SCROLL ANIMATION ---
  const scrollSection = document.querySelector(".horizontal-scroll-section");
  const skillTrack = document.querySelector(".skill-track");

  // Only run the script if the horizontal section exists
  if (scrollSection) {
      const scrollAnimation = () => {
          // Calculate how far the user has scrolled into the main section
          const scrollAmount = window.scrollY - scrollSection.offsetTop;
          
          // Calculate the maximum distance we can scroll inside the section
          const maxScroll = scrollSection.offsetHeight - window.innerHeight;

          // If we are outside the section's scroll area, do nothing
          if (scrollAmount < 0 || scrollAmount > maxScroll) return;

          // Calculate the scroll progress as a percentage (0 to 1)
          const scrollProgress = scrollAmount / maxScroll;
          
          // Calculate the maximum horizontal distance the track can move
          const maxTranslate = skillTrack.scrollWidth - window.innerWidth;

          // Calculate the horizontal translation based on scroll progress
          const translateValue = scrollProgress * maxTranslate;

          // Apply the transform to move the track horizontally
          skillTrack.style.transform = `translateX(-${translateValue}px)`;
      };

      // Listen for the scroll event and use requestAnimationFrame for smooth animation
      window.addEventListener("scroll", () => {
          requestAnimationFrame(scrollAnimation);
      });
  }

  // --- CUSTOM CURSOR LOGIC ---
const cursor = document.querySelector('.custom-cursor');

// 1. Function to move the cursor
const moveCursor = (e) => {
    // We use clientX and clientY to get the mouse position
    const x = e.clientX;
    const y = e.clientY;
    
    // Position the cursor div. We offset by half its width/height to center it.
    cursor.style.transform = `translate3d(${x - 16}px, ${y - 16}px, 0)`;
};

// Add the event listener for mouse movement
window.addEventListener('mousemove', moveCursor);

// 2. Logic to shrink the cursor on hover
// Select all elements that should trigger the shrink effect
const interactiveElements = document.querySelectorAll(
    'a, button, .project-card, .award-card, .experience-card, .stats-container'
);

// Add event listeners to each interactive element
interactiveElements.forEach(el => {
    el.addEventListener('mouseenter', () => {
        cursor.classList.add('shrink');
    });
    el.addEventListener('mouseleave', () => {
        cursor.classList.remove('shrink');
    });
});

});