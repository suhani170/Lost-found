/*---elements---*/

const searchInput = document.getElementById("searchInput");
const category = document.getElementById("categoryFilter");
const locationFilter = document.getElementById("locationFilter");
const dateFilter = document.getElementById("dateFilter");
const sortFilter = document.getElementById("sortFilter");
const cards = [...document.querySelectorAll(".item-card")];
const grid = document.getElementById("itemsGrid");
const empty = document.getElementById("emptyState");
const count = document.getElementById("resultCount");
const pagination = document.getElementById("pagination");

/*---filter items---*/

function showItems(){

    let result = cards.filter(card => {

        const text = card.dataset.name.toLowerCase();
        const search = searchInput.value.toLowerCase();
        const cat = category.value;
        const loc = locationFilter.value;

        return text.includes(search) &&
            (cat === "all" || card.dataset.category === cat) &&
            (loc === "all" || card.dataset.location === loc);
    });

    result.sort((a,b) => {

        if(sortFilter.value === "az")
            return a.dataset.name.localeCompare(b.dataset.name);

        if(sortFilter.value === "za")
            return b.dataset.name.localeCompare(a.dataset.name);

        return sortFilter.value === "oldest"
            ? a.dataset.date.localeCompare(b.dataset.date)
            : b.dataset.date.localeCompare(a.dataset.date);
    });

    cards.forEach(card => card.style.display = "none");

    result.forEach(card => {
        card.style.display = "block";
        grid.appendChild(card);
    });

    empty.style.display = result.length ? "none" : "block";
    count.textContent = `Showing ${result.length} found items`;

    pagination.innerHTML = result.length
        ? `<button class="active">1</button>`
        : "";
}

/*---events---*/

searchInput.addEventListener("input",showItems);
category.addEventListener("change",showItems);
locationFilter.addEventListener("change",showItems);
dateFilter.addEventListener("change",showItems);
sortFilter.addEventListener("change",showItems);

/*---clear filters---*/

function clearFilters(){

    searchInput.value = "";
    category.value = "all";
    locationFilter.value = "all";
    dateFilter.value = "all";
    sortFilter.value = "newest";
    showItems();
}

document.getElementById("clearFilters").addEventListener("click",clearFilters);
document.getElementById("emptyClear").addEventListener("click",clearFilters);

showItems();