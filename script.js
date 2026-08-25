
const cards = document.querySelectorAll(".dress-card");

const feed = document.querySelector(".fashion-feed");


/* First card active */

cards[0].classList.add("active");


/* Detect which dress is visible */

const observer = new IntersectionObserver(
  (entries) => {

    entries.forEach((entry) => {

      if (entry.isIntersecting) {

        cards.forEach((card) => {
          card.classList.remove("active");
        });

        entry.target.classList.add("active");

      }

    });

  },
  {
    threshold: 0.6
  }
);


cards.forEach((card) => {
  observer.observe(card);
});


/* Mobile swipe support */

let startY = 0;

let endY = 0;


feed.addEventListener("touchstart", (event) => {

  startY = event.touches[0].clientY;

});


feed.addEventListener("touchend", (event) => {

  endY = event.changedTouches[0].clientY;

  const distance = startY - endY;


  if (Math.abs(distance) < 50) {
    return;
  }


  if (distance > 0) {

    feed.scrollBy({
      top: window.innerHeight,
      behavior: "smooth"
    });

  } else {

    feed.scrollBy({
      top: -window.innerHeight,
      behavior: "smooth"
    });

  }

});
