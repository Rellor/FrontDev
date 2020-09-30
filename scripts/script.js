// JavaScript Document
var eerstepositie = window.pageYOffset;


window.onscroll = function() {
  var positienu = window.pageYOffset;

  if (positienu > 50) {
    document.getElementById("header").style.background = "#12171c";
  } else {
    document.getElementById("header").style.background = "linear-gradient(to bottom, rgba(18,23,28,0.75), transparent)";
  }
  eerstepositie = positienu;
}
