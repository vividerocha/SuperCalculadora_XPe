
function soma(a, b){
    return parseFloat(a) + parseFloat(b);
}

function subtracaoAB(a, b){
    return parseFloat(a) - parseFloat(b);
}

function subtracaoBA(a, b){
    return parseFloat(b) - parseFloat(a);
}

function multiplicacao(a, b){
    return parseFloat(a) * parseFloat(b);
}

function divisaoAB(a, b){
    return (parseFloat(a) / parseFloat(b)).toFixed(2);
}

function divisaoBA(a, b){
    return (parseFloat(b) / parseFloat(a)).toFixed(2);
}

function potenciaAB(a, b){
    return (Math.pow(a, b)).toFixed(0);
}

function potenciaBA(a, b){
    return (Math.pow(b, a)).toFixed(0);
}

function raizQuadrada(x){
    return (Math.sqrt(x)).toFixed(2);
}

function fatorial(x){

    if(x === 0 || x === 1){
        return 1;
    }else{
        var resultado = 1;
        for (var i = x; i > 1; i--) {
            resultado = resultado * i;
        }
        return resultado;
    }
}

function porcentagemAB(a, b){
    var num1 = parseFloat(a);
    var num2 = parseFloat(b);
    return Math.round((num2 * 100) / num1);
}

function porcentagemBA(a, b){
    var num1 = parseFloat(a);
    var num2 = parseFloat(b);
    return Math.round((num1 * 100) / num2);
}

function media(a, b){
    var num1 = parseFloat(a);
    var num2 = parseFloat(b);
    return (num1 + num2) / 2;
}

function calcular(){
    
    var a = document.getElementById("primeiroNumero").value;
    var b = document.getElementById("segundoNumero").value;
    
    document.getElementById("resultSoma").innerHTML = soma(a, b);
    document.getElementById("resultSub1").innerHTML = subtracaoAB(a, b);
    document.getElementById("resultSub2").innerHTML = subtracaoBA(a, b);
    document.getElementById("resultMult").innerHTML = multiplicacao(a, b);
    document.getElementById("resultDiv1").innerHTML = divisaoAB(a, b);
    document.getElementById("resultDiv2").innerHTML = divisaoBA(a, b);
    document.getElementById("resultPow1").innerHTML = potenciaAB(a, b);
    document.getElementById("resultPow2").innerHTML = potenciaBA(a, b);
    document.getElementById("resultRaiz1").innerHTML = raizQuadrada(a);
    document.getElementById("resultRaiz2").innerHTML = raizQuadrada(b);
    document.getElementById("resultFat1").innerHTML = fatorial(a);
    document.getElementById("resultFat2").innerHTML = fatorial(b);
    document.getElementById("resultPorc1").innerHTML = porcentagemAB(a, b) + "%";
    document.getElementById("resultPorc2").innerHTML = porcentagemBA(a, b) + "%";
    document.getElementById("resultMedia").innerHTML = media(a, b);
}
