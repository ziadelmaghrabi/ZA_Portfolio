 // Smooth Scrolling

document.querySelectorAll('a[href^="#"]').forEach(link => {

link.addEventListener("click",e=>{

const target=document.querySelector(link.getAttribute("href"));

if(target){

e.preventDefault();

window.scrollTo({

top:target.offsetTop-60,
behavior:"smooth"

});

}

});

});


// Profile Image 3D Effect

const img=document.querySelector(".profile-img");

img.addEventListener("mousemove",e=>{

const rect=img.getBoundingClientRect();

const x=e.clientX-rect.left-rect.width/2;

const y=e.clientY-rect.top-rect.height/2;

img.style.transform=`rotateY(${x/25}deg) rotateX(${-y/25}deg)`;

});

img.addEventListener("mouseleave",()=>{

img.style.transform="rotateY(0) rotateX(0)";

});
