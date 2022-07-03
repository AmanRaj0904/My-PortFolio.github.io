const body = document.querySelector("body");
const navbar = document.querySelector(".navbar");
const menuBtn = document.querySelector(".menu-btn");
const cancelBtn = document.querySelector(".cancel-btn");
menuBtn.onclick = ()=>{
  navbar.classList.add("show");
  menuBtn.classList.add("hide");
  body.classList.add("disabled");
}
cancelBtn.onclick = ()=>{
  body.classList.remove("disabled");
  navbar.classList.remove("show");
  menuBtn.classList.remove("hide");
}
window.onscroll = ()=>{
  this.scrollY > 20 ? navbar.classList.add("sticky") : navbar.classList.remove("sticky");
}
var typed = new Typed(".auto-typed",{
  strings:["Web Developer","Ui Designer","Freelancer","Developer"],
  typeSpeed:100,
  backSpeed:100,
  loop:true
})

// var options = {
//   strings: ["Designer"," Developer", "Freelancer", "Photographer"],
//   typeSpeed: 100,
//   backSpeed: 100,
//   loop: true,
// };

// var typed = new Typed(".auto-typed", options);