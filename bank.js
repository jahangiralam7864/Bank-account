document.getElementById('login-submit').addEventListener('click', function () {
const emailField = document.getElementById('user-email');
const userEmail = emailField.value;
// console.log(userEmail);
//get user password input
const passField = document.getElementById('user-pass');
const userPass = passField.value;

if (userEmail == 'jahangir@gmail.com' && userPass == 'jahangir') {  
  window.location.href = 'banking.html';
}
})

// deposit handiling add
 