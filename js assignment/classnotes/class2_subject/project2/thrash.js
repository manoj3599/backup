import { fetchMovieAvailability, fetchMovieList } from "./api.js";

const loader = document.getElementById("loader");
const mainNode = document.getElementsByTagName('main')[0];

fetchMovieList().then(function(movies) {
    loader.remove();
    createMovieCardsUi(movies);
});

function createMovieCardsUi(movies) {
    const movieContainerNode = document.createElement('div');
    movieContainerNode.setAttribute("class", 'movie-holder');
    let movieCardsHtml = '';

    for (let movie of movies) {
        movieCardsHtml += `
        <a class="movie-link" href="#">
            <div class="movie" data-d="${movie.name}">
                <div class="movie-img-wrapper" style="background-image: url('${movie.imgUrl}'); background-size: cover;"></div>
                <h4>${movie.name}</h4>
            </div>
        </a>`;
    }

    movieContainerNode.innerHTML = movieCardsHtml;
    mainNode.appendChild(movieContainerNode);

    const movieLinks = document.querySelectorAll('.movie-link');
    movieLinks.forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault();
            const movieName = link.querySelector('.movie').dataset.d;
            showSeats(movieName);
        });
    });
}

function showSeats(movieName) {
    console.log(movieName);
}
