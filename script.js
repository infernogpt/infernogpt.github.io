const username = "infernopluh"; // Replace with your GitHub username
const repoListElement = document.getElementById("repo-list");

async function fetchRepos() {
    try {
        const response = await fetch(`https://api.github.com/users/${username}/repos?sort=updated`);
        const repos = await response.json();

        if (repos.length) {
            repoListElement.innerHTML = repos
                .map(repo => createRepoCard(repo))
                .join("");
        } else {
            repoListElement.innerHTML = "<p>No repositories found.</p>";
        }
    } catch (error) {
        repoListElement.innerHTML = "<p>Failed to load repositories. Please try again later.</p>";
    }
}

function createRepoCard(repo) {
    return `
        <div class="repo-card">
            <h2>${repo.name}</h2>
            <p>${repo.description || "No description available."}</p>
            <a href="${repo.html_url}" target="_blank">View Repository</a>
        </div>
    `;
}

// Fetch the repositories on page load
fetchRepos();
