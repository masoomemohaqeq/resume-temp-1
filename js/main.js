window.onload = function () {
  var swiper = new Swiper(".servicesSwiper", {
    slidesPerView: 1,
    spaceBetween: 10,
    navigation: {
      nextEl: ".sw-btn-next",
      prevEl: ".sw-btn-prev",
    },
    breakpoints: {
      640: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 40,
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 40,
      },
    },
  });

  var swiper = new Swiper(".testimonialsSwiper", {
    slidesPerView: 1,
    spaceBetween: 10,
    navigation: {
      nextEl: ".sw-btn-next",
      prevEl: ".sw-btn-prev",
    },
    breakpoints: {
      640: {
        slidesPerView: 1,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 1,
        spaceBetween: 40,
      },
      1024: {
        slidesPerView: 2,
        spaceBetween: 40,
      },
    },
  });

  const navbar = {
    isOpen: false,
    navbarEl: document.querySelector("#navbar"),
    check: function () {
      if (
        document.body.scrollTop > 70 ||
        document.documentElement.scrollTop > 70 ||
        (screen.width <= 768 && this.isOpen)
      ) {
        this.navbarEl.style.backgroundColor = "white";
        this.navbarEl.style.boxShadow = "0 0 0.5rem rgba(0, 0, 0, 0.075)";
      } else {
        this.navbarEl.style.backgroundColor = "transparent";
        this.navbarEl.style.boxShadow = "none";
      }
    },
    showEvent: function () {
      navbar.isOpen = true;
      navbar.check();
    },
    hiddenEvent: function () {
      navbar.isOpen = false;
      navbar.check();
    },
  };

  window.onscroll = function () {
    navbar.check();
  };

  navbar.navbarEl.addEventListener("show.bs.collapse", (event) => {
    navbar.showEvent();
  });

  navbar.navbarEl.addEventListener("hidden.bs.collapse", (event) => {
    navbar.hiddenEvent();
  });

  const portfolioCatEls = document.querySelectorAll("[data-cat]");
  const portfolioCatAllEl = document.querySelector("[data-cat='all']");
  const portfolioCatImgEls = document.querySelectorAll("[data-cat-img]");

  [...portfolioCatEls].forEach((category) => {
    category.addEventListener("click", () => {
      [...portfolioCatEls].forEach((el) => {
        el.classList.remove("text-primary");
      });

      category.classList.add("text-primary");

      [...portfolioCatImgEls].forEach((image) => {
        if (category.dataset.cat != "all") {
          if (image.dataset.catImg === category.dataset.cat) {
            image.classList.add("animate__zoomIn");
            image.classList.remove("animate__zoomOut");
            image.classList.add("d-block");
            image.classList.remove("d-none");
          } else {
            image.classList.add("animate__zoomOut");
            image.classList.remove("animate__zoomIn");
            image.classList.add("d-none");
            image.classList.remove("d-block");
          }
        }
      });
    });
  });

  portfolioCatAllEl.addEventListener("click", () => {
    setTimeout(
      [...portfolioCatImgEls].forEach((image) => {
        image.classList.remove("animate__zoomIn");
        image.classList.remove("animate__zoomOut");
        image.classList.add("d-block");
        image.classList.remove("d-none");
      }),
      5000
    );
  });
};
