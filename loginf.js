console.log("✅ loginf.js is successfully loaded!");
document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form from refreshing the page

    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    let message = document.getElementById("loginMessage");

    // Hardcoded credentials for testing (Replace with database authentication later)
    let validUsername = "admin";
    let validPassword = "12345";

    if (username === validUsername && password === validPassword) {
        message.style.color = "green";
        message.innerText = "Login successful!";
        window.location.href = "dashboard.html"; // Redirect after successful login
    } else {
        message.style.color = "red";
        message.innerText = "Invalid username or password!";
    }
});


