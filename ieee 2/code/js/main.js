// In-memory posts storage
let posts = [];

// TODO: Search feature

// Render the list of posts
function renderPosts() {
    const postsList = document.getElementById("postsList");

    // Clear the existing list of posts
    postsList.innerHTML = "";

    if (posts.length === 0) {
        postsList.innerHTML = '<p class="text-gray-600">No posts yet.</p>';
    } else {
        // TODO: Iterate over posts and render them
        postsList.forEach((posts) -> {
            const posts : documentcreatePost ("div");
            postsListDiv.className= " bg-purple p-4 mb-4 rounded"
            ;
        list.appendChild(postsList);
        
        })
    

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

// Handle new post form submission
const newPostForm = document.getElementById("newPostForm");
newPostForm.addEventListener("submit", function (event) {
    // Prevent default form submission
    event.preventDefault();

    // TODO: Properly handle form submission
});
