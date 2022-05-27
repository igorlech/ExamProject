//starting point of the gallery
let slideIndex = 1;
let slideIndexb = 1;
let slideIndexc = 1;
let slideIndexd = 1;
let slideIndexe = 1;
let slideIndexDa = 1;
let slideIndexDb = 1;
let slideIndexDc = 1;
let slideIndexDd = 1;
let slideIndexDe = 1;

//showSlides part MOBILE
showSlides(slideIndex);
showSlidesB(slideIndexb);
showSlidesC(slideIndexc);
showSlidesD(slideIndexd);
showSlidesE(slideIndexe);

//showSlides part DESKTOP
showSlidesDa(slideIndexDa);
showSlidesDb(slideIndexDb);
showSlidesDc(slideIndexDc);
showSlidesDd(slideIndexDd);
showSlidesDe(slideIndexDe);

//plusSides part - adding the slides MOBILE
function plusSlides(n) {
  showSlides(slideIndex += n);
}

function plusSlidesB(n) {
  showSlidesB(slideIndexb += n);
}

function plusSlidesC(n) {
  showSlidesC(slideIndexc += n);
}

function plusSlidesD(n) {
  showSlidesD(slideIndexd += n);
}

function plusSlidesE(n) {
  showSlidesE(slideIndexe += n);
}

//plusSlides part DESKTOP
function plusSlidesDa(n) {
  showSlidesDa(slideIndexDa += n);
}

function plusSlidesDb(n) {
  showSlidesDb(slideIndexDb += n);
}

function plusSlidesDc(n) {
  showSlidesDc(slideIndexDc += n);
}

function plusSlidesDd(n) {
  showSlidesDd(slideIndexDd += n);
}

function plusSlidesDe(n) {
  showSlidesDe(slideIndexDe += n);
}

//currentSlide part - shows current slide
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function currentSlideB(n) {
  showSlidesB(slideIndexb = n);
}

function currentSlideC(n) {
  showSlidesC(slideIndexc = n);
}

function currentSlideD(n) {
  showSlidesD(slideIndexd = n);
}

function currentSlideE(n) {
  showSlidesE(slideIndexe = n);
}

//currentSlide part DESKTOP
function currentSlideDa(n) {
  showSlidesDa(slideIndexDa = n);
}

function currentSlideDb(n) {
  showSlidesDb(slideIndexDb = n);
}

function currentSlideDc(n) {
  showSlidesDc(slideIndexDc = n);
}

function currentSlideDd(n) {
  showSlidesDd(slideIndexDd = n);
}

function currentSlideDe(n) {
  showSlidesDe(slideIndexDe = n);
}

//functions showSlides - main part which calculates MOBILE
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
  if (n > slides.length) {slideIndexb = 1}    
  if (n < 1) {slideIndexb = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndexb-1].style.display = "block";  
  dots[slideIndexb-1].className += " active";
}

function showSlidesC(n) {
  let i;
  let slides = document.getElementsByClassName("mySlidesc");
  let dots = document.getElementsByClassName("dotc");
  if (n > slides.length) {slideIndexc = 1}    
  if (n < 1) {slideIndexc = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndexc-1].style.display = "block";  
  dots[slideIndexc-1].className += " active";
}

function showSlidesD(n) {
  let i;
  let slides = document.getElementsByClassName("mySlidesd");
  let dots = document.getElementsByClassName("dotd");
  if (n > slides.length) {slideIndexd = 1}    
  if (n < 1) {slideIndexd = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndexd-1].style.display = "block";  
  dots[slideIndexd-1].className += " active";
}

function showSlidesE(n) {
  let i;
  let slides = document.getElementsByClassName("mySlidesee");
  let dots = document.getElementsByClassName("dote");
  if (n > slides.length) {slideIndexe = 1}    
  if (n < 1) {slideIndexe = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndexe-1].style.display = "block";  
  dots[slideIndexe-1].className += " active";
}

//functions showSlides DESKTOP
function showSlidesDa(n) {
  let i;
  let slides = document.getElementsByClassName("mySlidesDa");
  let dots = document.getElementsByClassName("dotDa");
  if (n > slides.length) {slideIndexDa = 1}    
  if (n < 1) {slideIndexDa = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndexDa-1].style.display = "block";  
  dots[slideIndexDa-1].className += " active";
}

function showSlidesDb(n) {
  let i;
  let slides = document.getElementsByClassName("mySlidesDb");
  let dots = document.getElementsByClassName("dotDb");
  if (n > slides.length) {slideIndexDb = 1}    
  if (n < 1) {slideIndexDb = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndexDb-1].style.display = "block";  
  dots[slideIndexDb-1].className += " active";
}

function showSlidesDc(n) {
  let i;
  let slides = document.getElementsByClassName("mySlidesDc");
  let dots = document.getElementsByClassName("dotDc");
  if (n > slides.length) {slideIndexDc = 1}    
  if (n < 1) {slideIndexDc = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndexDc-1].style.display = "block";  
  dots[slideIndexDc-1].className += " active";
}

function showSlidesDd(n) {
  let i;
  let slides = document.getElementsByClassName("mySlidesDd");
  let dots = document.getElementsByClassName("dotDd");
  if (n > slides.length) {slideIndexDd = 1}    
  if (n < 1) {slideIndexDd = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndexDd-1].style.display = "block";  
  dots[slideIndexDd-1].className += " active";
}

function showSlidesDe(n) {
  let i;
  let slides = document.getElementsByClassName("mySlidesDe");
  let dots = document.getElementsByClassName("dotDe");
  if (n > slides.length) {slideIndexDe = 1}    
  if (n < 1) {slideIndexDe = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndexDe-1].style.display = "block";  
  dots[slideIndexDe-1].className += " active";
}