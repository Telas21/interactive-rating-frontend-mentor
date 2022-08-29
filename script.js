const submitButton = document.querySelector("#submitButton");
const ratingButtons = document.querySelectorAll('input[name="rating"]');

var ratingCard = document.getElementById("ratingStateCard");
var thankYouCard = document.getElementById("thankYouStateCard");

var selectedScore = document.getElementById("selectedScore");

submitButton.addEventListener("click", () => {
  let selectedRating = NaN;
  for (const ratingButton of ratingButtons) {
    if (ratingButton.checked) {
      selectedRating = ratingButton.value;
      break;
    }
  }

  if (isNaN(selectedRating)) {
    alert("You haven't selected any rating");
  } else {
    selectedScore.innerHTML = selectedRating;
    ratingCard.style.display = "none";
    thankYouCard.style.display = "block";
  }
});
