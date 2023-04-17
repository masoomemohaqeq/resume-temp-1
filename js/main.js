window.onload = function () {
  const docEl = document.documentElement;

  new Swiper(".servicesSwiper", {
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

  new Swiper(".testimonialsSwiper", {
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
        if (docEl.getAttribute("data-bs-theme") == "dark")
          this.navbarEl.style.backgroundColor = "#21262d";
        else this.navbarEl.style.backgroundColor = "white";

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

  // portfolio effects
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
    [...portfolioCatImgEls].forEach((image) => {
      image.classList.add("animate__zoomIn");
      image.classList.remove("animate__zoomOut");
      image.classList.add("d-block");
      image.classList.remove("d-none");
    });
  });

  // portfolio modals
  [...document.querySelectorAll("[data-bs-target='#portfolioModal']")].forEach(
    (imgContainer) => {
      imgContainer.addEventListener("click", () => {
        document.querySelector("#portfolioModal img").src =
          imgContainer.dataset.imgSrc;
      });
    }
  );

  [...document.querySelectorAll("[data-color-mode]")].forEach((btn) => {
    btn.addEventListener("click", () => {
      if (btn.dataset.colorMode == "dark") {
        docEl.setAttribute("data-bs-theme", "light");
      } else {
        docEl.setAttribute("data-bs-theme", "dark");
      }
    });
  });
};

AOS.init();
