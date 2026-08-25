const products = [
  {
    name: "Midnight Elegance",
    price: "₹4,999",
    description: "Elegant evening wear designed for a beautiful night."
  },
  {
    name: "Golden Evening",
    price: "₹6,499",
    description: "A luxurious look with a timeless evening style."
  },
  {
    name: "Royal Noir",
    price: "₹7,999",
    description: "Bold. Elegant. Made for the spotlight."
  }
];

const buttons = document.querySelectorAll(".details-btn");

buttons.forEach((button, index) => {
  button.addEventListener("click", () => {
    const product = products[index];

    alert(
      product.name +
      "\n\n" +
      product.price +
      "\n\n" +
      product.description
    );
  });
});

const heartBtn = document.getElementById("heartBtn");

heartBtn.addEventListener("click", () => {
  heartBtn.textContent =
    heartBtn.textContent === "♡" ? "♥" : "♡";
});

const bagBtn = document.getElementById("bagBtn");

bagBtn.addEventListener("click", () => {
  alert("Your shopping bag is currently empty 🛍️");
});
