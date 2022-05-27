let modal = document.getElementById("Modal");
let modalb = document.getElementById("ModalB");
let modalc = document.getElementById("ModalC");
let modald = document.getElementById("ModalD");
let modale = document.getElementById("ModalE");

// Get the button that opens the modal
let btn = document.getElementById("Btn");
let btnb = document.getElementById("BtnB");
let btnc = document.getElementById("BtnC");
let btnd = document.getElementById("BtnD");
let btne = document.getElementById("BtnE");

// Get the closing element
let span = document.getElementById("closea");
let spanb = document.getElementById("closeb");
let spanc = document.getElementById("closec");
let spand = document.getElementById("closed");
let spane = document.getElementById("closee");

// Functions triggering modal to open 
btn.onclick = function() {
  modal.style.display = "block";
}

btnb.onclick = function() {
  modalb.style.display = "block";
}

btnc.onclick = function() {
  modalc.style.display = "block";
}

btnd.onclick = function() {
  modald.style.display = "block";
}

btne.onclick = function() {
  modale.style.display = "block";
}

// Closing on X button
span.onclick = function() {
  modal.style.display = "none";
}

spanb.onclick = function() {
    modalb.style.display = "none";
}

spanc.onclick = function() {
  modalc.style.display = "none";
}

spand.onclick = function() {
  modald.style.display = "none";
}

spane.onclick = function() {
  modale.style.display = "none";
}

// Function for closing the modal when clicking on the background
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  } else if (event.target == modalb) {
    modalb.style.display = "none";
  } else if (event.target == modalc) {
    modalc.style.display = "none";
  } else if (event.target == modald) {
    modald.style.display = "none";
  } else if (event.target == modale) {
    modale.style.display = "none";
  }
}