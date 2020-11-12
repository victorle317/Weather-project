const addResult = document.querySelector(".add-result");
let addressUser = (user) => {
  addResult.addEventListener("click", () => {
    if (user == "") alert("Vui lòng đăng nhập để sử dụng tính năng này");
    else {
      (async (id) => {
        let addressCollection = await db.collection("Addresses").doc(id);
        let getDataAddressCollection = await addressCollection.get();
        let dataFind = getDataAddressCollection.data();
        var numberAll = Object.keys(dataFind).length;
        let lon = Number(prompt("lon = "));
        let lat = Number(prompt("lat = "));
        //add lon and lat
        addressCollection.update({ [`${numberAll}`]: [lon, lat] });
      })(user.uid);
    }
  });
};
