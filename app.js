const btnSubmit = document.getElementById("submitBtn");
var submitNote = document.getElementsByClassName("submit__note");
var inputsRating = document.getElementsByClassName("rating-button");

const screen_1 = document.getElementsByClassName("main__screen");
const screen_2 = document.getElementsByClassName("submit__screen");

let collectionRatingValues = [];

for (var i = 0; i < inputsRating.length; i++) {
  collectionRatingValues.push(inputsRating[i]);
}

collectionRatingValues.forEach((action) => {
  action.addEventListener("click", () => {
    const choice = action.getAttribute("value");
    screen_1[0].classList.add("hidden");
    screen_2[0].classList.remove("hidden");

    submitNote[0].innerHTML = `
    <span>You selected ${choice} out of ${collectionRatingValues.length}</span>
    `;
  });
});
