 document.querySelectorAll('a[href^="#"]').forEach(link=>{

link.addEventListener("click",e=>{

e.preventDefault()

const target=document.querySelector(link.getAttribute("href"))

window.scrollTo({

top:target.offsetTop-80,
behavior:"smooth"

})

})

})
