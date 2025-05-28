function media() {
    AGH = parseFloat(document.getElementById('AGH').value);
    AC = parseFloat(document.getElementById('AC').value);
    AT = parseFloat(document.getElementById('AT').value);

    Media = (AGH * 0.2) + (AC * 0.3) + (AT * 0.5);
    mediaFormatada = Media.toFixed(2); // duas casas decimais

    resposta = "";

    if (Media >= 6) {
        resposta = "Aprovado";
    } else if (Media >= 4) {
        resposta = "de Recuperação";
    } else {
        resposta = "Reprovado";
    }

    document.getElementById("resposta").innerHTML = `Sua média foi de <strong>${mediaFormatada}</strong>, você está <strong>${resposta}</strong>.`;
}