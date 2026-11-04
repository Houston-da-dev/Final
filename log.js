document.querySelectorAll('.part p').forEach((p, index) => {
    p.style.setProperty('--i', index + 1);
});


var usernames = [];
var passwords = [];

// SIGN UP FUNCTION
function signup(event) {
    event.preventDefault();

    var user = document.getElementById("user").value;
    var pass = document.getElementById("passw").value;
    var passcon = document.getElementById("passcon").value;

    if (user == "" || pass == "" || passcon == "") {
        alert("Please fill in all fields");
        return;
    }

    if (pass != passcon) {
        alert("Passwords do not match");
        return;
    }

    if (usernames.includes(user)) {
        alert("Username already exists");
        return;
    }

    usernames.push(user);
    passwords.push(pass);

    alert("Account created successfully!");

    document.getElementById("user").value = "";
    document.getElementById("passw").value = "";
    document.getElementById("passcon").value = "";

    document.getElementById("signup").style.display = "none";
    document.getElementById("login").style.display = "flex";
}


// LOGIN FUNCTION

function login(event) {
    event.preventDefault();

    var user = document.getElementById("username").value;
    var pass = document.getElementById("password").value;

    var index = usernames.indexOf(user);

    if (index != -1 && passwords[index] == pass) {
        alert("Login successful!");

        document.getElementById("signup").style.display = "none";
        document.getElementById("login").style.display = "none";

        document.getElementById("pass").style.display = "flex";

        document.getElementById("username").value = "";
        document.getElementById("password").value = "";

    } else {
        alert("Incorrect username or password");
    }
}



// SWITCH TO SIGN UP
function showSignup() {
    document.getElementById("signup").style.display = "flex";
    document.getElementById("login").style.display = "none";
    document.getElementById("pass").style.display = "none";
}


// SWITCH TO LOGIN
function showLogin() {
    document.getElementById("signup").style.display = "none";
    document.getElementById("login").style.display = "flex";
    document.getElementById("pass").style.display = "none";
}
