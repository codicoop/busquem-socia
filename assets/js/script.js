/** Header **/

// OPENING AND CLOSING OF MENU

const header = document.querySelector(".header__container");

// This opens the menu when the hamburguer is clicked
let menuOpen = document.querySelector(".header__burguer");

menuOpen.addEventListener("click", function(){
  header.closest(".header__wrapper").classList.add("is-open");
})

// This closes the menu when the close button is clicked
let menuClose = document.querySelector(".header__close");

menuClose.addEventListener("click", function(){
  header.closest(".header__wrapper").classList.remove("is-open");
})

/*** Page - Acompanyament ***/

// Passing from one "page" to the next

var navButton = document.getElementsByClassName("acompanyament__nav");

for (let i = 0; i < navButton.length; i++) {
  navButton[i].addEventListener("click", function() {
    // Current Section
    var currentSection = this.closest("section");
    console.log(currentSection);
    // Hides the Current Section
    currentSection.classList.add("is-hidden");
    //Shows the next Section
    var nextSection = currentSection.nextElementSibling;
    nextSection.classList.remove("is-hidden");
  });
}