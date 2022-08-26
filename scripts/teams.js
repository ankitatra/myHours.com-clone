let teamArr = JSON.parse(localStorage.getItem("teams")) || [];

  const displayTable = (teamArr) => {
    document.querySelector("tbody").innerHTML = "";

    teamArr.forEach((ele, index) => {
      let tr = document.createElement("tr");

      let name = document.createElement("td");
      name.innerText = ele.name;

      let email = document.createElement("td");
      email.innerText = ele.email;

      let created = document.createElement("td");
      created.innerText = ele.access;

      let status = document.createElement("td");
      status.innerText = "Active";

      document.querySelector("tbody").append(tr);
      tr.append(name, email, created, status);
    });
  };

  displayTable(teamArr);