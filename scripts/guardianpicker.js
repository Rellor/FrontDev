var guardian = document.querySelector("#guardian");
var titanbtn = document.querySelector("#titanbutton");
var warlockbtn = document.querySelector("#warlockbutton");
var hunterbtn = document.querySelector("#hunterbutton");
var classtitle = document.querySelector("#classtitle");
var classinfo = document.querySelector("#classinfo");

function showtitan () {
  guardian.src='images/class_titan_desktop.webp';
  classtitle.innerHTML = "TITAN";
  classinfo.innerHTML = "Slow and bad, Titans are just the worst class to pick.";
  console.log("titan");
}

function showwarlock () {
  guardian.src='images/class_warlock_desktop.webp';
  classtitle.innerHTML = "WARLOCK";
  classinfo.innerHTML = "Warlocks weaponize the mysteries of the universe to sustain themselves and devastate their foes.";
  console.log("warlock");
}

function showhunter () {
  guardian.src='images/class_hunter_desktop.webp';
  classtitle.innerHTML = "HUNTERS";
  classinfo.innerHTML = "Agile and daring, Hunters are quick on their feet and quicker on the draw.";
  console.log("hunter");
}

titanbtn.addEventListener('click' , showtitan);
warlockbtn.addEventListener('click' , showwarlock);
hunterbtn.addEventListener('click' , showhunter);
