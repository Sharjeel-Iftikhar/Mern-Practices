const hamberger = document.querySelector('#hamberger');
const menu = document.querySelector('#menu');
const hLinks = document.querySelectorAll('#hLink');
const body = document.querySelector('body');
const moon = document.querySelector('#moon');

hamberger.addEventListener("click",()=>{
    menu.classList.toggle("hidden")
    hamberger.classList.toggle("bg-white")
})

hLinks.forEach(link=>{
    link.addEventListener("click", ()=>{
      menu.classList.toggle("hidden")
      hamberger.classList.toggle("bg-white")
    })
  })

moon.addEventListener("click",()=>{
    body.classList.toggle("dark")
})