document.addEventListener("DOMContentLoaded", function () {
  // Add 'loaded' class to body when content is loaded
  document.body.classList.add("loaded");
});

$(window)
  .scroll(() => {
    const windscroll = $(document).scrollTop();
    console.log(windscroll);
    if (windscroll >= 100) {
      $("section").each(function (i) {
        if ($(this).position().top <= windscroll - -50) {
          $("nav").each(function () {
            $(this).find("li a.active-a").removeClass("active-a");
            $(this).find("li a").eq(i).addClass("active-a");
          });
          // $("nav li a.active-a").removeClass("active-a");
          // $("nav li a").eq(i).addClass("active-a");
        }
      });
    } else {
      $("nav").each(function () {
        $(this).find("li a.active-a").removeClass("active-a");
      });
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

  $("#nav-icon4").click(function () {
    $(this).toggleClass("open");

    if ($(this)[0].classList.value === "open") {
      $(".menu").addClass("visibility");
      setTimeout(function () {
        $(".menu").addClass("height-100vh");
      }, 100);
      setTimeout(function () {
        $(".menu ul").addClass("opacity");
      }, 350);
    } else {
      $(".menu ul").removeClass("opacity");

      setTimeout(function () {
        $(".menu").removeClass("height-100vh");
      }, 300);
      setTimeout(function () {
        $(".menu").removeClass("visibility");
      }, 500);
    }
  });

  $(".nav-link").click(function () {
    $(".menu ul").removeClass("opacity");

    setTimeout(function () {
      $(".menu").removeClass("height-100vh");
    }, 300);
    setTimeout(function () {
      $(".menu").removeClass("visibility");
      $("#nav-icon4").removeClass("open");
    }, 500);
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
