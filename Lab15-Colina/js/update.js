window.onload = loadDataToDropdown;

const dropdown = document.getElementById("ddlStudent");
dropdown.addEventListener("change", populateStudentDetails);

const updateBtn = document.getElementById("btnUpdate");
updateBtn.addEventListener("click", updateStudentDetails);

function populateStudentDetails() {
  const id = document.getElementById("ddlStudent").value;
  if (id == "") {
    clearAllFields();
    return;
  }
  const studentData = getStudentById(id);
  studentData.then((student) => {
    showDetails(student.id, student.name, student.program);
  });
}

async function getStudentById(id) {
  const response = await fetch(`http://localhost:3000/students/${id}`);
  if (response.ok) {
    const jsonData = await response.json();
    return jsonData;
  } else {
    return response.statusText;
  }
}

function showDetails(id, name, program) {
  const studentId = document.getElementById("id");
  const studentName = document.getElementById("name");
  const studentProgram = document.getElementById("program");

  studentId.value = id;
  studentName.value = name;
  studentProgram.value = program;
}

async function updateStudentDetails() {
  const student = {
    id: document.getElementById("id").value,
    name: document.getElementById("name").value,
    program: document.getElementById("program").value,
  };

  const setting = {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(student),
  };

  const response = await fetch("http://localhost:3000/students", setting);

  if (response.ok) {
    alert("Updated Student Successully!");
    clearAllFields();
  } else {
    alert(response.statusText);
  }
}

function loadDataToDropdown() {
  let data = getStudents();
  data.then((result) => {
    for (let e of result) {
      addItemToDropdown(e.id, e.name, e.program);
    }
  });
}

async function getStudents() {
  const response = await fetch("http://localhost:3000/students");
  if (response.ok) {
    const jsonData = await response.json();
    return jsonData;
  } else {
    return response.statusText;
  }
}

function addItemToDropdown(id, name, program) {
  let item = document.createElement("option");
  item.setAttribute("id", "student" + id);
  item.setAttribute("value", id);
  item.appendChild(document.createTextNode(id));
  dropdown.appendChild(item);
}

function clearAllFields() {
  document.getElementById("myform").reset();
  document.getElementById("id").value = "";
  document.getElementById("name").value = "";
  document.getElementById("program").value = "";
}
