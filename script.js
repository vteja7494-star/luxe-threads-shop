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

detailButtons.forEach((button, index) => {

  button.addEventListener("click", () => {

    const product = products[index];

    productName.textContent = product.name;
    productPrice.textContent = product.price;
    description.textContent = product.description;

    modal.classList.add("active");
  });

});

closeButton.addEventListener("click", () => {
  modal.classList.remove("active");
});

modal.addEventListener("click", (event) => {

  if (event.target === modal) {
    modal.classList.remove("active");
  }

});

document.querySelectorAll(".sizes button").forEach((sizeButton) => {

  sizeButton.addEventListener("click", () => {

    document.querySelectorAll(".sizes button").forEach((button) => {
      button.style.background = "transparent";
      button.style.color = "#111";
    });

    sizeButton.style.background = "#111";
    sizeButton.style.color = "#fff";

  });

});

buyButton.addEventListener("click", () => {

  alert(
    "Thank you for choosing VÉLORA!\n\n" +
    "Your selected product is ready to order."
  );

});
