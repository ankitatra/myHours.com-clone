const month = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const d = new Date();

let x = `Today, ${d.getDate()} ${month[d.getMonth()]}`;

let y = `${d.getDate()} ${month[d.getMonth()]}`;

document.getElementById("month").innerText = x;

let dataArr = JSON.parse(localStorage.getItem("details")) || [];

console.log("dataArr:", dataArr);

const addNew = () => {
  let datas = {
    name: document.getElementById("name").value,
    client: document.getElementById("client").value,
    desc: document.getElementById("desc").value,
    time: y,
  };

  if (
    document.getElementById("name").value == "" ||
    document.getElementById("client").value == "" ||
    document.getElementById("desc").value == ""
  ) {
    alert("Fill all inputs");
    return;
  }

  alert("Project added sucessfully");

  dataArr.push(datas);

  localStorage.setItem("details", JSON.stringify(dataArr));
};
