let navbar = document.querySelector('.header .navbar');
let menuBtn = document.querySelector('#menu-btn');

menuBtn.onclick = () => {
  menuBtn.classList.toggle('fa-times');
  navbar.classList.toggle('active');
};

document.addEventListener("DOMContentLoaded", function () {
    var swiper = new Swiper(".swiper-container", {
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      loop: true,
      centeredSlides:true,
      slidesPerView: 1,
      spaceBetween: 20,
    });

    var slideElements = document.getElementsByClassName("swiper-slide");         
    for (var i = 0; i < slideElements.length; i++) {
      slideElements[i].addEventListener("click", function () {
        // Tıklama işlemini burada ele alabilirsiniz
        console.log("Bir slayta tıklandı.");
      });
    }
  });

  var swiper = new Swiper(".parquet-slider", {
    grabCursor: true,
    loop: true,
    centeredSlides: true,
    spaceBetween: 20,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
        
      },
      700: {
        slidesPerView: 2,
        
      },
      1000: {
        slidesPerView: 3,

      },
    },
  });




  

  
  
  
  
  
  
  
  
  
  
  
  


  
  



















B
5

 
  




























  








