let teamArr = JSON.parse(localStorage.getItem("teams")) || [];

console.log(teamArr);

const addTeam = () => {
  let teamObj = {
    name: document.getElementById("name").value,
    access: document.getElementById("access").value,
    email: document.getElementById("email").value,
  };

  if (
    document.getElementById("name").value == "" ||
    document.getElementById("access").value == "" ||
    document.getElementById("email").value == ""
  ) {
    alert("Fill all input");
    return;
  }

  alert("Team meber added sucessfully");

  teamArr.push(teamObj);

  localStorage.setItem("teams", JSON.stringify(teamArr));
};