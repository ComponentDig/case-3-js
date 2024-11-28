const form = document.getElementById("linkForm");
const linkCollection = document.getElementById("linkCollection");

const links = {};

// Function for rendering links
function renderLinks() {
    linkCollection.innerHTML = "";
    for (const category in links) {
        const categoryDiv = document.createElement("div");
        categoryDiv.className = "category";

        // Header for category
        const categoryHeader = document.createElement("h3");
        categoryHeader.textContent = category;
        categoryDiv.appendChild(categoryHeader);


       
        // List with links
        const ul = document.createElement("ul");
        links[category].forEach((link) => {
            const li = document.createElement("li");
            const a = document.createElement("a");
            a.href = link;
            a.textContent = link;
            a.target = "_blank";
            li.appendChild(a);
            ul.appendChild(li);
        });

        categoryDiv.appendChild(ul);
        linkCollection.appendChild(categoryDiv);
    }
}

form.addEventListener("submit", (event) => {
    event.preventDefault(); // Prevent standard behavior

    const url = document.getElementById("linkURL").value;
    const category = document.getElementById("categorySelect").value;

    if (!links[category]) {
        links[category] = []; // Create a category 
    }

    links[category].push(url); // Add link in correct category

    form.reset();
    renderLinks();
});