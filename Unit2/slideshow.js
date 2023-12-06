document.addEventListener('DOMContentLoaded', function () {
  var titleElement = document.querySelector('h3');
  titleElement.addEventListener('dblclick', function () {
    startSlideshow();
  });
  function startSlideshow() {
    var slideIndex = 0;
    showSlides();
    function showSlides() {
      var i;
      var slides = document.getElementById('slideshow').getElementsByTagName('img');
      for (i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none';
      }
      slideIndex++;
      if (slideIndex > slides.length) {
        slideIndex = 1;
      }
      slides[slideIndex - 1].style.display = 'block';
	  setTimeout(showSlides, 3000);
    }
  }
});