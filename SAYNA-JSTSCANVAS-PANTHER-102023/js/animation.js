// JavaScript
document.addEventListener("DOMContentLoaded", function () {
    var elementsToAnimate = document.querySelectorAll(".animate-fade-in-left");
  
    function isElementInViewport(el) {
      var rect = el.getBoundingClientRect();
      return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
      );
    }
  
    function animateElements() {
      elementsToAnimate.forEach(function (element) {
        if (isElementInViewport(element)) {
          element.classList.add("fade-in-visible");
        }
      });
    }
  
    // Déclenchez l'animation lors du chargement initial de la page
    animateElements();
  
    // Déclenchez l'animation à chaque fois que la page est défilée
    window.addEventListener("scroll", animateElements);
  });
  