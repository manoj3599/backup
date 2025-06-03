import { fetchMovieAvailability, fetchMovieList } from "./api.js";
const loader = document.getElementById("loader");
const mainNode = document.getElementsByTagName("main")[0];

fetchMovieList().then(function (movies) {
  loader.remove();
  /*loader.style.display = "none"*/
  createMovieCardsUi(movies);
});

function createMovieCardsUi(movies) {
  const movieContainerNode = document.createElement("div");
  movieContainerNode.setAttribute("class", "movie-holder");
  let movieCardsHtml = "";

  for (let movie of movies) {
    const anchorTagNode = document.createElement("a");
    anchorTagNode.setAttribute("class", "movie-link");
    anchorTagNode.setAttribute("href", "#");
    anchorTagNode.innerHTML = `
    <div class="movie" data-d="${movie.name}">
            <div class="movie-img-wrapper" style="background-image: url('${movie.imgUrl}'); background-size: cover;"></div>
            <h4>${movie.name}</h4>
        </div>`;

    anchorTagNode.addEventListener("click", function () {
      showSeats(movie.name);
    });
    movieContainerNode.appendChild(anchorTagNode);
  }

  mainNode.appendChild(movieContainerNode);

  /*const movieCards = document.getElementsByClassName('movie-link')
  for(const movieCard of movieCards){
    movieCard.addEventListener('click', function(){
        console.log("hello")
    })
  }*/
}

function showSeats(movieName) {
  mainNode.appendChild(loader);
  fetchMovieAvailability(movieName).then(function (avalaibleSeats) {
    loader.remove();
    //removeVNoneClasses();
    createSeatsUi(avalaibleSeats);
  });
}

function createSeatsUi(avalaibleSeats) {
  const bookerGridHolderNode = document.getElementById("booker-grid-holder");
  bookerGridHolderNode.innerHTML = ""
  for (let i = 1; i <= 2; i++) {
    const bookingGridNode = document.createElement("div");
    bookingGridNode.setAttribute("class", "booking-grid");
    for (let j = ((i - 1) * 12) + 1; j <= i * 12; j++) {
      const bookingGridCellNode = document.createElement("div");
      bookingGridCellNode.innerHTML = j
      bookingGridCellNode.setAttribute("id", `booking-grid-${j}`);
      bookingGridCellNode.style.backgroundColor = avalaibleSeats.includes(j) ? 'green' : 'red'
      bookingGridNode.appendChild(bookingGridCellNode);
    }
    
    bookerGridHolderNode.appendChild(bookingGridNode);
  }
}

function removeVNoneClasses() {
  const vNoneNodes = [...document.getElementsByClassName("v-none")];
  for (const vNoneNode of vNoneNodes) {
    vNoneNode.removeAttribute("class");
  }
}
