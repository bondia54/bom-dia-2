function calcular(){
    tipoCarro = parseInt(document.getElementById('tipoCarro').value);
    distancia = parseInt(document.getElementById('distancia').value);
    diaSemana = parseInt(document.getElementById('diaSemana').value);
    hora = parseInt(document.getElementById('hora').value);
    valorFinal = 0;
    switch (tipoCarro) {
        case 1:
            if(diaSemana == 2 || diaSemana == 3 || diaSemana == 4 || diaSemana == 5 || diaSemana == 6 && hora >= 6 && hora <= 10 || hora >= 17 && hora <= 20){
                valor = distancia * 2.5
                valor = valor + (valor * 0.15) ;
            }else{
                valor =  distancia * 2.5
                valor = valor
            }
            if(hora >= 0 && hora <= 6){
                valor = valor + (valor * 0.2)
            } else{
                valor = valor
            }
            if(diaSemana == 7 || diaSemana == 1 && hora >= 15 && hora <= 17){
                valor = valor - (valor * 0.1)
            } else{
                valor = valor
            }
            if(distancia >= 100){
                valor = valor + 50
            }else{
                valor = valor
            }
            break;
        case 2:
            if(diaSemana == 2 || diaSemana == 3 || diaSemana == 4 || diaSemana == 5 || diaSemana == 6 && hora >= 6 && hora <= 10 || hora >= 17 && hora <= 20){
                valor = distancia * 4.5
                valor2 = valor + (valor * 0.15) ;
            }else{
                valor = distancia * 4.5
                valor2 = valor
            }
            if(hora >= 0 && hora <= 6){
                valor = valor + (valor * 0.2)
            } else{
                valor = valor
            }
            if(diaSemana == 7 || diaSemana == 1 && hora >= 15 && hora <= 17){
                valor = valor - (valor * 0.1)
            } else{
                valor = valor
            }
            if(distancia >= 100){
                valor = valor + 50
            }else{
                valor = valor
            }
            break;
        case 3:
            if(diaSemana == 2 || diaSemana == 3 || diaSemana == 4 || diaSemana == 5 || diaSemana == 6 && hora >= 6 && hora <= 10 || hora >= 17 && hora <= 20){
                valor = distancia * 7.8
                valor2 = valor + (valor * 0.15) ;
            }else{
                valor = distancia * 7.8
                valor2 = valor
            }
            if(hora >= 0 && hora <= 6){
                valor = valor + (valor * 0.2)
            } else{
                valor = valor
            }
            if(diaSemana == 7 || diaSemana == 1 && hora >= 15 && hora <= 17){
                valor = valor - (valor * 0.1)
            } else{
                valor = valor
            }
            if(distancia >= 100){
                valor = valor + 50
            }else{
                valor = valor
            }
            break;
        default:
            break;
    }
    document.getElementById("resposta").innerHTML = `o valor da sua viagem será de R$${valor}`;
}