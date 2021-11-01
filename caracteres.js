var palabra = prompt("Ingrese una palabra");
var nueva = filtrar(palabra);
console.log(nueva);


function filtrar(palabra){
    let elementos = ["1","2","3","4","5","6","7","9","0","a","b","c","d","e","f","g","h","i","j","k","l","m","n","ñ","o","p","q","r","s", "t","u","v","w","x","y","z"];
    let nuevaPalbra = "";
    for (let i=0; i=palabra.length; i++){
        let verificacion = true,
        for(let j=0; j=elementos.length;j++){
            if(palabra[i]==elementos[j]){
                verificacion=false;
            }
        }
        if(verificacion==true){
            nuevaPalbra += palabra[i];
        }else{
            nuevaPalbra += "";
        }
    }
    return nuevaPalbra;
}