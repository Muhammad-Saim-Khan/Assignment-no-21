function sam() {
  alert("Thanks for purchaising from us..!");
}

function deleteRow(index) {
  var table = document.getElementById("studentTable");
  table.deleteRow(index + 1);
}

var counterSpan = document.getElementsByTagName("span")[0];
var counterValue = 0;

function increaseCounter() {
  counterValue++;
  updateCounter();
}

function decreaseCounter() {
  counterValue--;
  updateCounter();
}

function updateCounter() {
  counterSpan.textContent = counterValue;
}

const studentForm = document.getElementById("studentForm");
const studentDataTable = document
  .getElementById("studentDataTable")
  .getElementsByTagName("tbody")[0];

studentForm.addEventListener("submit", function (event) {
  event.preventDefault();
  const name = document.getElementById("studentNameInput").value;
  const age = document.getElementById("studentAgeInput").value;

  const newRow = document.createElement("tr");
  newRow.innerHTML = `
        <td>${name}</td>
        <td>${age}</td>
        <td>
            <button class="editButton" onclick="editStudent(this)">Edit</button>
            <button class="deleteButton" onclick="deleteStudent(this)">Delete</button>
        </td>
    `;
  studentDataTable.appendChild(newRow);

  // Clear form fields after adding student
  document.getElementById("studentNameInput").value = "";
  document.getElementById("studentAgeInput").value = "";
});

function deleteStudent(button) {
  const row = button.parentNode.parentNode;
  row.parentNode.removeChild(row);
}

function editStudent(button) {
  const row = button.parentNode.parentNode;
  const name = row.cells[0].innerText;
  const age = row.cells[1].innerText;

  document.getElementById("studentNameInput").value = name;
  document.getElementById("studentAgeInput").value = age;

  // Show the form
  document.getElementById("studentForm").style.display = "block";

  // Hide submit button and change button text to "Save"
  const submitButton = document.querySelector(
    "#studentForm button[type='submit']"
  );
  submitButton.innerText = "Save";
  submitButton.removeEventListener("click", studentFormSubmit);
  submitButton.addEventListener("click", function (event) {
    event.preventDefault();
    row.cells[0].innerText = document.getElementById("studentNameInput").value;
    row.cells[1].innerText = document.getElementById("studentAgeInput").value;
    // Hide the form after saving
    document.getElementById("studentForm").style.display = "none";
    // Change button text back to "Add Student"
    submitButton.innerText = "Add Student";
    submitButton.removeEventListener("click", editStudentSubmit);
    submitButton.addEventListener("click", studentFormSubmit);
  });
}

function studentFormSubmit(event) {
  event.preventDefault();
  const name = document.getElementById("studentNameInput").value;
  const age = document.getElementById("studentAgeInput").value;

  const newRow = document.createElement("tr");
  newRow.innerHTML = `
        <td>${name}</td>
        <td>${age}</td>
        <td>
            <button class="editButton" onclick="editStudent(this)">Edit</button>
            <button class="deleteButton" onclick="deleteStudent(this)">Delete</button>
        </td>
    `;
  studentDataTable.appendChild(newRow);

  // Clear form fields after adding student
  document.getElementById("studentNameInput").value = "";
  document.getElementById("studentAgeInput").value = "";
}
function toggleDetails(button) {
  const details = button.previousElementSibling;
  details.classList.toggle("details");
  button.textContent = details.classList.contains("details")
    ? "Read more"
    : "Read less";
}
