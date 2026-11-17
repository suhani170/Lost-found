/*---form---*/
const form = document.getElementById("reportForm");
const image = document.getElementById("image");
const fileName = document.getElementById("fileName");

image.addEventListener("change", function () {
    const file = this.files[0];

    if (!file) {
        fileName.textContent = "";
        return;
    }

    if (file.size > 5 * 1024 * 1024) {
        alert("Image must be smaller than 5MB.");
        this.value = "";
        fileName.textContent = "";
        return;
    }

    fileName.textContent = file.name;
});

/*---submit---*/
form.addEventListener("submit", function (e) {
    e.preventDefault();

    const type = document.querySelector('input[name="type"]:checked').value;

    alert(type + " item reported successfully!");

    form.reset();
    fileName.textContent = "";
});