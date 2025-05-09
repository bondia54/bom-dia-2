function Triangulo(){
    lado = parseInt(document.getElementById('Casos').value);
    resposta = "";

    switch (lado) {
        case 1:
            resposta = "Triângulo Équilátero";
            break;
        case 2:
            resposta = "Triângulo Isósceles";
            break;
        case 3:
            resposta = "Triângulo Escaleno";
            break;
        default:
            resposta = "Triângulo inválido";
            break;
    }

    document.getElementById("resposta").innerHTML = resposta;
}

function Triângulo(){
    LadoX = parseInt(document.getElementById('X').value);
    LadoY = parseInt(document.getElementById('Y').value);
    LadoZ = parseInt(document.getElementById('Z').value);
    resposta = "";

    if(LadoX == LadoY == LadoZ){
        resposta = "Triângulo Equilátero"
    }else if(LadoX == )

    document.getElementById("resposta").innerHTML = resposta;
}