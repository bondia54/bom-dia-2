function media(){
    nota1 = parseFloat(document.getElementById('nota1').value);
    nota2 = parseFloat(document.getElementById('nota2').value);
    Media = (nota1 + nota2)/2;

    dadas = parseFloat(document.getElementById('aulasDadas').value);
    assistidas = parseFloat(document.getElementById('Assistidas').value);
    freq = (assistidas/dadas) *100;
    resposta = "";

    if(Media > 7 && freq >= 75){
        resposta = `boa, passou com nota ${Media} e com uma frequência de ${freq}% nas aulas.`;
    } else {
        resposta = `Puts, tu nâo passou com nota ${Media} e com uma frequência de ${freq}% nas aulas.`;
    }
    document.getElementById("resposta").innerHTML = resposta;
    


}