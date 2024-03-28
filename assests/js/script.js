
function myFunction() {
    let x = document.getElementById("password");
    if (x.type === "password") {
      x.type = "text";
    } else {
      x.type = "password";
    }
}
//Kiểm tra đầu vào
let usernameInput = document.getElementById('email');
let passwordInput = document.getElementById('password');
let usernameError = document.getElementById('username-error');
let passwordError = document.getElementById('password-error');
let usernameSuccess = document.getElementById('username-success');
let passwordSuccess = document.getElementById('password-success');
//ẩn hiện dòng chữ
usernameInput.addEventListener('change', ()=>{
  if(!isValidEmail(usernameInput.value) || usernameInput.value.length < 8) {
    usernameError.style.display = 'block';
    usernameSuccess.style.display = 'none';
  } else {
    usernameError.style.display = 'none';
    usernameSuccess.style.display = 'block';
  }
});
passwordInput.addEventListener('change', ()=>{
  if(!isValidPassword(passwordInput.value) || passwordInput.value.length < 8) {
    passwordError.style.display = 'block';
    passwordSuccess.style.display = 'none';
  } else {
    passwordError.style.display = 'none';
    passwordSuccess.style.display = 'block';
  }
});
//Kiểm tra điều kiện email
function isValidEmail(email){
  let regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}
function isValidPassword(password){
  let regex = /^[a-zA-Z0-9@!#$%^&*]+$/;
  return regex.test(password);
}
