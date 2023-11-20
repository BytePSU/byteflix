document.addEventListener("DOMContentLoaded", function() {
    let signupButton = document.getElementById("signupButton");
    let signinButton = document.getElementById("signinButton");
    let nameField = document.getElementById("nameField");
    let title = document.getElementById("title");

    signinButton.onclick = function() { 
        nameField.style.maxHeight = "0"; 
        title.innerHTML = "Sign In"; 
        signupButton.classList.add("disable"); 
        signinButton.classList.remove("disable");
    }

    signupButton.onclick = function() { 
        nameField.style.maxHeight = "60px"; 
        title.innerHTML = "Sign Up"; 
        signupButton.classList.remove("disable"); 
        signinButton.classList.add("disable");
    }
}); 