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

    document.querySelector("#edit-profile").addEventListener("click", () => {
      let select = Number(prompt(`1: "Thay doi ho ten"\n2: "Thay doi bio`));
      switch (select) {
        case 1: {
          let newName = prompt("Nhap ten moi: ");
          alert(newName);
          db.collection("Users").doc(user.uid).update({ fullName: newName });
          document.querySelector(".name").innerHTML = `${newName}`;
          break;
        }
        case 2: {
          let newBio = prompt("Nhap bio moi: ");
          db.collection("Users").doc(user.uid).update({ bio: newBio });
          document.querySelector(".bio").innerHTML = `${newBio}`;
          break;
        }
        default: {
          alert("Nhap dung di tk ngu");
        }
      }
    });
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
