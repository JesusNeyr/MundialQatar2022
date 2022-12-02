// navbark
const burguer=document.querySelector('#burger')
const ul=document.querySelector("ul")
const formulario=document.querySelector('.search_jugador')
console.log(formulario)
burguer.addEventListener("click",()=>{
    ul.classList.toggle("show")
    formulario.classList.toggle("search_jugador")
})
const validar_form=(element)=>{
    const campo=element.target
    const valor_del_campo=element.target.value;
    if (valor_del_campo==="") {
        campo.classList.add("invalido");
        campo.nextElementSibling.classList.add("error");
        campo.nextElementSibling.innerText=`el ${campo.name} es requerido`;
    }else{
        campo.classList.remove("invalido");
        campo.nextElementSibling.classList.remove("error");
        campo.nextElementSibling.innerText="";
    }

}
// inputs
const jugador=document.querySelector('[name=jugador]')

jugador.addEventListener("blur",validar_form)  