const output = document.getElementById("vks-output");
const firstElement = document.getElementById("vks-one");
const secondElement = document.getElementById("vks-two");
const thirdElement = document.getElementById("vks-three");
const fourthElement = document.getElementById("vks-four");
const elements = document.getElementsByClassName("vks-click");

// Templates for right side element with displayed testimonials
let templateOne = `<div class="vks-out-head-cont">
<h2 class="vks-out-heading">Naturdrogeriet</h2>
</div>
<div class="vks-out-content">
<div class="vks-out-cont-text">
    <p class="vks-out-p">"Helle er utrolig nem at arbejde sammen med. Humøret er altid højt, hendes tilgang til alt er positivt og konstruktivt. Hun har løftet vores designlinje til nye højder og dermed bidraget til at vores målgruppe er blevet væsentligt større. Og hun er utrættelig hvad angår forslag til forbedringer til både produkter og design." <br><br>
        - Helle</p>
    <div class="littlecont">
        <img src="img/NaturdrogerietLogo.png" class="vks-text-littleimage" alt="Naturdrogeriet Logo">
    </div>
</div>
<div class="vks-out-cont-image">
    <img src="img/NaturdrogerietPhoto.jpg" class="vks-image" alt="Naturdrogeriet Product">
</div>
</div>`;
let templateTwo = `<div class="vks-out-head-cont">
<h2 class="vks-out-heading">Harder<br>Herretøj</h2>
</div>
<div class="vks-out-content">
<div class="vks-out-cont-text">
    <p class="vks-out-p">"Hun har drive, hun er direkte og hun giver aldrig op. Fair priser og overholder altid deadlines uden det går ud over kvalitetsniveauet - også når hun bliver presset!" <br><br>
    - Henrik</p>
    <div class="littlecont">
        <img src="img/HarderLogo.jpg" class="vks-text-littleimage" alt="Naturdrogeriet Logo">
    </div>
</div>
<div class="vks-out-cont-image">
    <img src="img/HarderImage2.jpg" class="vks-image" alt="Naturdrogeriet Product">
</div>
</div>`;
let templateThree = `<div class="vks-out-head-cont">
<h2 class="vks-out-heading">Rethink<br>Consulting</h2>
</div>
<div class="vks-out-content">
<div class="vks-out-cont-text">
    <p class="vks-out-p">"Enkelt og elegant design er kendetegnet for Dimenzions… og stilen holder uanset hvad hun kaster sig ud. Og hun gør det komplicerede let… sans for struktur og udviser rettidig omhu. Kan kun anbefales." <br><br>
    - Rasmus</p>
    <div class="littlecont">
        <img src="img/RETHINKlogo.png" class="vks-text-littleimage" alt="Naturdrogeriet Logo">
    </div>
</div>
<div class="vks-out-cont-image">
    <img src="img/RETHINKphoto.JPG" class="vks-image" alt="Naturdrogeriet Product">
</div>
</div>`;
let templateFour = `<div class="vks-out-head-cont">
<h2 class="vks-out-heading">Aarhus<br>Universitethospital</h2>
</div>
<div class="vks-out-content">
<div class="vks-out-cont-text">
    <p class="vks-out-p">"Helle er en super samarbejdspartner… Hun sætter ikke kun tingene pænt og overskueligt op men sætter sig faktisk ind i stoffet og på den måde udfordrer os på vores fag, hvilket giver et rigtig godt slutresultat. Hun får vores absolut bedste anbefalinger." <br><br>
    - Dorthe</p>
    <div class="littlecont">
        <img src="img/SkejbySygehusLogo.png" class="vks-text-littleimage" alt="Naturdrogeriet Logo">
    </div>
</div>
<div class="vks-out-cont-image">
    <img src="img/SkejbySygehusPhoto.jpg" class="vks-image" alt="Naturdrogeriet Product">
</div>
</div>`;

// Functions for printing templates
function showOutputOne () {
    output.innerHTML = "";
    secondElement.classList.remove("vks-active");
    thirdElement.classList.remove("vks-active");
    fourthElement.classList.remove("vks-active");
    firstElement.classList.add("vks-active");
    output.insertAdjacentHTML("beforeend", templateOne);
}

function showOutputTwo () {
    output.innerHTML = "";
    firstElement.classList.remove("vks-active");
    thirdElement.classList.remove("vks-active");
    fourthElement.classList.remove("vks-active");
    secondElement.classList.add("vks-active");
    output.insertAdjacentHTML("beforeend", templateTwo);
}

function showOutputThree () {
    output.innerHTML = "";
    firstElement.classList.remove("vks-active");
    secondElement.classList.remove("vks-active");
    fourthElement.classList.remove("vks-active");
    thirdElement.classList.add("vks-active");
    output.insertAdjacentHTML("beforeend", templateThree);
}

function showOutputFour () {
    output.innerHTML = "";
    firstElement.classList.remove("vks-active");
    secondElement.classList.remove("vks-active");
    thirdElement.classList.remove("vks-active");
    fourthElement.classList.add("vks-active");
    output.insertAdjacentHTML("beforeend", templateFour);
}