let showInfoAddress = (user) => {
  (async (id) => {
    let result = await db.collection("Addresses").doc(id).get();
    let objectData = result.data();
    template.showData(objectData);
  })(user.uid);
};
