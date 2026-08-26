document.addEventListener("DOMContentLoaded", function () {

const modal = document.getElementById("productModal");

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
    card.querySelector("h1, h2, h3, .name");

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
/* SEARCH */

if (searchButton) {
  searchButton.addEventListener("click", function () {

    const searchBox = document.createElement("div");
    searchBox.className = "search-popup";

    searchBox.innerHTML = `
      <button class="search-close">×</button>

      <h2>SEARCH</h2>

      <input
        type="text"
        id="searchInput"
        placeholder="Search products..."
      >

      <div id="searchResults"></div>
    `;

    document.body.appendChild(searchBox);

    const input = document.getElementById("searchInput");
    const results = document.getElementById("searchResults");

    input.addEventListener("input", function () {

      const value = input.value.toLowerCase().trim();

      results.innerHTML = "";

      if (!value) return;

      const matches = products.filter(function (product) {
        return product.name.toLowerCase().includes(value);
      });

      if (matches.length === 0) {
        results.innerHTML = "<p>No products found.</p>";
        return;
      }

      matches.forEach(function (product) {

        const item = document.createElement("div");

        item.innerHTML = `
          <strong>${product.name}</strong>
          <p>${product.price}</p>
        `;

        results.appendChild(item);
      });
    });

    searchBox
      .querySelector(".search-close")
      .addEventListener("click", function () {
        searchBox.remove();
      });
  });
}
/* VIEW DETAILS */

const detailButtons = document.querySelectorAll(
  ".details-btn, [data-detail], .view-btn"
);

detailButtons.forEach(function (button, index) {
  button.addEventListener("click", function () {
      selectedProduct = {
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
// LOGIN INTRO
const bagBtn = document.getElementById("bagBtn");
const loginIntro = document.querySelector(".login-intro");

if (bagBtn && loginIntro) {
  bagBtn.addEventListener("click", function () {
    loginIntro.classList.add("active");
  });
}
// LOGIN
const loginPanel = document.querySelector(".login-intro");
const loginButton = document.querySelector(".login-panel button");
const loginInputs = document.querySelectorAll(".login-panel input");

if (loginButton) {
  loginButton.addEventListener("click", function () {
    const email = loginInputs[0].value.trim();
    const password = loginInputs[1].value.trim();

    if (!email || !password) {
      alert("Please enter Email/Phone and Password.");
      return;
    }

    alert("Login successful! Welcome back to VÉLORA.");
    loginPanel.classList.remove("active");
  });
}
 /* PREMIUM BAG POPUP */

const bagButton = document.getElementById("bagBtn");

if (bagButton) {
  bagButton.addEventListener("click", function () {

    const saved = localStorage.getItem("veloraProduct");

    if (!saved) {
      alert("Your VÉLORA bag is empty.");
      return;
    }

    let product;

    try {
      product = JSON.parse(saved);
    } catch (error) {
      alert("Your VÉLORA bag is empty.");
      return;
    }

    const popup = document.createElement("div");
    popup.className = "bag-popup active";

    popup.innerHTML = `
      <button class="bag-close">×</button>

      <h2>YOUR BAG</h2>

      <p><strong>${product.name}</strong></p>
      <p>Price: ${product.price}</p>
      <p>Size: ${product.size || "Not selected"}</p>

      <button class="bag-checkout">
        CHECKOUT
      </button>
    `;

    document.body.appendChild(popup);

    const closeButton = popup.querySelector(".bag-close");

    closeButton.addEventListener("click", function () {
      popup.remove();
    });

    const checkoutButton = popup.querySelector(".bag-checkout");

    checkoutButton.addEventListener("click", function () {

  const checkout = document.createElement("div");
  checkout.className = "checkout-popup";

  checkout.innerHTML = `
    <button class="checkout-close">×</button>

    <h2>CHECKOUT</h2>

    <p class="checkout-product">
      ${product.name} — ${product.price}
    </p>

    <input type="text" placeholder="Full Name" id="customerName">

    <input type="tel" placeholder="Mobile Number" id="customerPhone">

    <textarea placeholder="Delivery Address" id="customerAddress"></textarea>

    <button class="place-order" id="placeOrder">
      PLACE ORDER
    </button>
  `;

  document.body.appendChild(checkout);

  checkout.querySelector(".checkout-close")
    .addEventListener("click", function () {
      checkout.remove();
    });

  checkout.querySelector("#placeOrder")
    .addEventListener("click", function () {

      const name = document.getElementById("customerName").value.trim();
      const phone = document.getElementById("customerPhone").value.trim();
      const address = document.getElementById("customerAddress").value.trim();

      if (!name || !phone || !address) {
        alert("Please fill all details.");
        return;
      }

      alert(
        "ORDER CONFIRMED!\n\n" +
        "Thank you, " + name + "!\n" +
        "Product: " + product.name + "\n" +
        "Price: " + product.price
      );

      checkout.remove();
    });
});
