"use strict";

// Script for Log in page
function notification() {
let emailLoginInput = document.getElementById('emailToLogin').value;
let passwordLoginInput = document.getElementById('passwordToLogin').value;

// Check if the email contains "@" and has some text before and after it
if (!/^.+@.+$/.test(emailLoginInput)) {
  document.getElementById('unsuccessful').innerText = 'Invalid email format. Please enter a valid email address.';
  document.getElementById('successful').innerText = '';
  return; // Exit the function if email format is invalid
}

if (passwordLoginInput) {
  document.getElementById('successful').innerText = 'Login successful!';
  document.getElementById('unsuccessful').innerText = '';
  
  // Redirect to another site after successful login
  setTimeout("location.href = 'main.html';",1500);
} else {
  document.getElementById('unsuccessful').innerText = 'Login unsuccessful.';
  document.getElementById('successful').innerText = '';
}
}

// Script for Sign up page

function signupNotification() {
    let nameSignupInput = document.getElementById('nameToSignup').value;
    let emailSignupInput = document.getElementById("emailToSignup").value;
    let passwordSignupInput = document.getElementById("passwordToSignup").value;

     if (!/^.+@.+$/.test(emailSignupInput)) {
         document.getElementById('unsuccessful').innerText = 'Invalid email format. Please enter a valid email address.';
         document.getElementById('successful').innerText = '';
         return;
    }

    if (passwordSignupInput) {
        document.getElementById("successful").innerText = "Signing up successfully!";
        document.getElementById("unsuccessful").innerText = "";

        setTimeout("location.href = 'main.html';", 1500);
    } else {
        document.getElementById("unsuccessful").innerText = "Signing up failed!";
        document.getElementById("successful").innerText = "";
    }


}