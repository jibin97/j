// Form handling
export function initForms() {
  const subscribeForm = document.querySelector('.subscribe-form');
  
  if (subscribeForm) {
    subscribeForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const email = subscribeForm.querySelector('input').value;
      
      if (email) {
        // Add validation here
        alert('Thank you for subscribing!');
        subscribeForm.reset();
      }
    });
  }
}