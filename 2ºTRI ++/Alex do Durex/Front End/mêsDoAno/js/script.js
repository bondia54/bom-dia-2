function mes(){
    Mes=parseInt(document.getElementById('mês').value);
    resposta = "";
    switch (Mes) {
        case 1:
            resposta="Janeiro";
            break
        case 2:
            resposta="Fevereiro";
            break
        case 3:
            resposta="Março";
            break
        case 4:
            resposta="Abril";
            break
        case 5:
            resposta="Maio";
            break
        case 6:
            resposta="Junho";
            break
        case 7:
            resposta="Julho";
            break
        case 8:
            resposta="Agosto";
            break
        case 9:
            resposta="Setembro";
            break
        case 10:
            resposta="Outubro";
            break
        case 11:
            resposta="Novembro";
            break
        case 12:
            resposta="Dezembro";
            break
        default:
            resposta="Isso não é um mês seu safado";
            break
    }
    document.getElementById("resposta").innerHTML = resposta;
}