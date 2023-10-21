const ratingContainer = document.getElementsByClassName("number-container");
const ratingsCircles = document.getElementsByClassName("rating-circle");
const submitBtn = document.getElementById("btn");

for (let i = 0; i < ratingsCircles.length; i++) {
  ratingsCircles[i].addEventListener("click", function () {
    const current = document.getElementsByClassName("active");

    if (current.length > 0) {
      current[0].classList.remove("active");
    }
    this.classList.add("active");
  });
}

submitBtn.addEventListener("click", () => {
  const activeRating = document.getElementsByClassName("active")[0];
  if (activeRating) {
    const url = "https://golden-beijinho-6dce8d.netlify.app//thank-you.html";
    const searchParams = new URLSearchParams(window.location.search);
    searchParams.set("rating", activeRating.id);
    window.location.href = url + "?" + searchParams.toString();
  }
});
