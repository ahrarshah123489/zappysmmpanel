function signupUser() {
  let username = document.getElementById('signup-username').value;
  let password = document.getElementById('signup-password').value;

  if (username && password) {
    localStorage.setItem('zappyUser', username);
    localStorage.setItem('zappyPass', password);
    alert('Signup successful! You can now login.');
    window.location.href = 'index.html';
  } else {
    alert('Please enter both username and password.');
  }
}

function loginUser() {
  let username = document.getElementById('login-username').value;
  let password = document.getElementById('login-password').value;

  let storedUser = localStorage.getItem('zappyUser');
  let storedPass = localStorage.getItem('zappyPass');

  if (username === storedUser && password === storedPass) {
    alert('Login successful! Redirecting...');
    window.location.href = 'https://ahmadsmmpanel.com';  // <--- Redirect URL here
  } else {
    alert('Incorrect username or password. Please sign up first.');
  }
}
