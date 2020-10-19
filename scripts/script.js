// JavaScript Document
var eerstepositie = window.pageYOffset;
var hamburger = document.querySelector(".hamburger");
var header = document.querySelector("#header");
var menubtn = document.querySelector(".menu");

window.onscroll = function() {
  var positienu = window.pageYOffset;

  if (positienu > 50) {
    header.classList.add("darkbackground");
  } else {
    header.classList.remove("darkbackground");
  }
  eerstepositie = positienu;
}

function showhamburger () {
   hamburger.classList.toggle("hidden");
   header.classList.toggle("darkbackground");
}

menubtn.addEventListener('click' , showhamburger);
