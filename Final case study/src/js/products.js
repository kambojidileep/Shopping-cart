let allProducts;
let cart = [];

function FetchProducts() {
  return fetch(
    "https://331c90c7-1c08-4239-b5f2-2c336ad83fdf.mock.pstmn.io/products"
  ).then((res) => res.json());
}

function DisplayProducts() {
  let productPromise = FetchProducts();
  productPromise
    .then((products) => {
      allProducts = products;
      localStorage.setItem("allproducts", JSON.stringify(allProducts));
      for (let eachproduct of allProducts) {
        ProductItem(eachproduct);
      }
    })
    .catch((err) => {
      console.log(err);
    });
}

function ProductItem(product) {
  let productItem = document.createElement("div");
  productItem.setAttribute("class", "col-md-3");
  productItem.setAttribute("class", "products");

  let productCard = document.createElement("div");
  productCard.setAttribute("class", product.id);
  productCard.setAttribute("class", "card m-1 p-2");
  productCard.setAttribute("class", "card");

  let productImage = document.createElement("img");
  productImage.setAttribute("src", product.imageURL);
  productImage.setAttribute("alt", product.name);
  productImage.setAttribute("height", "150px");
  productImage.setAttribute("class", "card-img-top");
  productImage.setAttribute("class", "card__product-img");

  productCard.append(productImage);

  let productCardBody = document.createElement("div");
  productCardBody.setAttribute("class", "card-body");

  // title
  let productTitle = document.createElement("h5");
  productTitle.setAttribute("class", "card-title");
  productTitle.innerHTML = product.name;
  productCardBody.append(productTitle);
  //description
  let productDescription = document.createElement("p");
  productDescription.setAttribute("class", "card-description");
  productDescription.innerHTML += product.description;
  productCardBody.append(productDescription);

  //price and button
  let priceButton = document.createElement("div");
  priceButton.setAttribute("class", "price__btn");

  //price
  let productPrice = document.createElement("h5");
  productPrice.setAttribute("class", "card-text");
  productPrice.innerHTML += "₹" + product.price;
  priceButton.append(productPrice);
  //productCardBody.append(productPrice);

  //product buy
  let productBuy = document.createElement("button");
  productBuy.setAttribute("class", "btn btn-danger mx-1 buy-now");
  productBuy.setAttribute("id", product.id);
  productBuy.innerHTML = '<button type="button" class="btn ">Buy Now</button>';
  productBuy.addEventListener("click", AddToCart);

  priceButton.append(productBuy);
  // productCardBody.append(productBuy);
  productCardBody.append(priceButton);
  productCard.append(productCardBody);
  productItem.append(productCard);

  document.querySelector("#productslist").append(productItem);
}

function AddToCart(e) {
  console.log(e.target.parentNode.id);
  cart.push(e.target.parentNode.id);
  let updatecart = document.querySelector(".navcart");
  let count = parseInt(document.querySelector(".navcart").innerText);
  count = count + 1;
  updatecart.textContent = count;
}

DisplayProducts();
