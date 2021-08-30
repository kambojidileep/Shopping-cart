//categories
function FetchCategories() {
  return fetch(
    "https://66b6fc4a-5d86-4a52-aea8-27355a6ea66c.mock.pstmn.io/categories"
  ).then((res) => res.json());
}

function DisplayCategories() {
  let categoriePromise = FetchCategories();
  categoriePromise
    .then((Categories) => {
      allCategories = Categories;
      console.log(Categories);
      for (let eachCategories of allCategories) {
        console.log(eachCategories);
        CategorieItem(eachCategories);
      }
    })
    .catch((err) => {
      console.log(err);
    });
}
DisplayCategories();

function CategorieItem(categorie) {
  // let CategorieItem = document.createElement("div");
  // CategorieItem.setAttribute("class", "Categories-each");

  let CategorieCard = document.createElement("div");
  CategorieCard.setAttribute("class", "Categories-single");

  let categorieImage = document.createElement("img");
  categorieImage.setAttribute("src", categorie.imageUrl);
  categorieImage.setAttribute("alt", categorie.name);
  categorieImage.setAttribute("class", "card-img-top card__categorie-img");
  // categorieImage.setAttribute("class", "card__categorie-img");

  CategorieCard.append(categorieImage);

  let CategorieCardBody = document.createElement("div");
  CategorieCardBody.setAttribute("class", "card-body");

  // title
  let categorieTitle = document.createElement("h5");
  categorieTitle.setAttribute("class", "card-title");
  categorieTitle.innerHTML = categorie.name;
  CategorieCardBody.append(categorieTitle);

  //description
  let categorieDescription = document.createElement("p");
  categorieDescription.setAttribute("class", "card-description");
  categorieDescription.innerHTML += categorie.description;
  CategorieCardBody.append(categorieDescription);

  //categorie Explore
  let CategorieExplore = document.createElement("button");
  CategorieExplore.setAttribute("class", "btn btn-danger mx-1 explore");
  CategorieExplore.setAttribute("id", categorie.id);
  CategorieExplore.innerHTML = `<button type="button" class="btn ">Explore ${categorie.key}</button>`;
  CategorieExplore.addEventListener("click", ExploreCategories);

  CategorieCardBody.append(CategorieExplore);
  CategorieCard.append(CategorieCardBody);
  //CategorieItem.append(CategorieCard);

  document.querySelector("#categories").append(CategorieCard);
}

function ExploreCategories() {
  window.location.replace("products.html");
}
