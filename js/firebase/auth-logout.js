// listen for auth status changes
auth.onAuthStateChanged((user) => {
  const change = user;
  if (user) {
    getData(true, user);
  } else {
    getData(false, user);
  }
});

//Logout
const $logout = document.getElementById("logout");
console.log("ss");
$logout.addEventListener("click", () => {
  window.location.href = "signin-signup.html";
});
