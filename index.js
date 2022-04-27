window.addEventListener("load", sidenVises);

const { doc } = require("prettier");

function sidenVises() {
  console.log("sidenVises");
  document.querySelector("#menuknap").addEventListener("click", toggleMenu);
}

function toggleMenu() {
  console.log("toggleMenu");
  document.querySelector("#menu").classList.toggle("skjult");
  document.querySelector("#menuknap").classList.toggle("open");

  // let erSkjult = document.querySelector("#menu").classList.contains("skjult");

  // if (erSkjult == true) {
  //   document.querySelector("#menuknap").textContent = "☰";
  // } else {
  //   document.querySelector("#menuknap").textContent = "Close.";
  // }
}
