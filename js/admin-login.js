
/*---admin login---*/

document.getElementById("adminLoginForm").addEventListener("submit", function(e) {

    e.preventDefault();

    const email = document.getElementById("adminEmail").value;
    const password = document.getElementById("adminPassword").value;
    const message = document.getElementById("loginMessage");

    const adminEmail = "admin@lostfound.com";
    const adminPassword = "Admin@123";

    if (email === adminEmail && password === adminPassword) {

        sessionStorage.setItem("adminLoggedIn", "true");

        window.location.href = "admin-dashboard.html";

    } else {

        message.textContent = "Invalid email or password!";
        message.style.color = "red";

    }

});
