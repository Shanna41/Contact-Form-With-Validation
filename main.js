const form = document.getElementById('contact-form');
const emailInput = document.getElementById('email');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  // Validate email address
  if (!isValidEmail(emailInput.value)) {
    alert('Please enter a valid email address.');
    return;
  }

  // Submit the form data (e.g., using AJAX)
  console.log('Form submitted!');
});

function isValidEmail(email) {
  // A simple regular expression for basic email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}