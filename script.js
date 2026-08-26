document.addEventListener("DOMContentLoaded", function () {

  const modal = document.querySelector(".modal");

  const closeButton =
    document.querySelector(".close-product") ||
    document.querySelector(".close-btn");

  const buyButton =
    document.getElementById("buyNow") ||
    document.querySelector(".buy-btn");

  const bagButton =
    document.getElementById("bagBtn") ||
    document.querySelector(".bag-btn");

  const searchButton =
    document.getElementById("searchBtn") ||
    document.querySelector(".search-btn");

  let selectedProduct = null;

  /* PRODUCT CARDS */

  const cards = Array.from(
    document.querySelectorAll(".dress-card")
  );

  const products = cards.map(function (card) {

    const nameEl =
      card.querySelector(".product-name") ||
      card.querySelector("h2, h3, .name");

    const priceEl =
      card.querySelector(".product-price") ||
      card.querySelector(".price");

    return {
      name: nameEl
        ? nameEl.textContent.trim()
        : "VÉLORA Product",

      price: priceEl
        ? priceEl.textContent.trim()
        : "₹0"
    };

  });


  /* VIEW DETAILS */

  const detailButtons = document.querySelectorAll(
  ".details-btn, [data-detail], .view-btn"
);

  detailButtons.forEach(function (button, index) {

    button.addEventListener("click", function () {

      selectedProduct = products[index] || {
        name: "Midnight Elegance",
        price: "₹4,999"
      };

      const productName =
        document.getElementById("productName");

      const productPrice =
        document.getElementById("productPrice");

      if (productName) {
        productName.textContent =
          selectedProduct.name;
      }

      if (productPrice) {
        productPrice.textContent =
          selectedProduct.price;
      }

      if (modal) {
        modal.classList.add("active");
      }

    });

  });


  /* CLOSE */

  if (closeButton && modal) {

    closeButton.addEventListener("click", function () {

      modal.classList.remove("active");

    });

  }


  /* SIZE SELECTION */

  const sizeButtons = modal
    ? Array.from(
        modal.querySelectorAll(".sizes button")
      )
    : Array.from(
        document.querySelectorAll(".sizes button")
      );


  sizeButtons.forEach(function (button) {

    button.addEventListener("click", function () {

      sizeButtons.forEach(function (btn) {

        btn.classList.remove("active");

      });

      button.classList.add("active");

    });

  });


  /* BUY NOW */

  if (buyButton) {

    buyButton.addEventListener("click", function () {

      if (!selectedProduct) {

        selectedProduct = {

          name:
            document
              .getElementById("productName")
              ?.textContent
              .trim() ||
            "Midnight Elegance",

          price:
            document
              .getElementById("productPrice")
              ?.textContent
              .trim() ||
            "₹4,999"

        };

      }


      const selectedSizeButton =
        sizeButtons.find(function (button) {

          return button.classList.contains("active");

        });


      if (!selectedSizeButton) {

        alert("Please select a size.");

        return;

      }


      const selectedSize =
        selectedSizeButton.textContent.trim();


      /* SAVE PRODUCT */

      localStorage.setItem(
        "veloraProduct",

        JSON.stringify({

          name: selectedProduct.name,

          price: selectedProduct.price,

          size: selectedSize

        })

      );


      /* GO TO CHECKOUT */

      const checkoutUrl =
        "checkout.html?name=" +
        encodeURIComponent(
          selectedProduct.name
        ) +

        "&price=" +
        encodeURIComponent(
          selectedProduct.price
        ) +

        "&size=" +
        encodeURIComponent(
          selectedSize
        );


      window.location.href =
        checkoutUrl;

    });

  }


  /* BAG */

  if (bagButton) {

    bagButton.addEventListener(
      "click",
      function () {

        const saved =
          localStorage.getItem(
            "veloraProduct"
          );


        if (!saved) {

          alert(
            "Your VÉLORA bag is empty."
          );

          return;

        }


        try {

          const product =
            JSON.parse(saved);


          alert(

            "🛍️ YOUR BAG\n\n" +

            product.name +

            "\n" +

            product.price +

            "\nSize: " +

            (product.size || "")

          );

        }

        catch (error) {

          alert(
            "Your VÉLORA bag is empty."
          );

        }

      }
    );

  }


  /* SEARCH */

  if (searchButton) {

    searchButton.addEventListener(
      "click",
      function () {

        const query =
          prompt("Search product:");


        if (!query) {

          return;

        }


        let found = false;


        cards.forEach(
          function (card) {

            const text =
              card.innerText.toLowerCase();


            const match =
              text.includes(
                query.toLowerCase()
              );


            card.style.display =
              match ? "" : "none";


            if (match) {

              found = true;

            }

          }
        );


        if (!found) {

          alert(
            "Product not found."
          );

        }

      }
    );

  }

});
