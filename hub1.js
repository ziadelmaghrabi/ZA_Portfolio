 /* ===============================
   Smooth Scrolling
================================ */

document.querySelectorAll('a[href^="#"]').forEach(link => {

link.addEventListener("click", e => {

const target = document.querySelector(link.getAttribute("href"))

if(target){

e.preventDefault()

window.scrollTo({

top: target.offsetTop - 80,
behavior: "smooth"

})

}

})

})


/* ===============================
   Navbar Active Link on Scroll
================================ */

const sections = document.querySelectorAll("section")
const navLinks = document.querySelectorAll("nav a")

window.addEventListener("scroll", () => {

let current = ""

sections.forEach(section => {

const sectionTop = section.offsetTop - 120
const sectionHeight = section.clientHeight

if(pageYOffset >= sectionTop){

current = section.getAttribute("id")

}

})

navLinks.forEach(link => {

link.classList.remove("active")

if(link.getAttribute("href") === "#" + current){

link.classList.add("active")

}

})

})


/* ===============================
   Typing Effect (About Section)
================================ */

const typingText = document.querySelector("#about p")

const text = `I am a Computer Science student passionate about software development
and modern web technologies. I specialize in building responsive front-end
interfaces using HTML, CSS, JavaScript and React. I am also learning .NET
and backend development using C# and SQL to create full-stack applications.`

let index = 0

function typeEffect(){

if(index < text.length){

typingText.textContent += text.charAt(index)

index++

setTimeout(typeEffect,25)

}

}

window.addEventListener("load", typeEffect)



/* ===============================
   Hero Image 3D Hover Effect
================================ */

const heroImg = document.querySelector(".hero-img")

heroImg.addEventListener("mousemove", e => {

const rect = heroImg.getBoundingClientRect()

const x = e.clientX - rect.left - rect.width/2
const y = e.clientY - rect.top - rect.height/2

heroImg.style.transform =
`rotateY(${x/20}deg) rotateX(${-y/20}deg) scale(1.05)`

})

heroImg.addEventListener("mouseleave", () => {

heroImg.style.transform = "rotateY(0) rotateX(0) scale(1)"

})


/* ===============================
   Scroll Reveal Animation
================================ */

const revealElements = document.querySelectorAll(
".skill-card, .project-card, .edu-card, .train-card"
)

const revealObserver = new IntersectionObserver(entries => {

entries.forEach(entry => {

if(entry.isIntersecting){

entry.target.style.opacity = "1"
entry.target.style.transform = "translateY(0)"

}

})

})

revealElements.forEach(el => {

el.style.opacity = "0"
el.style.transform = "translateY(40px)"
el.style.transition = "0.6s"

revealObserver.observe(el)

})


/* ===============================
   Skills Hover Glow Effect
================================ */

const skills = document.querySelectorAll(".skill-card")

skills.forEach(skill => {

skill.addEventListener("mouseenter", () => {

skill.style.boxShadow = "0 0 20px #4fc3f7"

})

skill.addEventListener("mouseleave", () => {

skill.style.boxShadow = "none"

})

})


/* ===============================
   Project Card Tilt Effect
================================ */

const projects = document.querySelectorAll(".project-card")

projects.forEach(card => {

card.addEventListener("mousemove", e => {

const rect = card.getBoundingClientRect()

const x = e.clientX - rect.left - rect.width/2
const y = e.clientY - rect.top - rect.height/2

card.style.transform =
`rotateY(${x/25}deg) rotateX(${-y/25}deg) scale(1.03)`

})

card.addEventListener("mouseleave", () => {

card.style.transform = "rotateY(0) rotateX(0) scale(1)"

})

})
