document.addEventListener("DOMContentLoaded", function () {

  const products = [
    {
      name: "Midnight Elegance",
      price: "₹4,999"
    },
    {
      name: "Golden Evening",
      price: "₹6,499"
    },
    {
      name: "Royal Noir",
      price: "₹7,999"
    }
  ];

  const modal = document.getElementById("productModal");
  const closeButton = document.getElementById("closeProduct");

  const productName = document.getElementById("productName");
  const productPrice = document.getElementById("productPrice");

  const buyButton = document.getElementById("buyNow");

  const detailButtons =
    document.querySelectorAll(".details-btn");

  const bagButton =
    document.getElementById("bagBtn");

  let selectedProduct = null;


  /* VIEW DETAILS */

  detailButtons.forEach(function (button, index) {

    button.addEventListener("click", function () {

      selectedProduct = products[index];

      productName.textContent =
        selectedProduct.name;

      productPrice.textContent =
        selectedProduct.price;

      modal.classList.add("active");

    });

  });


  /* CLOSE */

  closeButton.addEventListener("click", function () {
    modal.classList.remove("active");
  });
// SIZE SELECTION

const sizeButtons = modal.querySelectorAll(".sizes button");

sizeButtons.forEach(function (button) {
  button.addEventListener("click", function () {

    sizeButtons.forEach(function (btn) {
      btn.classList.remove("active");
    });

    button.classList.add("active");

  });
});
/* BUY NOW */

buyButton.addEventListener("click", function () {

  if (!selectedProduct) {
    alert("Please select a product.");
    return;
  }

  const sizeButtons = Array.from(
    modal.querySelectorAll("button")
  ).filter(button =>
    ["S", "M", "L", "XL"].includes(button.textContent.trim())
  );

  const selectedSizeButton = sizeButtons.find(button =>
    button.classList.contains("active")
  );

  const selectedSize = selectedSizeButton
    ? selectedSizeButton.textContent.trim()
    : "";

  if (!selectedSize) {
    alert("Please select a size.");
    return;
  }

  localStorage.setItem(
    "veloraProduct",
    JSON.stringify({
      name: selectedProduct.name,
      price: selectedProduct.price,
      size: selectedSize
    })
  );

  window.location.href =
    "./checkout.html?name=" +
    encodeURIComponent(selectedProduct.name) +
    "&price=" +
    encodeURIComponent(selectedProduct.price) +
    "&size=" +
    encodeURIComponent(selectedSize);
});

  /* BAG */

  bagButton.addEventListener("click", function () {

    const savedProduct =
      localStorage.getItem("veloraProduct");

    if (savedProduct) {

      const product =
        JSON.parse(savedProduct);

      alert(
        "🛍️ YOUR BAG\n\n" +
        product.name +
        "\n" +
        product.price
      );

    } else {

      alert("Your VÉLORA bag is empty.");

    }

  });

})const searchButton = document.getElementById("searchBtn");

searchButton.addEventListener("click", function () {
  const query = prompt("Search product:");

  if (!query) return;

  const cards = document.querySelectorAll(".dress-card");
  let found = false;

  cards.forEach(function (card) {
    const text = card.innerText.toLowerCase();
    const match = text.includes(query.toLowerCase());

    card.style.display = match ? "" : "none";

    if (match) found = true;
  });

  if (!found) {
    alert("Product not found.");
  }
});;
