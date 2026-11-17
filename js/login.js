/*---password---*/
const password = document.getElementById("password");
const showPassword = document.getElementById("showPassword");

showPassword.addEventListener("click", function(){
    const visible = password.type === "text";
    password.type = visible ? "password" : "text";
    this.innerHTML = visible
        ? '<i class="fa-regular fa-eye"></i>'
        : '<i class="fa-regular fa-eye-slash"></i>';
});

/*---login---*/
document.getElementById("loginForm").addEventListener("submit", function(e){
    e.preventDefault();
    alert("Login functionality will be connected with the database later.");
});