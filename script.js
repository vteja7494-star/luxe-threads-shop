document.addEventListener("DOMContentLoaded", function () {

  const products = [
    {
      name: "Midnight Elegance",
      price: "₹4,999",
      description: "Elegant evening wear designed for a beautiful night."
    },
    {
      name: "Golden Evening",
      price: "₹6,499",
      description: "A luxurious evening dress made for unforgettable moments."
    },
    {
      name: "Royal Noir",
      price: "₹7,999",
      description: "Bold. Elegant. Made for the spotlight."
    }
  ];

  const modal = document.getElementById("productModal");
  const closeButton = document.getElementById("closeProduct");
  const productName = document.getElementById("productName");
  const productPrice = document.getElementById("productPrice");
  const description = document.querySelector(".product-description");
  const buyButton = document.getElementById("buyNow");

  const detailButtons = document.querySelectorAll(".dress-card button");

  detailButtons.forEach(function (button, index) {

    button.addEventListener("click", function () {

      const product = products[index];

      productName.textContent = product.name;
      productPrice.textContent = product.price;
      description.textContent = product.description;

      modal.classList.add("active");

    });

  });

  closeButton.addEventListener("click", function () {
    modal.classList.remove("active");
  });

  modal.addEventListener("click", function (event) {
    if (event.target === modal) {
      modal.classList.remove("active");
    }
  });

  const sizeButtons = document.querySelectorAll(".sizes button");

  sizeButtons.forEach(function (button) {

    button.addEventListener("click", function () {

      sizeButtons.forEach(function (item) {
        item.style.background = "transparent";
        item.style.color = "#111";
      });

      button.style.background = "#111";
      button.style.color = "#fff";

    });

  });

  buyButton.addEventListener("click", function () {

    alert(
      "Thank you for choosing VÉLORA!\n\nYour selected product is ready to order."
    );

  });

});
