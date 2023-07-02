  function confirm(event) {
    event.preventDefault(); // Prevent form submission

    // Get input values
    let fnameInput = document.getElementById('fname');
    let lnameInput = document.getElementById('lname');
    let phoneInput = document.getElementById('phone');
    let commentInput = document.getElementById('comment-input');
    let checkboxInput = document.getElementById('inlineCheckbox');
    let attendees = document.getElementById("nPeople");
    let btn = document.getElementById("dropdownComment");
    let comment = document.getElementById("comment-input");

    // Check if inputs contain only letters
    let nameRegex = /^[a-zA-Z]+$/;
    if (!nameRegex.test(fnameInput.value) || !nameRegex.test(lnameInput.value)) {
      alert('Error: Name fields should only contain letters');
      return;
    }

    let com;

    if(commentInput.value.length>0) {
      com = " | Comment: " + commentInput.value;
    }

    if (checkboxInput.checked) {
      var data = {
        "sender": {"email":"georgiohayek2002@gmail.com"},
        "to": [{"email":"georgiohayek2002@gmail.com"}],
        "subject": fnameInput.value +  " " + lnameInput.value + " | " + phoneInput.value,
        "htmlContent": fnameInput.value + " " + lnameInput.value + " has accepted your wedding invitation, for more info contact " + fnameInput.value + " on " + phoneInput.value + " | number of attendees " + attendees.value + com
      };
    } else {
      var data = {
        "sender": {"email":"georgiohayek2002@gmail.com"},
        "to": [{"email":"georgiohayek2002@gmail.com"}],
        "subject": fnameInput.value +  " " + lnameInput.value + " | " + phoneInput.value,
        "htmlContent": fnameInput.value + " " + lnameInput.value + " has rejected your wedding invitation, for more info contact " + fnameInput.value + " on " + phoneInput.value + com
      };
    }
    

    let xhr = new XMLHttpRequest();
    xhr.withCredentials = true;
    
    xhr.addEventListener("readystatechange", function() {
        if(this.readyState === 4) {
            console.log(this.responseText);
            alert(fnameInput.value + " " + lnameInput.value + " successully added to list.");
            fnameInput.value="";
            lnameInput.value="";
            phoneInput.value="";
            commentInput.value="";
            checkboxInput.checked=false; 
            btn.classList.remove("d-none");
            btn.classList.add("d-block");
            checkboxInput.classList.remove("d-block");
            checkboxInput.classList.add("d-none");
        }
    });
    
    xhr.open("POST", "https://api.sendinblue.com/v3/smtp/email");
    xhr.setRequestHeader("api-key", "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");
    xhr.setRequestHeader("Content-Type", "application/json");
    
    xhr.send(JSON.stringify(data));
    

  }