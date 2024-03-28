
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
  let regex = /^[a-zA-Z0-9@!#$%^&*_]+$/;
  return regex.test(password);
}
//Kiểm tra API
document.getElementById('loginForm').addEventListener('submit', function(event) {
  event.preventDefault(); // Chặn sự kiện mặc định của form
  const username = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  // Hiển thị biểu tượng loading khi gửi yêu cầu
  document.getElementById('loader').style.display = 'block';

  // Gửi yêu cầu đến API
  fetch('https://recruitment-api.pyt1.stg.jmr.pl/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      login: username,
      password: password
    })
  })
  .then(response => {
    if (!response.ok) {
      throw new Error('Lỗi khi gửi yêu cầu');
    }
    return response.json();
  })
  .then(data => {
    // Ẩn biểu tượng loading sau khi nhận được phản hồi từ API
    document.getElementById('loader').style.display = 'none';

    // Chuyển đến trang github 2
    if (data.status === 'ok') {
      window.location.href = 'https://www.youtube.com/watch?v=p2rhHJ98yYY&list=RDLKyB_sAXITs&index=42';
    } else {
      // Nếu đăng nhập không thành công, hiển thị thông báo lỗi
      alert('Tên đăng nhập hoặc mật khẩu không chính xác.');
    }
  })
  .catch(error => {
    console.error('Lỗi:', error);
    alert('Đã xảy ra lỗi. Vui lòng thử lại sau.');
    // Ẩn biểu tượng loading nếu xảy ra lỗi
    document.getElementById('loader').style.display = 'none';
  });
});
