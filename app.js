let pronombre = ["el","la", "mi", "tu"];
let adjetivo = ["maravilloso", "increible", "dudoso","insospechado"];
let nombre = ["mundo", "sitio","ciudad", "libro", "amigo"];
let extensión = [".com", ".es", ".net", ".org"];

for ( let p = 0; p < pronombre.length; p++ ) {
    for ( let a = 0; a < adjetivo.length; a++ ) {
        for ( let n = 0; n < nombre.length; n++ ) {
            for ( let e = 0; e < extensión.length; e++ ) {

                console.log(pronombre[p] + adjetivo[a] + nombre[n] + extensión[e]); 
    

            }
        }
    }
}