"use strict";


function notification() {
var emailInput = document.getElementById('emailToLogin').value;
var passwordInput = document.getElementById('passwordToLogin').value;

// Check if the email contains "@" and has some text before and after it
if (!/^.+@.+$/.test(emailInput)) {
  document.getElementById('unsuccessful').innerText = 'Invalid email format. Please enter a valid email address.';
  document.getElementById('successful').innerText = '';
  return; // Exit the function if email format is invalid
}

if (passwordInput) {
  document.getElementById('successful').innerText = 'Login successful!';
  document.getElementById('unsuccessful').innerText = '';
  
  // Redirect to another site after successful login
  setTimeout("location.href = 'main.html';",1500);
} else {
  document.getElementById('unsuccessful').innerText = 'Login unsuccessful.';
  document.getElementById('successful').innerText = '';
}
}