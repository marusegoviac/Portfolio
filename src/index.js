/*document.getElementById("scroll-arrow").addEventListener(
  "click",
  function (e) {
    var target = e.target;

    if (target.classList.contains("fa-chevron-down")) {
      target.classList.remove("fa-chevron-down");
      target.classList.add("fa-chevron-up");
    } else {
      target.classList.remove("fa-chevron-up");
      target.classList.add("fa-chevron-down");
    }
  },
  false
);*/

// Get the button:
let mybutton = document.getElementById("scroll-arrow");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
} 

$(document).ready(function () {
  $("a.scrollLink").click(function (event) {
    event.preventDefault();
    $this.scrollIntoView(true);
  });
});

/*document.getElementById("scroll-arrow").onclick = function scroll() {
  if ($(this).hasClass("fa-chevron-down")) {
    const element = document.getElementById("sur-moi");
    element.scrollTo({
      top: element.clientHeight / 2,
      left: element.clientWidth / 2,
      behavior: "smooth",
    });
  } else if ($(this).hasClass("fa-chevron-up")) {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }
};*/
