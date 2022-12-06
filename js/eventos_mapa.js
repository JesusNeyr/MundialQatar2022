window.addEventListener("load",()=>{

    mostrar=true
    clave=''
    Object.entries(localStorage).forEach(([key, valor]) => {
        console.log(key,valor)
        if (key!=="login" && valor!=="true") {
            
            mostrar=false
        }else{
            mostrar=true
            clave=key
        }
    });             
    if (mostrar) {

        console.log("no debe estar log out , si log out 1");
    }else{
        
        window.location.href="../view/login.html"
    }
    console.log(mostrar);
// ------------------------------

// En center guardamos las coordenadas donde se centra el mapa
let center = [25.2841478, 51.4419568];

// En la variable map enviamos el centro del mapa y el zoom inicial (12).
let map = L.map("map").setView(center, 12);

// Creamos el mapa
L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
  maxZoom: 19,
}).addTo(map);

// ícono de Messi
let messiIcon = L.icon({
  iconUrl: "messi.png",
  iconSize: [60, 60],
  iconAnchor: [22, 44],
  popupAnchor: [8, -41],
});

// Ponemos el ícono en el mapa.
let marker = L.marker(center, { icon: messiIcon }).addTo(map);

// Agregamos el pop up.
marker.bindPopup("<b>Messi</b><br>Los amo!").openPopup();

})
