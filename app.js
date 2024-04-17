// Chapters 43-48:

// 1. 
function showAlert() {
    alert("Alert box triggered!");
}

// 2. 
function showMessage(message) {
    alert(message);
}

// 3. 
function deleteRow(button) {
    var row = button.parentNode.parentNode;
    row.parentNode.removeChild(row);
}

// 4. 
var image = document.createElement('img');
image.src = 'https://images.priceoye.pk/apple-iphone-13-pro-pakistan-priceoye-wb6qy-270x270.webp';
document.body.appendChild(image);

image.onmouseover = function() {
    this.src = 'https://appleaddict.pk/wp-content/uploads/2024/03/iphone-6-price-in-pakistan-300x256.png';
}

image.onmouseout = function() {
    this.src = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUCBQsIuJzvIn1XxFzSxP-_0PhsNwTDBpKK-lMRBvbzw&s';
}

// 5. 
let counterValue = 0;

function increaseCounter() {
  counterValue++;
  updateCounter();
}

function decreaseCounter() {
  counterValue--;
  updateCounter();
}

function updateCounter() {
  document.getElementById("counter").innerText = counterValue;
}



// Chapters 49-52:

let students = [
    "John",
    "Mark",
    "Adam",
    "Susan",
    "Lisa",
    "Bart",
    "Henry",
    "Tom",
    "Riley"
];


window.onload = function() {
    updateTable();
};


function addStudent(event) {
    event.preventDefault();
    let nameInput = document.getElementById("name");
    let newName = nameInput.value.trim();
    if (newName !== "") {
        students.push(newName);
        updateTable();
        nameInput.value = "";
    }
}


function updateTable() {
    let table = document.getElementById("studentTable");
    table.innerHTML = `
        <tr>
            <th>Name</th>
            <th>Action</th>
        </tr>
    `;
    students.forEach(function(student) {
        let row = document.createElement("tr");
        let nameCell = document.createElement("td");
        nameCell.textContent = student;
        row.appendChild(nameCell);
        let actionCell = document.createElement("td");
        let deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";
        deleteButton.onclick = function() {
            deleteRow(this);
        };
        actionCell.appendChild(deleteButton);
        let editButton = document.createElement("button");
        editButton.textContent = "Edit";
        editButton.onclick = function() {
            showEditForm(this);
        };
        actionCell.appendChild(editButton);
        row.appendChild(actionCell);
        table.appendChild(row);
    });
}


function deleteRow(button) {
    let row = button.parentNode.parentNode;
    let index = row.rowIndex;
    students.splice(index - 1, 1);
    updateTable();
}


function showEditForm(button) {
    let row = button.parentNode.parentNode;
    let index = row.rowIndex - 1;
    let studentName = students[index];
    let form = document.createElement("form");
    form.innerHTML = `
        <label for="editName">Edit Name:</label>
        <input type="text" id="editName" value="${studentName}">
        <button type="button" onclick="editStudent(${index})">Save</button>
    `;
    row.innerHTML = "";
    let cell = row.insertCell(0);
    cell.appendChild(form);
}


function editStudent(index) {
    let newName = document.getElementById("editName").value.trim();
    if (newName !== "") {
        students[index] = newName;
        updateTable();
    }
}


