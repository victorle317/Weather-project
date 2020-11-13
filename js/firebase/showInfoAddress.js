let showInfoAddress = (user) => {
  (async (id) => {
    let result = await db.collection("Addresses").doc(id).get();
    let objectData = result.data();
    console.log(0, objectData);
    if (Object.getOwnPropertyNames(objectData).length !== 0)
      template.showData(objectData);
  })(user.uid);
};
