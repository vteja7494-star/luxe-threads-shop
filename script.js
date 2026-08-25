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


  /* BUY NOW */

  buyButton.addEventListener("click", function () {

    if (!selectedProduct) return;

    localStorage.setItem(
      "veloraProduct",
      JSON.stringify(selectedProduct)
    );

    window.location.href = "checkout.html";

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

});
