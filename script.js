document.addEventListener("DOMContentLoaded", function () {

  /* =========================
     PRODUCT DETAILS
  ========================= */

  const products = [
    {
      name: "Royal Noir",
      price: "₹7,999"
    },
    {
      name: "Midnight Black",
      price: "₹3,999"
    },
    {
      name: "Royal Blue",
      price: "₹4,499"
    },
    {
      name: "Urban Black",
      price: "₹4,999"
    }
  ];

  const modal = document.getElementById("productModal");
  const productName = document.getElementById("productName");
  const productPrice = document.getElementById("productPrice");
  const closeProduct = document.getElementById("closeProduct");
  const buyNow = document.getElementById("buyNow");

  const detailButtons = document.querySelectorAll(
    ".details-btn, [data-detail], .view-btn"
  );

  let selectedProduct = null;

  /* VIEW DETAILS */

  detailButtons.forEach(function (button, index) {

    button.addEventListener("click", function () {

      const product = products[index];

      if (!product) {
        return;
      }

      selectedProduct = product;

      if (productName) {
        productName.textContent = product.name;
      }

      if (productPrice) {
        productPrice.textContent = product.price;
      }

      if (modal) {
        modal.classList.add("active");
      }

    });

  });


  /* CLOSE MODAL */

  if (closeProduct) {
    closeProduct.addEventListener("click", function () {
      if (modal) {
        modal.classList.remove("active");
      }
    });
  }


  /* CLICK OUTSIDE MODAL */

  if (modal) {
    modal.addEventListener("click", function (event) {

      if (event.target === modal) {
        modal.classList.remove("active");
      }

    });
  }


  /* SIZE SELECTION */

  const sizeButtons = document.querySelectorAll(".sizes button");

  sizeButtons.forEach(function (button) {

    button.addEventListener("click", function () {

      sizeButtons.forEach(function (btn) {
        btn.classList.remove("active");
      });

      button.classList.add("active");

    });

  });


  /* BUY NOW */

  if (buyNow) {

    buyNow.addEventListener("click", function () {

      if (!selectedProduct) {

        selectedProduct = {
          name: productName
            ? productName.textContent.trim()
            : "Product",

          price: productPrice
            ? productPrice.textContent.trim()
            : "₹0"
        };

      }

      const selectedSize = document.querySelector(
        ".sizes button.active"
      );

      const size = selectedSize
        ? selectedSize.textContent.trim()
        : "Not selected";

      alert(
        "Product: " +
        selectedProduct.name +
        "\nPrice: " +
        selectedProduct.price +
        "\nSize: " +
        size
      );

    });

  }

});
