let showInfoAddress = (user) => {
  (async (id) => {
    db.collection("Addresses").onSnapshot((snapshot) => {
      snapshot.docChanges().forEach(async (change) => {
        if (change.type === "added") {
          if (id == change.doc.id) {
            let mainData = await change.doc.data();
            console.log("added ", mainData);
            document.querySelector(".item.follow span").innerHTML = `${
              Object.keys(mainData).length
              }`;
            if (Object.getOwnPropertyNames(mainData).length !== 0) {
              await template.showData(mainData);
            }

            actionModal();
            editModal(id, mainData);
          }
          //lấy ra gợi ý 
          let suggest = document.getElementsByClassName("suggest");
          for (let i = 0; i < suggest.length; i++) {
            suggest[i].addEventListener("click", () => {
              console.log(convertText(suggest[i].innerText))

              // console.log(suggest[i].innerText
            
            })
          }
          }

          if (change.type === "modified" && id == change.doc.id) {
            console.log("modified", change.doc.data());
            if (Object.getOwnPropertyNames(change.doc.data()).length !== 0)
              await template.showData(change.doc.data());
          }

          if (change.type === "removed") {
            console.log("removed: ", change.doc.data());
          }
        });
    });
  })(user.uid);
};
let actionModal = () => {
  let listNameData = document.querySelectorAll(
    ".forecast-table.data-user .location"
  );
  let listShowEditTable = "";
  let i = 0;
  listNameData.forEach((e) => {
    // console.log(true, e.textContent);
    listShowEditTable += `<div class="local-name-data">${i}. ${e.textContent} 
              <input type="checkbox" aria-label="Checkbox for following text input" class="is-completed"></div>`;
    i++;
  });
  let editTable = document.querySelector("#data-all");
  editTable.innerHTML = listShowEditTable;
};

let editModal = (id, objectData) => {
  console.log("kkkkkkkkkk");
  document.getElementById("not-check").addEventListener("click", () => {
    let fake = document.querySelectorAll(".is-completed");
    fake.forEach((e) => {
      if (e.checked) {
        e.checked = false;
      }
    });
  });

  document.getElementById("delete-edit").addEventListener("click", checkDelete);
  function checkDelete() {
    let fake = document.querySelectorAll(".is-completed");
    fake.forEach((e) => {
      // console.log(e.checked);
      if (e.checked) {
        textContentLocal = e.parentElement.innerText;
        let textNum = "";
        for (let i = 0; i < textContentLocal.length; i++) {
          if (textContentLocal[i] !== ".") textNum += textContentLocal[i];
          else break;
        }
        textNum = Number(textNum);
        for (key in objectData) {
          if (key == textNum) {
            delete objectData[key];
          }
        }
        // console.log(true, objectData);
        let checkKey = 0;
        let newObject = {};
        for (key in objectData) {
          newObject[`${checkKey}`] = objectData[key];
          checkKey++;
        }
        // console.log(newObject);
        let proM = new Promise((res) => {
          res((document.getElementById("data-all").innerHTML = ""));
        });
        proM
          .then(() => {
            return db.collection("Addresses").doc(id).delete();
          })
          .then(() => {
            return db.collection("Addresses").doc(id).set(newObject);
          })
          .then(() => {
            location.reload();
          })
          .catch((err) => {
            console.log(err);
          });
      }
    });
  }
};
