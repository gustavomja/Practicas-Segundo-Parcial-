var sumaA = 0; 
    var sumaE = 0;
    var sumaI = 0;
    var sumaO = 0;
    var sumaU = 0;
    var h = prompt("Escriba una frase");
    var total;
    
    for (var g = 1; g<=5; g++){
        switch(h){
            case "a":
                sumaA = sumaA + 1;
            break;
            case "e": 
                sumaE = sumaE + 1;
            break;
            case "i":
                sumaI = + sumaI + 1;
            break;
            case "o":
                sumaO = sumaO + 1;
            break;
            case "u":
                sumaU = sumaU + 1;
            break;
        }
        total = h + g;
        console.log(" Vocales y la suma de estas "+ h + total);
    }