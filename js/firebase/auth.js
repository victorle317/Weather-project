// Sign up
const $btnSignUp = document.querySelector("#btn-signup");

$btnSignUp.addEventListener("click", (e) => {
  e.preventDefault();
  const $signupForm = document.querySelector("#signup-form");
  //   get user info
  let email = $signupForm["signup-email"].value;
  let password = $signupForm["signup-password"].value;
  let rePassword = $signupForm["signup-repassword"].value;
  console.log(email, password, rePassword, $signupForm["signup-name"].value);
  let fName = $signupForm["signup-name"].value;
  if (password != rePassword) {
    alert("Xác nhận mật khẩu chưa đúng !");
  } else {
    //sign up the user
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((cred) => {
        return db
          .collection("Users")
          .doc(cred.user.uid)
          .set({ fullName: fName });
      })
      .then(() => {
        window.location.href = "index.html";
      });
  }
});

//Sign In
const $btnLogin = document.querySelector("#btn-login");
$btnLogin.addEventListener("click", (e) => {
  e.preventDefault();
  const $loginForm = document.querySelector("#login-form");
  //get info
  let email = $loginForm["login-email"].value;
  let password = $loginForm["login-password"].value;
  if (email == "" || password == "") {
    alert("Không được bỏ trống");
  } else {
    //login the user
    auth
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        window.location.href = "index.html";
      })
      .catch(() => {
        alert("Tài khoản hoặc mật khẩu không đúng ! ");
      });
  }
});
