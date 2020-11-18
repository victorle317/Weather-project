//get data
let getData = (check, user) => {
  if (check == true) {
    setupUI(user);
    addressUser(user);
    showInfoAddress(user);
  } else {
    setupUI();
    addressUser("");+
    showInfoAddress();
  }
};

// //get data
// let getData = (check, user) => {
//   if (check == true) {
//     db.collection("guides").onSnapshot(
//       (snapshot) => {
//         setupGuides(snapshot.docs);
//         setupUI(user);
//       },
//       (err) => {
//         console.log(err.message);
//       }
//     );
//   } else {
//     setupUI();
//     setupGuides([]);
//   }
// };
