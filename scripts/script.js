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


        });


    }
}

