 // Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', e=>{
    const target = document.querySelector(link.getAttribute("href"));
    if(target){e.preventDefault();window.scrollTo({top: target.offsetTop-70,behavior:'smooth'});}
  });
});

// Typing Effect
const text = "I am a third-year Computer Science student specializing in Software and Web Development. I have experience in front-end technologies (HTML, CSS, JavaScript, React) and back-end development using C# and SQL. I enjoy building clean, responsive, and functional web applications while continuously learning new technologies to improve my skills.";
let i=0; const typingText=document.getElementById("typing-text"); let started=false;
function type(){if(i<text.length){typingText.textContent+=text[i];i++;setTimeout(type,25);}}

// Desktop hover
const aboutSection=document.querySelector(".about-container");
aboutSection.addEventListener("mouseenter",()=>{if(!started && window.innerWidth>768){started=true;type();}});
// Mobile load
window.addEventListener("load",()=>{if(!started && window.innerWidth<=768){started=true;type();}});

// Hero Image 3D
const img=document.querySelector('.hero-img');
img.addEventListener('mousemove',(e)=>{
  const rect=img.getBoundingClientRect();
  const x=e.clientX-rect.left-rect.width/2;
  const y=e.clientY-rect.top-rect.height/2;
  img.style.transform=`rotateY(${x/20}deg) rotateX(${-y/20}deg) scale(1.05)`;
});
img.addEventListener('mouseleave',()=>{img.style.transform='rotateY(0deg) rotateX(0deg) scale(1)';});
