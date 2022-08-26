let dataArr = JSON.parse(localStorage.getItem("details")) || [];
console.log("dataArr:", dataArr);

const displayTable = (dataArr) => {
  document.querySelector("tbody").innerHTML = "";

  dataArr.forEach((ele, index) => {
    let tr = document.createElement("tr");

    let name = document.createElement("td");
    name.innerText = ele.name;

    let client = document.createElement("td");
    client.innerText = ele.client;

    let created = document.createElement("td");
    created.innerText = ele.time;

    let status = document.createElement("td");
    status.innerText = "Active";

    let action = document.createElement("td");
    action.innerText = "✔";
    action.style.textDecoration = "underline";
    action.style.cursor = "pointer";
    action.addEventListener("click", () => {
      actionFunc(ele, index);
    });

    document.querySelector("tbody").append(tr);
    tr.append(name, client, created, status, action);
  });
};

displayTable(dataArr);

function actionFunc(ele, index) {
  dataArr.splice(index, 1);
  displayTable(dataArr);
  alert(`${ele.name} Client ${ele.client} Project Is Completed ✔`);
  localStorage.setItem("details", JSON.stringify(dataArr));
}
