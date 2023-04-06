var num1;
var num2;
var msg;

function operacoes(){
    num1 = parseFloat(prompt("Insira o primeiro número: "));
    num2 = parseFloat(prompt("Insira o segundo número: "));
    alert("Soma: " + somar() 
    + '\n' + "Subtração: " + subtrair()
    + '\n' + "Produto: " + multiplicar()
    + '\n' + "Divisão: " + dividir()
    + '\n' + "Resto: " + resto());
}
function somar(){
    return num1 + num2;
}

function dividir(){
    if(num2 == 0){
        confirm("Não é possível dividir por zero!");
    }else{
        return num1 / num2;
    }
}

function subtrair(){
    return num1 - num2;
}

function multiplicar (){
    return num1 * num2;
}

function resto(){
    if(num2 == 0){
        confirm("Não é possível dividir por zero!");
    }else{
        return num1 % num2;
    }
   
}