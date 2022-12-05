const email=document.querySelector('[name=email]')
const pass_user=document.querySelector('[name=pass_user]')
const iniciar=document.querySelector('[name=iniciar]')
const form=document.querySelector('[name=form]')
email.addEventListener("blur",(element)=>validar_form("campo user requerido",element))
pass_user.addEventListener('blur',(element)=>validar_form("campo password requerido",element))

Object.entries(localStorage).forEach(([key, valor]) => {
    form.addEventListener("submit",(e)=>{
        if (key===email.value && valor===pass_user.value) {
            window.location.href="../view/map.html"
            localStorage.setItem("login",true)
            alert("lo logramos accedimos")
        }else{
            e.preventDefault()
            iniciar.nextElementSibling.classList.add("error")
            iniciar.nextElementSibling.innerText="Email no registrado"
        }
    });
})

  