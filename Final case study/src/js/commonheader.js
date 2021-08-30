function commonheader() {
  let nav = document.createElement("nav");
  //div for logo and links
  let nav_Header = document.createElement("div");
  nav_Header.setAttribute("class", "header__nav");
  //logo div
  let nav_logo = document.createElement("div");
  nav_logo.setAttribute("class", "header__nav-logo");
  //logo img
  let logo_img = document.createElement("img");
  logo_img.src = "/static/images/logo.png";
  logo_img.setAttribute("class", "logo");
  logo_img.alt = "logo img";

  nav_logo.append(logo_img);

  let nav_links = document.createElement("div");
  nav_links.setAttribute("class", "header__nav-links");

  let home_link = document.createElement("a");
  home_link.href = "homepage.html";
  home_link.innerText = "Home";

  let products_link = document.createElement("a");
  products_link.href = "Products.html";
  products_link.innerText = "Products";

  nav_links.append(home_link);
  nav_links.append(products_link);

  nav_Header.append(nav_logo);
  nav_Header.append(nav_links);

  nav.append(nav_Header);

  let outer__div = document.createElement("div");
  let nav_login = document.createElement("div");
  nav_login.setAttribute("class", "header__nav-login");

  let sign_link = document.createElement("a");
  sign_link.href = "Signin.html";
  sign_link.innerText = "Signin";

  let register_link = document.createElement("a");
  register_link.href = "register.html";
  register_link.innerText = "Register";

  nav_login.append(sign_link);
  nav_login.append(register_link);

  let nav_cart = document.createElement("div");
  nav_cart.setAttribute("class", "header__nav-cart");

  let cart_span = document.createElement("span");
  cart_span.setAttribute("class", "cartSpnClass");

  let cart_link = document.createElement("a");
  cart_link.href = "cart.html";

  let cart_img = document.createElement("img");
  cart_img.src =
    "https://raw.githubusercontent.com/gautam-in/shopping-cart-assignment/0df6028eb9d9b295564ec4dad22265e56127655f/static/images/cart.svg";
  cart_img.setAttribute("class", "cart-logo");
  cart_img.alt = "cart img";
  cart_img.addEventListener("click", cartPage);
  cart_link.append(cart_img);
  cart_span.append(cart_link);

  let span_number = document.createElement("span");
  span_number.setAttribute("class", "navcart");
  span_number.innerText = 0;

  let span_items = document.createElement("span");
  span_items.innerText = "items";

  nav_cart.append(cart_span);
  nav_cart.append(span_number);
  nav_cart.append(span_items);

  outer__div.append(nav_login);
  outer__div.append(nav_cart);

  nav.append(outer__div);
  document.querySelector("#commonHeader").append(nav);
}

function cartPage() {
  localStorage.setItem("products", JSON.stringify(cart));
}
commonheader();
