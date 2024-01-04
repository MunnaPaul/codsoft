// script.js

function showmovieDetails(title, genres, leadActor, leadActress) {
    const movieInfoContainer = document.getElementById("movie-info");
    movieInfoContainer.innerHTML = `<h2>${title}</h2>
                                   <p><strong>Genres:</strong> ${genres}</p>
                                   <p><strong>Lead Actor:</strong> ${leadActor}</p>
                                   <p><strong>Lead Actress:</strong> ${leadActress}</p>`;

    // Show the movie details section
    const movieDetailsSection = document.getElementById("movie-details");
    movieDetailsSection.style.display = "block";
}

function hidemovieDetails() {
    // Hide the drama details section
    const movieDetailsSection = document.getElementById("movie-details");
    movieDetailsSection.style.display = "none";
}
