function getData() {
  fetch(
    "https://my-json-server.typicode.com/horizon-code-academy/fake-movies-api/movies"
  )
    .then((res) => res.json())
    .then((data) => loadData(data));
}
getData();

const input = document.querySelector("input");

function loadData(data) {
  for (let photoData of data) {
    input.addEventListener("input", function (e) {
      const getCard = document.querySelector(".card");
      getCard.innerHTML += ` <img src=${photoData.Poster} class="card-img-top" alt="..." />
      <div class="card-body">
        <h5 class="card-title">${photoData.Title}</h5>
        <p class="card-text">
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </p>
        <a href="#" class="btn btn-primary">Go somewhere</a>
      </div> `;
    });
  }
}
// 21 number ta ses korte hobe
