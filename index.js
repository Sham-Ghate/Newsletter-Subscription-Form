import './styles.css'

const form = document.getElementById('subscriptionForm');
const emailInput = document.getElementById('email');
const errorMessage = document.getElementById('error-message');
const successMessage = document.getElementById('success-message');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const email = emailInput.value.trim();
  if (validateEmail(email)) {
    successMessage.innerHTML = 'Thank you for subscribing!';
    successMessage.style.display = 'block';
    errorMessage.style.display = 'none';
    
    emailInput.value = '';
    document.getElementById('agree').checked = false;
  } else {
    errorMessage.innerHTML = 'Please enter a valid email address.';
    errorMessage.style.display = 'block';
    successMessage.style.display = 'none';
  }
});

function validateEmail(email) {
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return emailRegex.test(email);
};
