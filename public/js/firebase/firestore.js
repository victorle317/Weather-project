//get data
let getData = (check, user) => {
  if (check == true) {
    setupUI(user);
    addressUser(user);
    cache.user = user;
    showAddresses();
  } else {
    setupUI();
    addressUser("");
  }
};
