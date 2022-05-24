// Observer eventhandler
const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("slide-in-left")
        observer.unobserve(entry.target);
      } else {
        entry.target.classList.remove("slide-in-left")
      }
    })
}, {threshold: 1}) // When box is (1=) 100% visible in browser viewport

const observerb = new IntersectionObserver((entries, observerb) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("slide-in-right")
        observerb.unobserve(entry.target);
      } else {
        entry.target.classList.remove("slide-in-right")
      }
    })
}, {threshold: 1}) 


// The html elements under observation
const boxes = document.getElementsByClassName("moveleft");
const flies = document.getElementsByClassName("moveright");

for (const box of boxes) {
    observer.observe(box) // A kind of event listener
}

for (const fly of flies) {
    observerb.observe(fly)
}