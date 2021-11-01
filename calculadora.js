var calculadora = prompt("¿Que quiere realizar?");

switch (calculadora){
    case "suma":
    suma();
    break;
    case "resta":
    resta();
    break;
    case "multiplicacion":
        multiplicacion();
    break;
    case "division":
    division();
    break;

}

function suma (){
    let num1 = 10;
    let num2 = 5;
    let j = num1 + num2;

    console.log(j);
}

function resta (){
    let num1 = 10;
    let num2 = 5;
    let a = num1 - num2;

    console.log(a);
}

function multiplicacion (){
    let num1 = 10;
    let num2 = 5;
    let u = num1 * num2;
    console.log(u);
}

function division (){
    let num1 = 10;
    let num2 = 5;
    let n = num1 / num2;
    console.log(n);

}