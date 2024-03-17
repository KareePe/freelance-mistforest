document.addEventListener("DOMContentLoaded", function () {
  // Add 'loaded' class to body when content is loaded
  document.body.classList.add("loaded");
});

window.addEventListener("scroll", function () {
  const header = document.querySelector(".logo-restaurants");
  // console.log(window.pageYOffset);
  // if (window.pageYOffset >= 2200) {
  //   // When scrolled to the top, apply fixed position and width 100%
  //   header.style.position = 'fixed';
  // } else {
  //   // Reset styles when scrolled away from the top
  //   header.style.position = 'relative';
  // }
});

$(window)
  .scroll(() => {
    const windscroll = $(document).scrollTop();
    console.log(windscroll);
    if (windscroll >= 100) {
      $("section").each(function (i) {
        if ($(this).position().top <= windscroll - -50) {
          $("nav li a.active-a").removeClass("active-a");
          $("nav li a").eq(i).addClass("active-a");
        }
      });
    } else {
      $("nav li a.active-a").removeClass("active-a");
      // $("nav li a:first").addClass("active-a");
    }
  })
  .scroll();

$(document).ready(function () {
  //smoothscroll
  $('a[href^="#"]').on("click", function (e) {
    e.preventDefault();
    $(document).off("scroll");

    const target = this.hash,
      menu = target;
    $target = $(target);
    $("html, body")
      .stop()
      .animate(
        {
          scrollTop: $target.offset().top + 2,
        },
        500,
        "swing",
        function () {
          window.location.hash = target;
        }
      );
  });
});

const carousel = document.querySelector(".carousel");
const carouselInner = carousel.querySelector(".carousel-inner");
const dots = document.querySelectorAll(".dot");

let currentIndex = 0;

function showSlide(index) {
  const slideWidth = carousel.clientWidth;
  carouselInner.style.transform = `translateX(-${index * slideWidth}px)`;
  dots.forEach((dot, i) => {
    dot.classList.toggle("active", i === index);
  });
}

function nextSlide() {
  currentIndex = (currentIndex + 1) % dots.length;
  showSlide(currentIndex);
}

dots.forEach((dot, index) => {
  dot.addEventListener("click", () => {
    currentIndex = index;
    showSlide(currentIndex);
  });
});

setInterval(nextSlide, 3000); // Change slide every 3 seconds
