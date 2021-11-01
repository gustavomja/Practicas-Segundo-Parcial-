var c = parseInt(prompt("Cuantas personas van a participaran en la rifa?"));
var nombre=[];

for(i = 1; i<=c; i++){
    var b ="Nombre del participante"
    nombre.push(b);
}

aleatorio(nombre);
function aleatorio (e){
    m = Math.floor(Math.random()*(e.length));
    n = e[m];
    alert("El ganador de la rifa es : "+ c);
    console.log(e);
}