const $loginLinkIn = document.querySelectorAll(".login-link-in");
const $loginLinkOut = document.querySelectorAll(".login-link-out");
const $forecastTable = document.querySelector(".forecast-table");
const setupUI = (user) => {
  if (user) {
    //account info
    //toggle UI elements
    $loginLinkIn.forEach((item) => (item.style.display = "block"));
    $forecastTable.style.display = "block";
    $loginLinkOut.forEach((item) => (item.style.display = "none"));
  } else {
    //hide acc info
    //toggle UI elements
    $loginLinkIn.forEach((item) => (item.style.display = "none"));
    $forecastTable.style.display = "none";
    $loginLinkOut.forEach((item) => (item.style.display = "block"));
  }
};
