const searchParams = new URLSearchParams(window.location.search);

const ratingMessageSpan = document.getElementsByClassName("rating-message")[0];
const rating = searchParams.get("rating");

ratingMessageSpan.innerText = `You selected ${rating} out of 5`;
