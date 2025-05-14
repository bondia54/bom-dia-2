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
    x = parseInt(document.getElementById('X').value);
    y = parseInt(document.getElementById('Y').value);
    z = parseInt(document.getElementById('Z').value);
    resposta = "";

    if (x < y + z && y < x + z && z < x + y) {
        if (x == y && y == z) {
          resposta = "É um triângulo equilátero, seu animal!";
        } else if (x == y || x == z || y == z) {
            resposta= "É um triângulo isósceles, seu burro! ";
        } else {
            resposta= "É um triângulo escaleno, seu idiota!";
        }
      } else {
        resposta= "Essa porcaria não forma um triângulo, seu retardado!";
      }

    document.getElementById("resposta2").innerHTML = resposta;
}