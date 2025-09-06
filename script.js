document.addEventListener("DOMContentLoaded", () => {
  // Correctly destructure the 'animate' function from the global 'Motion' object
  const { animate } = Motion;

  // --- NEW: MOBILE NAVIGATION LOGIC ---
  const hamburgerMenu = document.querySelector(".hamburger-menu");
  const navLinks = document.querySelector(".nav-links");

  if (hamburgerMenu && navLinks) {
      hamburgerMenu.addEventListener("click", () => {
          hamburgerMenu.classList.toggle("active");
          navLinks.classList.toggle("active");
      });
  }

  // --- ORIGINAL ANIMATIONS ---
  animate(document.querySelector(".main-header"),
      { y: [-100, 0], opacity: [0, 1] },
      { duration: 0.8, ease: "ease-out" }
  );

  animate(document.querySelector(".hero-content"),
      { x: [-100, 0], opacity: [0, 1] },
      { duration: 1, delay: 0.2, ease: "ease-out" }
  );

  animate(document.querySelector(".hero-description"),
      { x: [100, 0], opacity: [0, 1] },
      { duration: 1, delay: 0.4, ease: "ease-out" }
  );

  animate(document.querySelector(".hero-image"),
      { scale: [1.4, 1], opacity: [0, 0.85] },
      { duration: 1.5, delay: 0.6, ease: [0.16, 1, 0.3, 1] }
  );

  document.querySelectorAll(".cta-button, .email-button").forEach((button) => {
      button.addEventListener("mouseenter", () => {
          animate(button, { scale: 1.05 }, { duration: 0.2 });
      });
      button.addEventListener("mouseleave", () => {
          animate(button, { scale: 1 }, { duration: 0.2 });
      });
  });

  // --- DYNAMIC SCROLL BLUR EFFECT ---
  const heroImage = document.querySelector(".hero-image");

  const updateBlur = () => {
      const scrollY = window.scrollY;
      const blurAmount = scrollY / 30;
      const cappedBlur = Math.min(blurAmount, 20);
      if (heroImage) {
          heroImage.style.filter = `blur(${cappedBlur}px)`;
      }
  };

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

  // --- MODIFIED: STICKY HORIZONTAL SCROLL ANIMATION ---
  const scrollSection = document.querySelector(".horizontal-scroll-section");
  const skillTrack = document.querySelector(".skill-track");

  if (scrollSection && skillTrack) {
      const scrollAnimation = () => {
          // NEW: Only run this animation on screens wider than 768px
          if (window.innerWidth <= 768) {
              // Ensure the transform is cleared for mobile layout
              skillTrack.style.transform = 'translateX(0px)';
              return;
          }

          const scrollAmount = window.scrollY - scrollSection.offsetTop;
          const maxScroll = scrollSection.offsetHeight - window.innerHeight;

          if (scrollAmount < 0 || scrollAmount > maxScroll) return;

          const scrollProgress = scrollAmount / maxScroll;
          const maxTranslate = skillTrack.scrollWidth - window.innerWidth;
          const translateValue = scrollProgress * maxTranslate;
          
          skillTrack.style.transform = `translateX(-${translateValue}px)`;
      };

      window.addEventListener("scroll", () => {
          requestAnimationFrame(scrollAnimation);
      });
  }

  // --- MODIFIED: CUSTOM CURSOR LOGIC ---
  const cursor = document.querySelector('.custom-cursor');
  // NEW: Check if the user's device is a touch device
  const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;

  // NEW: Only run cursor logic if it exists and it's not a touch device
  if (cursor && !isTouchDevice) {
      const moveCursor = (e) => {
          const x = e.clientX;
          const y = e.clientY;
          cursor.style.transform = `translate3d(${x - 16}px, ${y - 16}px, 0)`;
      };

      window.addEventListener('mousemove', moveCursor);

      const interactiveElements = document.querySelectorAll(
          'a, button, .project-card, .award-card, .experience-card, .stats-container'
      );

      interactiveElements.forEach(el => {
          el.addEventListener('mouseenter', () => cursor.classList.add('shrink'));
          el.addEventListener('mouseleave', () => cursor.classList.remove('shrink'));
      });
  }
});