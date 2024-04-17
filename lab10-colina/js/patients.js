let tbodyPatientsList = document.getElementById("tbodyPatientsList");
let arrayOfPatientInfoObjects = [];
populateInitialData();

//Populate Initial Data
function populateInitialData() {
  const patientInfo1 = {
    patientIdNumber: "EP-001-000001",
    firstName: "Ana",
    middleInitials: "J",
    lastName: "Smith",
    dateOfBirth: "1945-01-05",
    ddlDepartment: "Ear, Nose and Throat",
    radioIsOutPatientYes: "No",
  };

  const patientInfo2 = {
    patientIdNumber: "P-001-000002",
    firstName: "Bob",
    middleInitials: "K",
    lastName: "Jones",
    dateOfBirth: "1985-05-04",
    ddlDepartment: "Cardiology",
    radioIsOutPatientYes: "Yes",
  };

  const patientInfo3 = {
    patientIdNumber: "EP-001-000003",
    firstName: "Carlos",
    middleInitials: "A",
    lastName: "Hernandez",
    dateOfBirth: "1957-03-13",
    ddlDepartment: "Cardiology",
    radioIsOutPatientYes: "Yes",
  };

  tbodyPatientsList.appendChild(createRowData(patientInfo1));
  tbodyPatientsList.appendChild(createRowData(patientInfo2));
  tbodyPatientsList.appendChild(createRowData(patientInfo3));
}

//EventListener to add to the table once info is submitted
document
  .getElementById("patient-form")
  .addEventListener("submit", submitPatientInformation);

//EventListener to show and hide specific rows depending if the patients are outpatients or not
document
  .getElementById("chkShowOutPatients")
  .addEventListener("change", updateTable);

//EventListener to show and hide specific rows depending if the patients are elderly (65 years old or above) or not.
document
  .getElementById("chkElderlyPatients")
  .addEventListener("change", updateTable);

//This function handles everytime there's a change in either the elderly checkbox or the outpatient checkbox
function updateTable() {
  //We need to get the checked values of both elderly and outpatient so that we know which row in the table to
  //hide and which ones to show
  let checkedValueOfOutPatient =
    document.getElementById("chkShowOutPatients").checked;
  let checkedValueOfElderly =
    document.getElementById("chkElderlyPatients").checked;

  let tableRows = tbodyPatientsList.getElementsByTagName("tr");

  //If we want to display both elderly patients that are outpatients
  if (checkedValueOfOutPatient === true && checkedValueOfElderly === true) {
    for (let row of tableRows) {
      let outPatientValue = row.querySelector('[name="radioIsOutPatientYes"]');
      let isElderly = row.getAttribute("isElderly");

      if (outPatientValue.textContent === "Yes" && isElderly === "true") {
        row.style.display = "";
      } else {
        row.style.display = "none";
      }
    }
    //If we want to display all the outpatients regardless of age
  } else if (
    checkedValueOfOutPatient === true &&
    checkedValueOfElderly === false
  ) {
    for (let row of tableRows) {
      let outPatientValue = row.querySelector('[name="radioIsOutPatientYes"]');
      if (outPatientValue.textContent === "Yes") {
        row.style.display = "";
      } else {
        row.style.display = "none";
      }
    }
    //If we want to display all the elderly regardless if they are outpatients or not
  } else if (
    checkedValueOfOutPatient === false &&
    checkedValueOfElderly === true
  ) {
    for (let row of tableRows) {
      let isElderly = row.getAttribute("isElderly");
      if (isElderly === "true") {
        row.style.display = "";
      } else {
        row.style.display = "none";
      }
    }
  } else {
    for (let row of tableRows) {
      row.style.display = "";
    }
  }
}

function submitPatientInformation(event) {
  event.preventDefault();

  let findObject = arrayOfPatientInfoObjects.find(
    (patientInfo) =>
      patientInfo.patientIdNumber ===
      document.getElementById("patientIdNumber").value
  );

  if (findObject != undefined) {
    alert("Patient already exists!");
    return;
  }
  //Check if patient is an outpatient or not
  let isOutPatient = "";
  if (document.getElementById("radioIsOutPatientYes").checked)
    isOutPatient = "Yes";
  else isOutPatient = "No";

  //Create patientInfo Object
  const patientInfo = {
    patientIdNumber: document.getElementById("patientIdNumber").value,
    firstName: document.getElementById("firstName").value,
    middleInitials: document.getElementById("middleInitials").value,
    lastName: document.getElementById("lastName").value,
    dateOfBirth: document.getElementById("dateOfBirth").value,
    ddlDepartment: document.getElementById("ddlDepartment").value,
    radioIsOutPatientYes: isOutPatient,
  };
  tbodyPatientsList.appendChild(createRowData(patientInfo));

  //Press reset button so that the fields are cleared
  let resetButton = document.getElementById("btnReset");
  resetButton.click();
}

function createRowData(patientInfo) {
  let tableRow = document.createElement("tr");

  for (let patientInfoKeys in patientInfo) {
    let td = document.createElement("td");
    td.setAttribute("name", patientInfoKeys);
    td.appendChild(document.createTextNode(patientInfo[patientInfoKeys]));

    if (patientInfoKeys === "dateOfBirth") {
      //Must concatenate a specific time zone so that javascript does not auto convert our date based on the local timezone
      let birthDate = new Date(
        patientInfo[patientInfoKeys] + "T17:00:00-05:00"
      );
      let currentDate = new Date();

      let age = calculateAge(birthDate, currentDate);
      if (age >= 65) {
        //Before creating the row, we determine which patients are elderly and add an additional attribute
        //to those elderly patients
        tableRow.setAttribute("isElderly", "true");
      }
    }

    tableRow.appendChild(td);
  }

  //Before adding the row to the table, we must check the value of the elderly checkbox because if the patient
  //about to be added is not an elderly and the checkbox for elderly is checked meaning only elderly patients should be
  //shown in the table, we still add this row but set its display attribute to none to temporarily hide it.
  if (
    document.getElementById("chkElderlyPatients").checked &&
    tableRow.getAttribute("isElderly") != "true"
  ) {
    tableRow.style.display = "none";
  }
  //In the same way, we must also check if the value of the outpatient checkbox is checked so that we don't
  //display the patient that is not an outpatient. We add it to the table, but it should temporarily be hidden.
  else if (
    document.getElementById("chkShowOutPatients").checked &&
    patientInfo.radioIsOutPatientYes != "Yes"
  ) {
    tableRow.style.display = "none";
  }

  //Add patientInfoObject to Array of patientInfoObjects
  arrayOfPatientInfoObjects.push(patientInfo);
  return tableRow;
}

//Calculates the age of the patient
function calculateAge(birthDate, currentDate) {
  let age = currentDate.getFullYear() - birthDate.getFullYear();

  if (birthDate.getMonth() > currentDate.getMonth()) {
    age--;
  } else if (birthDate.getMonth() === currentDate.getMonth()) {
    if (birthDate.getDate() > currentDate.getDate()) age--;
  }
  return age;
}
