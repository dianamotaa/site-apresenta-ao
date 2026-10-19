// In-memory posts storage
let posts = [];

// Render the list of posts
function renderPosts(searchInput = "") {
    const postsList = document.getElementById("postsList");

    // Clear the existing list of posts
    postsList.innerHTML = "";

    let filteredPosts = posts;
    if (searchInput) {
        const lowerCaseSearch = searchInput.toLowerCase();
        filteredPosts = posts.filter((post) => {
            return post.title.toLowerCase().includes(lowerCaseSearch);
        });
    }

    if (filteredPosts.length === 0) {
        postsList.innerHTML = '<p class="text-gray-600">No posts yet.</p>';
    } else {
        filteredPosts.forEach((post) => {
            const postDiv = document.createElement("div");

            postDiv.className = "bg-white p-4 mb-4 rounded shadow";
            postDiv.innerHTML = `
                <h2 class="text-xl font-bold">${post.title}</h2>
                <p class="text-gray-700">${post.description}</p>
            `;

            postsList.appendChild(postDiv);
        });
    }
}

// Navigate between pages based on the URL hash
function navigate() {
    const hash = window.location.hash;
    const listingPage = document.getElementById("listingPage");
    const newPostPage = document.getElementById("newPostPage");

    if (hash === "#/new") {
        listingPage.classList.add("hidden");
        newPostPage.classList.remove("hidden");
    } else {
        newPostPage.classList.add("hidden");
        listingPage.classList.remove("hidden");
        renderPosts();
    }
}

window.addEventListener("hashchange", navigate);

// Run navigate on page load to render the initial page
navigate();

// Handle search input (live filtering)
const searchInput = document.getElementById("searchInput");
if (searchInput) {
    searchInput.addEventListener("input", (event) => {
        renderPosts(event.target.value);
    });
}

// Handle new post form submission
const newPostForm = document.getElementById("newPostForm");
newPostForm.addEventListener("submit", function (event) {
    // Prevent default form submission
    event.preventDefault();

    // Gather the form data
    const formData = new FormData(newPostForm);
    const title = formData.get("title");
    const description = formData.get("description");

    // Add the new post to the in-memory posts array
    posts.push({ title, description });

    // Clear the form fields
    newPostForm.reset();

    window.location.hash = "#/";
});
