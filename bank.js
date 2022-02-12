document.getElementById('login-submit').addEventListener('click', function () {
const emailField = document.getElementById('user-email');
const userEmail = emailField.value;
//get user password input
const passField = document.getElementById('user-pass');
const userPass = passField.value;
if (userEmail == 'jahangir@gmail.com' && userPass == 'jahangir') {  
  window.location.href = 'banking.html';
}
});