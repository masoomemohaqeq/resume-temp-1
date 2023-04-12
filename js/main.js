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
