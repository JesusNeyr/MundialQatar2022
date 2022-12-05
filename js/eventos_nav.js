
const burguer=document.querySelector('#burger')
const ul=document.querySelector("ul")
const formulario_general=document.querySelector('.form_general')
burguer.addEventListener("click",()=>{
    ul.classList.toggle("show")
    formulario_general.classList.toggle("form_general")
})