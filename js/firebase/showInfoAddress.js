let showInfoAddress = (user) => {
  (async (id) => {
    db.collection("Addresses").onSnapshot(function (snapshot) {
      // console.log(snapshot.data())
      snapshot.docChanges().forEach(function (change) {
        if (change.type === "added") {
          if (id == change.doc.id) {
            console.log("added ", change.doc.data());
            if (Object.getOwnPropertyNames(change.doc.data()).length !== 0)
              template.showData(change.doc.data());
          }
        }
        if (change.type === "modified" && id == change.doc.id) {
          console.log("modified", change.doc.data());
          if (Object.getOwnPropertyNames(change.doc.data()).length !== 0)
            template.showData(change.doc.data());
        }
        if (change.type === "removed") {
          console.log("removed: ", change.doc.data());
          if (Object.getOwnPropertyNames(change.doc.data()).length !== 0)
            template.showData(change.doc.data());
        }
      });
    });
    // let result = await db.collection("Addresses").doc(id).get();
    // let objectData = result.data();
    // console.log(0, objectData);
    // if (Object.getOwnPropertyNames(objectData).length !== 0)
    //   template.showData(objectData);
  })(user.uid);
};
