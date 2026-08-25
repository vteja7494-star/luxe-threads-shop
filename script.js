const detailsButtons = document.querySelectorAll(".dress-card button");

detailsButtons.forEach((button, index) => {
  button.addEventListener("click", () => {
    const products = [
      {
        name: "Midnight Elegance",
        price: "₹4,999",
        description: "A timeless evening dress designed for elegant nights."
      },
      {
        name: "Golden Evening",
        price: "₹6,499",
        description: "Luxury style with a sophisticated golden touch."
      },
      {
        name: "Royal Noir",
        price: "₹7,999",
        description: "Bold. Elegant. Made for the spotlight."
      }
    ];

    const product = products[index];

    alert(
      product.name +
      "\n\nPrice: " + product.price +
      "\n\n" + product.description
    );
  });
});
