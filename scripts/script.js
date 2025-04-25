$(document).ready(function () {
    //code goes here
  
    $("#saveBook").on("click", function () {
      //call f/n
      let statusText = underConstruction("Not Ready, Please be Patient!"); //update the status
      $("#saveBook").text(statusText).prop("disabled", true);
    
    });
  
    //pass a status (ready or not ready) and get back a message for user
    //rn, not ready
    function underConstruction(status) {
      return "Not Ready, Sorry!";
    }


    //  start of new


    document.getElementById("loginBtn").addEventListener("click", () => {
      const modal = new bootstrap.Modal(document.getElementById("loginModal"));
      modal.show();
    });
    
    document.getElementById("loginForm").addEventListener("submit", (e) => {
      e.preventDefault(); // Prevent page reload
      const name = document.getElementById("name").value;
    
      // Update navbar
      document.querySelector(".navbar-brand").textContent = `Welcome, ${name}`;
      document.getElementById("loginBtn").textContent = "Logout";
    
      // Close the modal
      const modal = bootstrap.Modal.getInstance(document.getElementById("loginModal"));
      modal.hide();
    
      // Add logout functionality
      document.getElementById("loginBtn").addEventListener("click", () => {
        location.reload();
      });
    });



// stuff we changing right now

let frontEndData = [];
let itemToDelete = null;

const form = document.getElementById('dataForm');
const dataInput = document.getElementById('dataInput');
const dataList = document.getElementById('dataList');
const sampleDataBtn = document.getElementById('sampleDataBtn');
const exportDataBtn = document.getElementById('exportDataBtn');
const deleteModal = document.getElementById('deleteModal');
const confirmDeleteBtn = document.getElementById('confirmDelete');
const cancelDeleteBtn = document.getElementById('cancelDelete');

function displayData() {
  dataList.innerHTML = "";
  frontEndData.forEach((data, index) => {
    const listItem = document.createElement('li');
    listItem.innerHTML = `
      <span class="data-text">${data}</span>
      <button class="edit-btn" data-index="${index}">Edit</button>
      <button class="delete-btn" data-index="${index}">Delete</button>
    `;
    dataList.appendChild(listItem);
  });
}

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const newData = dataInput.value;
  if (newData) {
    frontEndData.push(newData);
    displayData();
    dataInput.value = "";
  }
});

dataList.addEventListener('click', (event) => {
  const index = event.target.dataset.index;
  if (event.target.classList.contains('edit-btn')) {
    const listItem = event.target.parentElement;
    listItem.innerHTML = `
      <input type="text" value="${frontEndData[index]}" class="edit-input">
      <button class="save-btn" data-index="${index}">Save</button>
    `;
  }
  if (event.target.classList.contains('save-btn')) {
    const listItem = event.target.parentElement;
    const newValue = listItem.querySelector('.edit-input').value;
    if (newValue) {
      frontEndData[index] = newValue;
      displayData();
    }
  }
  if (event.target.classList.contains('delete-btn')) {
    itemToDelete = index;
    deleteModal.style.display = "block";
  }
});

confirmDeleteBtn.addEventListener('click', () => {
  if (itemToDelete !== null) {
    frontEndData.splice(itemToDelete, 1);
    displayData();
    itemToDelete = null;
    deleteModal.style.display = "none";
  }
});

cancelDeleteBtn.addEventListener('click', () => {
  itemToDelete = null;
  deleteModal.style.display = "none";
});

sampleDataBtn.addEventListener('click', () => {
  const sampleData = "Sample Data";
  dataInput.value = sampleData;
});

exportDataBtn.addEventListener('click', () => {
  console.log(JSON.stringify(frontEndData));
});


  });
  
  