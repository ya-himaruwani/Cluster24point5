// Function to handle login form submission
document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission (for demonstration)
    let email = document.getElementById('loginForm').elements['email'].value;
    let password = document.getElementById('loginForm').elements['password'].value;
    // Perform validation and authentication (dummy example)
    console.log('Login submitted with:', email, password);
  });
  
  // Function to handle signup form submission
  document.getElementById('signupForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission (for demonstration)
    let email = document.getElementById('signupForm').elements['email'].value;
    let password = document.getElementById('signupForm').elements['password'].value;
    let confirmPassword = document.getElementById('signupForm').elements['confirmPassword'].value;
    // Perform validation and account creation (dummy example)
    console.log('Signup submitted with:', email, password, confirmPassword);
  });
  
  // Function to handle admin login form submission
  document.getElementById('adminLoginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission (for demonstration)
    let email = document.getElementById('adminLoginForm').elements['adminEmail'].value;
    let password = document.getElementById('adminLoginForm').elements['adminPassword'].value;
    // Perform validation and admin authentication (dummy example)
    console.log('Admin Login submitted with:', email, password);
  });
  
  // Function to handle password reset form submission
  document.getElementById('passwordResetForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission (for demonstration)
    let email = document.getElementById('passwordResetForm').elements['resetEmail'].value;
    // Perform password reset (dummy example)
    console.log('Password reset requested for:', email);
  });