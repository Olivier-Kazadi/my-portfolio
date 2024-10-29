// main.js

document.addEventListener("DOMContentLoaded", () => {
    const username = "Olivier-Kazadi"; 
    const projectList = document.getElementById("projectList");

    async function fetchGitHubRepos() {
        try {
            const response = await fetch(`https://api.github.com/users/${username}/repos`);
            const repos = await response.json();

            repos.slice(0, 6).forEach(repo => {
                const repoCard = document.createElement("div");
                repoCard.className = "bg-white shadow-lg rounded-lg p-6 transform hover:scale-105 transition-transform duration-300";

                repoCard.innerHTML = `
                    <h3 class="text-2xl font-semibold mb-2 text-indigo-700">${repo.name}</h3>
                    <p class="text-gray-600 mb-4">${repo.description || "Pas de description"}</p>
                    <a href="${repo.html_url}" target="_blank" class="text-blue-500 hover:text-blue-700">Voir le projet</a>
                `;

                projectList.appendChild(repoCard);
            });
        } catch (error) {
            console.error("Erreur lors de la récupération des dépôts GitHub :", error);
            projectList.innerHTML = "<p class='text-gray-600'>Impossible de charger les projets.</p>";
        }
    }

    fetchGitHubRepos();
});
