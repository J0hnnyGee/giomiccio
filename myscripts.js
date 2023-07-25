
function reveal() { //funzione che attiva la transizione on scroll
  //source: https://alvarotrigo.com/blog/css-animations-scroll/
var reveals = document.querySelectorAll(".sezione_txt")
for (var i = 0; i < reveals.length; i++) {
var windowHeight = window.innerHeight;
var elementTop = reveals[i].getBoundingClientRect().top;
var elementVisible = 120; //dopo quanti pixel di visibilità si attiva
if (elementTop < windowHeight - elementVisible) {
 reveals[i].classList.add("active");
}
//else { aggiungi se vuoi che si attivi sempre
  //  reveals[i].classList.remove("active");
}
}
function reveal1() { //funzione che attiva la transizione on scroll
  //source: https://alvarotrigo.com/blog/css-animations-scroll/
var reveals = document.querySelectorAll(".sezione_pic")
for (var i = 0; i < reveals.length; i++) {
var windowHeight = window.innerHeight;
var elementTop = reveals[i].getBoundingClientRect().top;
var elementVisible = 120; //dopo quanti pixel di visibilità si attiva
if (elementTop < windowHeight - elementVisible) {
 reveals[i].classList.add("active");
}
//else { aggiungi se vuoi che si attivi sempre
  //  reveals[i].classList.remove("active");
}
}
function reveal2() { //funzione che attiva la transizione on scroll
  //source: https://alvarotrigo.com/blog/css-animations-scroll/
var reveals = document.querySelectorAll(".direction-l")
for (var i = 0; i < reveals.length; i++) {
var windowHeight = window.innerHeight;
var elementTop = reveals[i].getBoundingClientRect().top;
var elementVisible = 120; //dopo quanti pixel di visibilità si attiva
if (elementTop < windowHeight - elementVisible) {
 reveals[i].classList.add("active");
}
//else { aggiungi se vuoi che si attivi sempre
  //  reveals[i].classList.remove("active");
}
}

function reveal3() { //funzione che attiva la transizione on scroll
  //source: https://alvarotrigo.com/blog/css-animations-scroll/
var reveals = document.querySelectorAll(".direction-r")
for (var i = 0; i < reveals.length; i++) {
var windowHeight = window.innerHeight;
var elementTop = reveals[i].getBoundingClientRect().top;
var elementVisible = 120; //dopo quanti pixel di visibilità si attiva
if (elementTop < windowHeight - elementVisible) {
 reveals[i].classList.add("active");
}
//else { aggiungi se vuoi che si attivi sempre
  //  reveals[i].classList.remove("active");
}
}

function reveal4() { //funzione che attiva la transizione on scroll
  //source: https://alvarotrigo.com/blog/css-animations-scroll/
var reveals = document.querySelectorAll(".lottie")
for (var i = 0; i < reveals.length; i++) {
var windowHeight = window.innerHeight;
var elementTop = reveals[i].getBoundingClientRect().top;
var elementVisible = 120; //dopo quanti pixel di visibilità si attiva
if (elementTop < windowHeight - elementVisible) {
 reveals[i].classList.add("active");
}
//else { aggiungi se vuoi che si attivi sempre
  //  reveals[i].classList.remove("active");
}
}

window.addEventListener("scroll", reveal);
window.addEventListener("scroll", reveal1);
window.addEventListener("scroll", reveal2);
window.addEventListener("scroll", reveal3);
window.addEventListener("scroll", reveal4);
// To check the scroll position on page load
reveal();
reveal1();
reveal2();
reveal3();
reveal4();
