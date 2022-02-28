function menuToggle() {
  var x = document.getElementById("myNavtoggle");
  if (x.className === "navtoggle") {
     // x.className += " responsive";
      x.classList.toggle("responsive");
  } else {
      x.className = "navtoggle";
  }
}

function menuClose() {
  var x = document.getElementById("myNavtoggle");
  if (x.className === "navtoggle") {
     // x.className += " responsive";
      x.classList.remove("responsive");
  } else {
      x.className = "navtoggle";
  }
}