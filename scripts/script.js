// Fetch from HTML
const form = document.getElementById("linkForm");
const linkCollection = document.getElementById("linkCollection");


const links = {};
const bookmarkedLinks = new Set();


// Function for rendering links
function renderLinks() {
    linkCollection.innerHTML = "";

    for (const category in links) {

        if (Object.hasOwn(links, category)) {
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


                const bookmarkButton = document.createElement("i");

                if (bookmarkedLinks.has(link)) {
                    bookmarkButton.className = "fa-solid fa-star";
                } else {
                    bookmarkButton.className = "fa-regular fa-star";
                }

                bookmarkButton.addEventListener("click", () => {
                    toggleBookmark(link, bookmarkButton);
                });

                li.appendChild(bookmarkButton);


                const removeButton = document.createElement("i");
                removeButton.className = "fa-solid fa-xmark";


                removeButton.addEventListener("click", () => {
                    removeLink(category, link);
                });

                li.appendChild(removeButton);
                ul.appendChild(li);
            });

            categoryDiv.appendChild(ul);
            linkCollection.appendChild(categoryDiv);
        }
    }

}

form.addEventListener("submit", (event) => {
    event.preventDefault(); // Prevent standard behavior

    const url = document.getElementById("linkURL").value;
    const category = document.getElementById("categorySelect").value;

    // Validation of URL
    if (!isUrlValid(url)) {
        errorMessage("Ange en giltig URL.");
        return;
    }

    if (!links[category]) {
        links[category] = []; // Create a category 
    }

    links[category].push(url); // Add link in correct category

    form.reset();
    renderLinks();
});

// Function for removing links
function removeLink(category, link) {
    links[category] = links[category].filter((storedLink) => storedLink !== link);

    // Deletes category if all links are removed
    if (links[category].length === 0) {
        delete links[category];
    }

    renderLinks();
}

// Function for bookmarking a link
function toggleBookmark(link, bookmarkButton) {
    if (bookmarkedLinks.has(link)) {
        bookmarkedLinks.delete(link);
        bookmarkButton.className = "fa-regular fa-star";
    } else {
        bookmarkedLinks.add(link);
        bookmarkButton.className = "fa-solid fa-star";
    }

    renderLinks();
}

// Function showing message when not putting in a valid URL
function errorMessage(message) {
    const errorMessage = document.createElement("div");
    errorMessage.className = "errorMessage";
    errorMessage.innerText = message;

    document.body.appendChild(errorMessage);

    // Set time for message to show
    setTimeout(() => {
        document.body.removeChild(errorMessage);
    }, 3000);
}




// Validation of URL
function isUrlValid(string) {
    try {
        const url = new URL(string);
        return ! !url;
    } catch (err) {
        return false;
    }
}