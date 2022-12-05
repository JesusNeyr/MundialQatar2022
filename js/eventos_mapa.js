window.addEventListener("load",()=>{
    const ul_de_map=document.querySelector("ul")
    const li=document.createElement("li")
    const a=document.createElement("a")
    const login_li=document.querySelector('[name=login_li]')
    const contenido=document.createTextNode("log out")
    login_li.style.display="none"
    a.appendChild(contenido)
    li.appendChild(a)
    li.style.cursor="pointer"
    ul_de_map.appendChild(li)
    Object.entries(localStorage).forEach(([key, valor]) => {
                if (key!=="login" && valor!=="true") {
                    a.addEventListener("click",()=>{
                        a.setAttribute("href","/view/home.html")
                        localStorage.removeItem(key)
                    })
                }        
                else{
                    document.querySelector('body').style.display="none"
                    document.querySelector('html').innerHTML='<h2>Error 404 page not found</h2>'
                }
            });
})
// const ul_de_map=document.querySelector("ul")
// const li=document.createElement("li")
// const a=document.createElement("a")
// const login_li=document.querySelector('[name=login_li]')
// const contenido=document.createTextNode("log out")
// login_li.style.display="none"
// a.appendChild(contenido)
// li.appendChild(a)
// li.style.cursor="pointer"
// ul_de_map.appendChild(li)
// console.log(localStorage)
// a.addEventListener("click",()=>{
//     a.setAttribute("href","/view/home.html")
//     Object.entries(localStorage).forEach(([key, valor]) => {
//         if (key==="login" && valor==="true") {
//             localStorage.removeItem(key)
//         }        
//     });
    
// })