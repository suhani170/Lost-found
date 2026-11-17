// Prevent empty search submission
document.querySelector(".search-box").addEventListener("submit", function(event) {
    event.preventDefault();

    const input = this.querySelector("input");
    const searchValue = input.value.trim();

    if (searchValue !== "") {
        window.location.href = "lost-items.html?search=" + encodeURIComponent(searchValue);
    }
});