  // Smooth Scrolling مع تعويض navbar
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', e => {
    const target = document.querySelector(link.getAttribute("href"));
    if (target) {
      e.preventDefault();
      const offset = 70; // ارتفاع navbar
      const topPos = target.offsetTop - offset;
      window.scrollTo({ top: topPos, behavior: "smooth" });
    }
  });
});

// Typing Animation
const text =
  "My name is Ziad Ayman Abdalla Elmaghraby, and I am a passionate Full-Stack Developer with strong skills in Front-End development, including HTML, CSS, JavaScript, and React. I also have experience in Back-End development using C# and SQL, allowing me to build complete and functional web applications.In addition, I have solid programming experience in C++, Java, and Python, with a strong foundation in Object-Oriented Programming (OOP).I enjoy building clean, responsive, and user-friendly interfaces, while also working on the server-side logic and database management to create reliable and efficient systems. I have a strong problem-solving mindset and enjoy turning ideas into real, functional projects.I am always eager to learn new technologies and improve my development skills, and I continuously grow through personal projects, teamwork, and continuous learning.";
let i = 0;
const typingText = document.getElementById("typing-text");
const aboutSection = document.querySelector(".about-container");
let started = false;

function type() {
  if (i < text.length) {
    typingText.textContent += text[i];
    i++;
    setTimeout(type, 25);
  }
}

// Desktop: start typing on hover
aboutSection.addEventListener("mouseenter", () => {
  if (!started && window.innerWidth > 768) {
    started = true;
    type();
  }
});

// Mobile: start typing on load
window.addEventListener("load", () => {
  if (!started && window.innerWidth <= 768) {
    started = true;
    type();
  }
});

// Profile Image 3D Hover
const img = document.querySelector('.profile-img');

img.addEventListener('mousemove', (e) => {
  const rect = img.getBoundingClientRect();
  const x = e.clientX - rect.left - rect.width / 2;
  const y = e.clientY - rect.top - rect.height / 2;
  img.style.setProperty('--rotateY', `${x / 20}deg`);
  img.style.setProperty('--rotateX', `${-y / 20}deg`);
});

img.addEventListener('mouseleave', () => {
  img.style.setProperty('--rotateY', '0deg');
  img.style.setProperty('--rotateX', '0deg');
});

