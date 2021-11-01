var x = parseInt(prompt("Cantidad de Alumnos"));
var i = nombre(x)
    
    function nombre(x) {
        var resultado = []
        for (i = 0; i < x; i++) {
        let Nombre = prompt("¿Cual es su Nombre?");
        let matricula = prompt("Ingrese su matricula");
        let grupo = prompt("¿De que grupo es?");
        var sexo = prompt("Ingrese su sexo -Masculino- o -Femenino-");
        let calificacion = prompt("Coloca su calificacion");
            var Alumnos = {
                Nombre: Nombre,
                matricula: matricula,
                grupo: grupo,
                sexo: sexo,
                calificacion: calificacion,
            }
        resultado.push(Alumnos)
        }
    
    return resultado;
    }
    var r = prompt("¿Qué opción desea calcular?");
    switch(r){
        case "1":
            console.log(i)
            break;
        case "2":
        var genero = prompt("Ingrese el genero -Masculino- o -Femenino");
        var g = sexo(genero, i);
        console.log("Este es el resultado : " + g)
        break;
    }
    
    function sexo (genero, i){
        let res = 0;
        if (genero.toLowerCase() == "masculino"){
            for (u = 0; u < i.length; u++){
                if (i[u].sexo.toLowerCase() == "masculino"){
                    res = res + 1;
                }
            }
        }
        if (genero.toLowerCase() == "femenino"){
            for (u = 0; u < i.length; u++){
                if (i[u].sexo.toLowerCase() == "femenino"){
                    res = res + 1;
                }
            }
        }
        return res;
    }