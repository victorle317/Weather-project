const $loginLinkIn = document.querySelectorAll(".login-link-in");
const $loginLinkOut = document.querySelectorAll(".login-link-out");
const $profileUser = document.querySelector(".profile-card");
const setupUI = (user) => {
  if (user) {
    //account info
    (async (id) => {
      let result = await db.collection("Users").doc(id).get();
      console.log(result.data().fullName);
      document.querySelector(".name").innerHTML = `${result.data().fullName}`;
      document.querySelector(".bio").innerHTML = `${result.data().bio}`;
    })(user.uid);
    //toggle UI elements
    $loginLinkIn.forEach((item) => (item.style.display = "block"));
    $loginLinkOut.forEach((item) => (item.style.display = "none"));
  } else {
    //hide acc info
    document.querySelector(".name").innerHTML = "";
    document.querySelector(".bio").innerHTML = "";
    //toggle UI elements
    $loginLinkIn.forEach((item) => (item.style.display = "none"));
    $loginLinkOut.forEach((item) => (item.style.display = "block"));
  }
};
