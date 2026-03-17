  // script.js

// Smooth Scroll + Close Mobile Menu
document.querySelectorAll('a[href^="#"]').forEach(link=>{
    link.addEventListener("click", e=>{
        e.preventDefault();
        const target = document.querySelector(link.getAttribute("href"));
        window.scrollTo({ top: target.offsetTop - 80, behavior:"smooth" });
        document.querySelector(".navbar ul").classList.remove("active");
    });
});

// Navbar Active Link
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav a");
window.addEventListener("scroll", ()=>{
    let current = "";
    sections.forEach(section=>{
        const sectionTop = section.offsetTop - 120;
        if(pageYOffset >= sectionTop) current = section.getAttribute("id");
    });
    navLinks.forEach(link=>{
        link.classList.remove("active");
        if(link.getAttribute("href")==="#"+current) link.classList.add("active");
    });
});

// Typing Effect (About)
const typingText = document.getElementById("typing-text");
const lines = [
  "👋 Hi, I am Ziad Ayman, a passionate Computer Science student and Full Stack .NET Developer.",
  "💻 I specialize in building scalable and responsive web applications with modern technologies.",
  "🎨 On the front-end, I create interactive interfaces using HTML, CSS, JavaScript, and React.",
  "⚙️ On the back-end, I develop robust solutions with C#, ASP.NET, and SQL.",
  "🚀 I enjoy learning new technologies, solving complex problems, and contributing to impactful projects."
];
let lineIndex = 0, charIndex = 0;
function typeEffect() {
    if(lineIndex<lines.length){
        if(charIndex<lines[lineIndex].length){
            typingText.innerHTML+=lines[lineIndex].charAt(charIndex);
            charIndex++;
            setTimeout(typeEffect,25);
        } else {
            typingText.innerHTML+="<br>";
            lineIndex++; charIndex=0;
            setTimeout(typeEffect,200);
        }
    }
}
window.addEventListener("load", typeEffect);

// Hero 3D Effect
const heroImg = document.querySelector(".hero-img");
function resetHeroTransform(){ heroImg.style.transform="rotateY(0) rotateX(0) scale(1)"; }
function initHero3DEffect(){
    if(window.innerWidth>768){
        heroImg.addEventListener("mousemove", e=>{
            const rect = heroImg.getBoundingClientRect();
            const x = e.clientX - rect.left - rect.width/2;
            const y = e.clientY - rect.top - rect.height/2;
            heroImg.style.transform=`rotateY(${x/20}deg) rotateX(${-y/20}deg) scale(1.05)`;
        });
        heroImg.addEventListener("mouseleave", resetHeroTransform);
    } else { resetHeroTransform(); }
}
initHero3DEffect();
window.addEventListener("resize", initHero3DEffect);

// Skill Cards click
document.querySelectorAll(".skill-card").forEach(card=>{
    card.addEventListener("click", ()=>{ card.classList.toggle("active"); });
});

// Projects / Skills Animation (Scroll Reveal)
const revealElements = document.querySelectorAll(".skill-card,.project-card,.edu-card,.train-card");
const revealObserver = new IntersectionObserver(entries=>{
    entries.forEach(entry=>{
        if(entry.isIntersecting){
            entry.target.style.opacity="1";
            entry.target.style.transform="translateY(0)";
        }
    });
});
revealElements.forEach(el=>{
    el.style.opacity="0";
    el.style.transform="translateY(40px)";
    el.style.transition="0.6s";
    revealObserver.observe(el);
});

// Navbar Toggle
const menuToggle = document.querySelector(".menu-toggle");
const navUl = document.querySelector(".navbar ul");
menuToggle.addEventListener("click", ()=>{ navUl.classList.toggle("active"); });

// Background Canvas Animation
const canvas = document.getElementById("bg-canvas");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth; canvas.height = window.innerHeight;
let particles = [];
for(let i=0;i<150;i++){
    particles.push({
        x: Math.random()*canvas.width,
        y: Math.random()*canvas.height,
        r: Math.random()*2+1,
        dx: (Math.random()-0.5)*0.5,
        dy: (Math.random()-0.5)*0.5
    });
}
function animate(){
    ctx.clearRect(0,0,canvas.width,canvas.height);
    particles.forEach(p=>{
        ctx.beginPath();
        ctx.arc(p.x,p.y,p.r,0,Math.PI*2);
        ctx.fillStyle="#4fc3f7";
        ctx.fill();
        p.x+=p.dx; p.y+=p.dy;
        if(p.x<0||p.x>canvas.width) p.dx*=-1;
        if(p.y<0||p.y>canvas.height) p.dy*=-1;
    });
    requestAnimationFrame(animate);
}
animate();
window.addEventListener("resize", ()=>{
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});
