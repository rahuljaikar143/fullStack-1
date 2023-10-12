

function displayMessage(element, message) {
  const messageContainer = document.getElementById('message');
  messageContainer.innerText = message;

  const rect = element.getBoundingClientRect();
  messageContainer.style.top = `${rect.bottom + window.scrollY + 10}px`;
  messageContainer.style.left = `${rect.left + window.scrollX}px`;
  messageContainer.style.display = 'block';
}

function clearMessage() {
  const messageContainer = document.getElementById('message');
  messageContainer.innerText = '';
  messageContainer.style.display = 'none';
}

function redirectToLogin() {
  // Replace 'login.html' with the actual URL of your login page
  window.location.href = '../login/login.html';
}

function redirectToSignup() {
  // Replace 'signup.html' with the actual URL of your signup page
  window.location.href = '../signup/signup.html';
}
