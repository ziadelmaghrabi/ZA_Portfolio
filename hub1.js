 // ================= Smooth Scroll =================
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', e => {
    const target = document.querySelector(link.getAttribute("href"));
    if(target){
      e.preventDefault();
      const offset = 70;
      const topPos = target.offsetTop - offset;
      window.scrollTo({ top: topPos, behavior: 'smooth' });
    }
  });
});

// ================= Typing Effect =================
const text = "My name is Ziad Ayman Abdalla Elmaghraby, and I am a passionate Full-Stack Developer with strong skills in Front-End development, including HTML, CSS, JavaScript, and React. I also have experience in Back-End development using C# and SQL, allowing me to build complete and functional web applications. I enjoy building clean, responsive, and user-friendly interfaces, while also working on server-side logic and database management.";
let i = 0;
const typingText = document.getElementById("typing-text");
const aboutSection = document.querySelector(".about-container");
let started = false;

function type() {
  if(i < text.length){
    typingText.textContent += text[i];
    i++;
    setTimeout(type, 25);
  }
}

// Desktop: start typing on hover
aboutSection.addEventListener("mouseenter", () => {
  if(!started && window.innerWidth > 768){
    started = true;
    type();
  }
});

// Mobile: start typing on load
window.addEventListener("load", () => {
  if(!started && window.innerWidth <= 768){
    started = true;
    type();
  }
});

// ================= Hero Image 3D Effect =================
const img = document.querySelector('.hero-img');
img.addEventListener('mousemove', (e) => {
  const rect = img.getBoundingClientRect();
  const x = e.clientX - rect.left - rect.width/2;
  const y = e.clientY - rect.top - rect.height/2;
  img.style.transform = `rotateY(${x/20}deg) rotateX(${-y/20}deg) scale(1.05)`;
});
img.addEventListener('mouseleave', () => {
  img.style.transform = 'rotateY(0deg) rotateX(0deg) scale(1)';
});
