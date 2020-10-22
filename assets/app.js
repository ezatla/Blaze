// Put your application javascript here

// Product list slider
window.addEventListener("load", function () {
  let splide = new Splide(".splide", {
    type: "loop",
    // rewind: true,
    perPage: 4,
    perMove: 1,
    gap: "1rem",
    focus: "center",
    breakpoints: {
      640: {
        perPage: 2,
        gap: "1rem",
      },
      480: {
        perPage: 1,
        gap: "1rem",
      },
    },
  });

  splide.mount();
});

// Product Page Slider

document.addEventListener("DOMContentLoaded", function () {
  // Create and mount the thumbnails slider.
  let secondarySlider = new Splide("#secondary-slider", {
    rewind: true,
    fixedWidth: 100,
    fixedHeight: 64,
    isNavigation: true,
    gap: 10,
    focus: "center",
    pagination: false,
    arrows: true,
    cover: true,
    breakpoints: {
      600: {
        fixedWidth: 66,
        fixedHeight: 40,
      },
    },
  }).mount();

  // Create the main slider.
  let primarySlider = new Splide("#primary-slider", {
    type: "fade",
    // heightRatio: 1,
    // pagination: false,
    arrows: false,
    // focus: "center",
    // cover: true,
  });

  // Set the thumbnails slider as a sync target and then call mount.
  primarySlider.sync(secondarySlider).mount();

});
