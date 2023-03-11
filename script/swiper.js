var swiper = new Swiper(".tech-section__banner__swiper", {
    direction: "vertical",
    enabled: false,
  navigation: {
    nextEl: ".tech-section__banner-btn-next",
    prevEl: ".tech-section__banner-btn-prev",
  },
  breakpoints: {
    575.98: {
        enabled: true,
    },
}  
});
var swiper = new Swiper(".tech-section__firms__swiper", {
  navigation: {
    nextEl: ".tech-section__firms-btn-next",
    prevEl: ".tech-section__firms-btn-prev",
  },
});
var swiper = new Swiper(".main__contacts__swiper", {
  navigation: {
    nextEl: ".main__contacts-btn-next",
    prevEl: ".main__contacts-btn-prev",
  },
});
var swiper = new Swiper(".process-section__stages-swiper", {
  navigation: {
    nextEl: ".stages-btn-next",
    prevEl: ".stages-btn-prev",
  },
});
var swiper = new Swiper(".bottom-section__cards-swiper", {
  navigation: {
    nextEl: ".cards__btn-next",
    prevEl: ".cards__btn-prev",
  },
});