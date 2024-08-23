document.addEventListener('DOMContentLoaded', function () {
    const openPopupBtn = document.getElementById('openPopupBtn');
    const popupForm = document.getElementById('popupForm');
    const closeBtn = document.querySelector('.close-btn');

    openPopupBtn.addEventListener('click', function () {
        popupForm.style.display = 'flex';
    });

    closeBtn.addEventListener('click', function () {
        popupForm.style.display = 'none';
    });

    window.addEventListener('click', function (event) {
        if (event.target == popupForm) {
            popupForm.style.display = 'none';
        }
    });

     // Slideshow functionality
     let slideIndex = 0;
     showSlides();
 
     function showSlides() {
         const slides = document.querySelectorAll(".slide");
         const dots = document.querySelectorAll(".dot");
 
         for (let i = 0; i < slides.length; i++) {
             slides[i].style.display = "none";
         }
 
         slideIndex++;
         if (slideIndex > slides.length) {
             slideIndex = 1;
         }
 
         for (let i = 0; i < dots.length; i++) {
             dots[i].className = dots[i].className.replace(" active", "");
         }
 
         slides[slideIndex - 1].style.display = "block";
         dots[slideIndex - 1].className += " active";
 
         setTimeout(showSlides, 3000); // Change slide every 3 seconds
     }
});
