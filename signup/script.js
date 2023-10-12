function submitForm(event) {
  event.preventDefault(); // Prevent the default form submission

  const firstName = document.getElementById('first-name').value;
  const lastName = document.getElementById('last-name').value;
  const dob = document.getElementById('dob').value;
  const password = document.getElementById('create-password').value;
  const confirmPassword = document.getElementById('confirm-password').value;

  if (password !== confirmPassword) {
    alert('Passwords do not match. Please try again.');
    return;
  }

  const formData = {
    firstName: firstName,
    lastName: lastName,
    dob: dob,
    password: password,
  };

  fetch('http://localhost:3000/submit', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(formData),
  })
  
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(data => {
      alert(data.message);
      document.getElementById('signupForm').reset();
    })
    .catch(error => console.error('Error:', error));
}

document.getElementById('signupForm').addEventListener('submit', submitForm);
