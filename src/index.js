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

let mybutton = document.getElementById("scroll-arrow");

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0; 
  document.documentElement.scrollTop = 0;
} 

$(document).ready(function () {
  $("a.scrollLink").click(function (event) {
    event.preventDefault();
    $this.scrollIntoView(true);
  });
});
