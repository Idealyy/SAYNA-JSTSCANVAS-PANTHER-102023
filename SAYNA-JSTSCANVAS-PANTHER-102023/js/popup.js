// script.js
var popup = document.getElementById("popup");
var envoyerButton = document.getElementById("envoyer");
var okButton = document.getElementById("okButton");

envoyerButton.addEventListener("click", function() {
  // Affiche la boîte de dialogue (popup)
  popup.style.display = "block";
});

popup.addEventListener("click", function(event) {
  // Ferme le popup si l'utilisateur clique en dehors du contenu
  if (event.target === popup) {
    popup.style.display = "none";
    // Actualise la page après que le popup ait été fermé
    location.reload();
  }
});

okButton.addEventListener("click", function() {
  // Masque la boîte de dialogue (popup) lorsque l'utilisateur sélectionne le bouton "OK"
  popup.style.display = "none";
  // Actualise la page après que le popup ait été fermé
  location.reload();
});

// Ferme le popup lorsque l'utilisateur clique sur la croix en haut à droite du popup
var closeIcon = document.querySelector(".close-icon");
closeIcon.addEventListener("click", function() {
  popup.style.display = "none";
  // Actualise la page après que le popup ait été fermé
  location.reload();
});
