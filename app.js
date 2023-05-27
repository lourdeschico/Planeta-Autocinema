document.addEventListener('DOMContentLoaded', function() {
  fetch('movies.json')
    .then(response => response.json())
    .then(data => {
      const moviesContainer = document.getElementById('movies-container');
      data.forEach(movie => {
        const movieContainer = document.createElement('div');
        movieContainer.classList.add('movie');
        const movieTitle = document.createElement('h2');
        movieTitle.textContent = movie.title;
        const moviePoster = document.createElement('img');
        moviePoster.src = movie.poster;
        moviePoster.alt = movie.title;
        const movieDescription = document.createElement('p');
        movieDescription.textContent = movie.description;
        movieContainer.appendChild(movieTitle);
        movieContainer.appendChild(moviePoster);
        movieContainer.appendChild(movieDescription);
        moviesContainer.appendChild(movieContainer);
      });
    })
    .catch(error => console.log(error));
});
