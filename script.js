const swiper = new Swiper('.slider-wrapper', {
    loop: true,
    spaceBetween: 25,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    breakpoints: {
        0: {
            slidesPerView: 1
        },
        768: {
            slidesPerView: 2
        },
        1024: {
            slidesPerView: 3
        },
    }
  });

  document.querySelector(".contact-us").addEventListener("click", function (e) {
    e.preventDefault();
    document.getElementById("contact").scrollIntoView({
        behavior: "smooth"
    });
});

document.querySelectorAll('.nav-link').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const targetId = this.getAttribute("href");
      document.querySelector(targetId).scrollIntoView({
          behavior: "smooth"
      });
  });
});

document.querySelector(".order-form").addEventListener("submit", function(event) {
  event.preventDefault();
  alert("Thank you for your order! We will contact you soon.");
  this.reset();
});

