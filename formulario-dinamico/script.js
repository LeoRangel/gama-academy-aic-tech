let result = document.querySelector("#result");

let formData = document.querySelector("#form_data");

let allInputs = document.querySelector("#inputs");

let brands = document.querySelector("#brands");

let loader = `<div><h1>Carregando...</h1></div>`;

function getAllCars() {
  result.innerHTML = loader;
  fetch("https://e-carros-api.herokuapp.com/adverts")
    .then((res) => res.json())
    .then((response) => {
      result.innerHTML = `${response
        .map(
          (elemento, index) =>
            `
            <div class="col-md-4">
            <div key="${index}" class="card">
              <img src="${elemento.photos[0]}" class="card-img-top" alt="" height="200">
              <div class="card-body">
                <h5 class="card-title">${elemento.model}</h5>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" class="btn btn-warning">Ver mais</a>
              </div>
            </div>
            </div>
          `
        )
        .join("")}`;
    });
}

getAllCars();

function getBrands() {
  brands.innerHTML = loader;
  fetch("https://e-carros-api.herokuapp.com/brands")
    .then((res) => res.json())
    .then((response) => {
      brands.innerHTML = `${response
        .map(
          (element, index) =>
            `
            <center key="${index}">
              <img src="${element.logo}"  width="80px" heigth="auto"/>
              <p> ${element.name} </p>

            </center>
          `
        )
        .join("")}`;
    });
}

getBrands();

function getColors() {
  fetch("https://e-carros-api.herokuapp.com/colors")
    .then((res) => res.json())
    .then((result) => {
      allInputs.innerHTML = `${result
        .map(
          (el, index) =>
            `
            <div class="form-check">
              <label class="form-check-label" for="flexRadioDefault${index}">
                <input key="${index}" class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault${index}" value="${el}">
                ${el}
              </label>
            </div>
          `
        )
        .join("")}`;
    });
}

getColors();

formData.addEventListener("submit", (e) => {
  e.preventDefault();
  result.innerHTML = loader;

  let colors = document.querySelectorAll('input[value][type="radio"]:checked');

  let colorsSelected = [];

  colors.forEach((element) => {
    colorsSelected.push(element.value);
  });

  fetch(
    `https://e-carros-api.herokuapp.com/adverts?${
      colorsSelected.length > 0 && `color=${colorsSelected}`
    }`
  )
    .then((res) => res.json())
    .then((response) => {
      result.innerHTML = `${response.map(
        (elemento, index) =>
          `
          <div class="col-md-4">
          <div key="${index}" class="card">
            <img src="${elemento.photos[0]}" class="card-img-top" alt="" height="200">
            <div class="card-body">
              <h5 class="card-title">${elemento.model}</h5>
              <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <a href="#" class="btn btn-warning">Ver mais</a>
            </div>
          </div>
          </div>
        `
      )}`;
    });
});
