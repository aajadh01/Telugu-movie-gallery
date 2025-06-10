function showMovieAlert(title) {
  alert("You clicked on: " + title);
}

function suggestRandomMovie() {
  const movies = ["Lucky Baskhar", "Snehithudu", "Rakshasudu", "Jersey", "Sita Ramam" , "Rangasthalam", "Geetha Govindam" , "Hi Nanna"];
  const index = Math.floor(Math.random() * movies.length);
  alert("🎬 Suggested Movie: " + movies[index]);
}
