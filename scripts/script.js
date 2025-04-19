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
    
  });
  
  