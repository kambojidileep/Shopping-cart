let updatecart = document.querySelector(".navcart");
let count = parseInt(document.querySelector(".navcart").innerText);
let allProducts = JSON.parse(localStorage.allproducts);
let storedProducts = JSON.parse(localStorage.products);
updatecart.textContent = storedProducts.length;

let finalcart = [];

storedProducts.map((el) => {
  allProducts.map((product) => {
    if (product.id == el) {
      finalcart.push(product);
    }
  });
});

for (let record of finalcart) {
  let cartItem = document.createElement("div");
  cartItem.setAttribute("class", "cart");

  let cartCard = document.createElement("div");

  cartCard.setAttribute("class", "card");

  let cartImage = document.createElement("img");
  cartImage.setAttribute("src", record.imageURL);
  cartImage.setAttribute("alt", record.name);
  cartImage.setAttribute("height", "150px");
  cartImage.setAttribute("class", "card-img-top");
  cartImage.setAttribute("class", "card__product-img");

  cartCard.append(cartImage);

  let cartCardBody = document.createElement("div");
  cartCardBody.setAttribute("class", "card-body");

  // title
  let cartTitle = document.createElement("h5");
  cartTitle.setAttribute("class", "card-title");
  cartTitle.innerHTML = record.name;
  cartCardBody.append(cartTitle);

  let price = document.createElement("h4");
  price.setAttribute("class", "price");
  price.innerHTML = "Rs." + record.price;

  cartCard.append(cartCardBody);
  cartCard.append(price);
  cartItem.append(cartCard);
  console.log("iterating");

  document.querySelector("#cartlist").append(cartItem);
}
if (storedProducts.length > 0) {
  let checkOut = document.createElement("div");
  checkOut.setAttribute("class", "checkOut");

  let btn = document.createElement("button");
  btn.setAttribute("class", "btn");
  btn.innerText = "Check Out";
  checkOut.append(btn);
  document.querySelector("#cartlist").append(checkOut);
}
