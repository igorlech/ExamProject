let slideIndex = 1;

//showSlides part
showSlides(slideIndex);
showSlidesB(slideIndex);
showSlidesC(slideIndex);
showSlidesD(slideIndex);
showSlidesE(slideIndex);

//plusSides part - adding the slides
function plusSlides(n) {
  showSlides(slideIndex += n);
}

function plusSlidesB(n) {
  showSlidesB(slideIndex += n);
}

function plusSlidesC(n) {
  showSlidesC(slideIndex += n);
}

function plusSlidesD(n) {
  showSlidesD(slideIndex += n);
}

function plusSlidesE(n) {
  showSlidesE(slideIndex += n);
}

//currentSlide part - shows current slide
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function currentSlideB(n) {
  showSlidesB(slideIndex = n);
}

function currentSlideC(n) {
  showSlidesC(slideIndex = n);
}

function currentSlideD(n) {
  showSlidesD(slideIndex = n);
}

function currentSlideE(n) {
  showSlidesE(slideIndex = n);
}

//functions showSlides - main part which calculates
function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}

function showSlidesB(n) {
  let i;
  let slides = document.getElementsByClassName("mySlidesb");
  let dots = document.getElementsByClassName("dotb");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}

function showSlidesC(n) {
  let i;
  let slides = document.getElementsByClassName("mySlidesc");
  let dots = document.getElementsByClassName("dotc");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}

function showSlidesD(n) {
  let i;
  let slides = document.getElementsByClassName("mySlidesd");
  let dots = document.getElementsByClassName("dotd");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}

function showSlidesE(n) {
  let i;
  let slides = document.getElementsByClassName("mySlidesee");
  let dots = document.getElementsByClassName("dote");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}