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

    let name = "";
    if(username){
        name = username;
        //(text) = Welcome, ${name};
        // text: welcome username
        $("logIn").hide();
        $("logOut").show();
    }
  });
  
  