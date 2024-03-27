const MoviesList = document.querySelector(".movies_list");

for (const cards of movies) {
  // itemlarni yaratish
const MoviesItem = document.createElement("li");

const MoviesImages = document.createElement("img");
const MoviesName = document.createElement("h2");
const Moviesdiv = document.createElement("div");
const MoviesStarImg = document.createElement("img");
const MoviesStarText = document.createElement("p");
const MoviesYearImg = document.createElement("img");
const MoviesYearText = document.createElement("p");
const MoviesClockImg = document.createElement("img");
const MoviesClockText = document.createElement("p");
const MoviesCategories = document.createElement("p");
const MoviesButton = document.createElement("button");


// class berish
MoviesItem.classList.add("movies_list_item");
Moviesdiv.classList.add("item-div");
MoviesButton.classList.add("item-btn");

// ma'lumotlarni kiritish
// MoviesImages.src = cards.ImageURL;
MoviesImages.src = "../images/IMG_20210409_083146_111.jpg"
MoviesImages.style.width = "300px"
MoviesImages.style.height = "200px"
MoviesName.textContent = cards.Title;
MoviesStarImg.src = "../images/star.svg";
MoviesStarText.textContent = cards.imdb_rating;
MoviesYearImg.src = "../images/calendar-clock.svg";
MoviesYearImg.style.width = "20px";
MoviesYearImg.style.height = "20px";
MoviesYearText.textContent = cards.movie_year;
MoviesClockImg.src = "../images/clock.svg";
MoviesClockImg.style.width = "20px";
MoviesClockImg.style.height = "20px";
MoviesClockText.textContent = `${(cards.runtime/60).toFixed(0)} hs ${cards.runtime%60} min`;
MoviesCategories.textContent = cards.Categories;
MoviesButton.textContent = "More info";





// list ichiga joylash
Moviesdiv.appendChild(MoviesStarImg);
Moviesdiv.appendChild(MoviesStarText);
Moviesdiv.appendChild(MoviesYearImg);
Moviesdiv.appendChild(MoviesYearText);
Moviesdiv.appendChild(MoviesClockImg);
Moviesdiv.appendChild(MoviesClockText);

MoviesItem.appendChild(MoviesImages);
MoviesItem.appendChild(MoviesName);
MoviesItem.appendChild(Moviesdiv);
MoviesItem.appendChild(MoviesCategories);
MoviesItem.appendChild(MoviesButton);


MoviesList.appendChild(MoviesItem);

}