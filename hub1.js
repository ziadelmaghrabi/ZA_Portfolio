 // Smooth Scroll + close mobile menu
document.querySelectorAll('a[href^="#"]').forEach(link=>{
    link.addEventListener("click", e=>{
        e.preventDefault();
        const target = document.querySelector(link.getAttribute("href"));
        window.scrollTo({ top: target.offsetTop - 80, behavior:"smooth" });
        // close menu on mobile
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

let lineIndex = 0;
let charIndex = 0;

function typeEffect() {
    if (lineIndex < lines.length) {
        if (charIndex < lines[lineIndex].length) {
            typingText.innerHTML += lines[lineIndex].charAt(charIndex);
            charIndex++;
            setTimeout(typeEffect, 25);
        } else {
            // نهاية السطر، نضيف سطر جديد
            typingText.innerHTML += "<br>";
            lineIndex++;
            charIndex = 0;
            setTimeout(typeEffect, 200); // تأخير قصير قبل السطر الجديد
        }
    }
}

window.addEventListener("load", typeEffect);
 

// Hero Image 3D Effect (Desktop Only)
const heroImg = document.querySelector(".hero-img");
function resetHeroTransform(){ heroImg.style.transform = "rotateY(0) rotateX(0) scale(1)"; }

function initHero3DEffect(){
    if(window.innerWidth > 768){
        heroImg.addEventListener("mousemove", e=>{
            const rect = heroImg.getBoundingClientRect();
            const x = e.clientX - rect.left - rect.width/2;
            const y = e.clientY - rect.top - rect.height/2;
            heroImg.style.transform = `rotateY(${x/20}deg) rotateX(${-y/20}deg) scale(1.05)`;
        });
        heroImg.addEventListener("mouseleave", resetHeroTransform);
    } else {
        resetHeroTransform();
    }
}
initHero3DEffect();
window.addEventListener("resize", initHero3DEffect);

// Scroll Reveal Animation
const revealElements = document.querySelectorAll(".skill-card,.project-card,.edu-card,.train-card");
const revealObserver = new IntersectionObserver(entries=>{
    entries.forEach(entry=>{
        if(entry.isIntersecting){
            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";
        }
    });
});
revealElements.forEach(el=>{
    el.style.opacity = "0";
    el.style.transform = "translateY(40px)";
    el.style.transition = "0.6s";
    revealObserver.observe(el);
});

// Skill & Project Effects (Mobile & Desktop)
document.querySelectorAll(".skill-card, .project-card").forEach(el=>{
    function resetCardEffect(){
        el.style.transform = "scale(1)";
        el.style.boxShadow = "none";
    }

    if(window.innerWidth <= 768){
        el.addEventListener("touchstart", ()=>{
            el.style.transform="scale(1.03)";
            el.style.boxShadow="0 0 20px #4fc3f7";
        });
        el.addEventListener("touchend", resetCardEffect);
    } else {
        if(el.classList.contains("skill-card")){
            el.addEventListener("mouseenter", ()=>{ el.style.boxShadow="0 0 20px #4fc3f7"; });
            el.addEventListener("mouseleave", resetCardEffect);
        } else { // project-card
            el.addEventListener("mousemove", e=>{
                const rect = el.getBoundingClientRect();
                const x = e.clientX - rect.left - rect.width/2;
                const y = e.clientY - rect.top - rect.height/2;
                el.style.transform = `rotateY(${x/25}deg) rotateX(${-y/25}deg) scale(1.03)`;
            });
            el.addEventListener("mouseleave", resetCardEffect);
        }
    }
});

// Navbar menu toggle
const menuToggle = document.querySelector(".menu-toggle");
const navUl = document.querySelector(".navbar ul");
menuToggle.addEventListener("click", ()=>{ navUl.classList.toggle("active"); });




