// Scroll and animation effects
export function initAnimations() {
  // Smooth scroll for navigation
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href'))?.scrollIntoView({
        behavior: 'smooth'
      });
    });
  });

  // Sticky header
  const header = document.querySelector('header');
  const scrollThreshold = 10;

  window.addEventListener('scroll', () => {
    if (window.scrollY > scrollThreshold) {
      header.classList.add('sticky');
    } else {
      header.classList.remove('sticky');
    }
  });
}

document.addEventListener('DOMContentLoaded', () => {
  const featureCards = document.querySelectorAll('.feature-card');
  
  const observerOptions = {
      root: null, // viewport
      rootMargin: '0px',
      threshold: 0.8 // trigger when 10% of the element is visible
  };

  const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry, index) => {
          if (entry.isIntersecting) {
              // Add a delay to create staggered animation
              setTimeout(() => {
                  entry.target.classList.add('visible');
              }, index * 200); // 200ms between each card
          }
      });
  }, observerOptions);

  // Start observing each card
  featureCards.forEach(card => observer.observe(card));
});


const tiltContainer = document.querySelector('.advantages');
const tiltImage = document.querySelector('.tilt-image');

tiltContainer.addEventListener('mousemove', (e) => {
    const rect = tiltContainer.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    // Calculate tilt based on mouse position
    const mouseX = e.clientX - centerX;
    const mouseY = e.clientY - centerY;

    // Adjust these multipliers to control tilt intensity
    const rotateX = (mouseY / (rect.height / 2)) * -30;
    const rotateY = (mouseX / (rect.width / 2)) * 30;

    tiltImage.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
});

tiltContainer.addEventListener('mouseleave', () => {
    // Reset to original position
    tiltImage.style.transform = 'rotateX(0deg) rotateY(0deg) scale(1)';
});