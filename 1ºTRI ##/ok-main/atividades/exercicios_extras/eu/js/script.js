function calcular() {
    valor = document.getElementById("valor").value;
    venda = document.getElementById("vendas").value;
    desconto = "";

    if (venda == "Vista") {
        desconto = (valor * 0.1).toFixed(2);
        final = (valor - desconto).toFixed(2);
    } else if (venda == "30") {
        desconto = (valor * 0.5).toFixed(2);
        final = (valor - desconto).toFixed(2);
    } else if (venda == "60") {
        desconto = (valor * 0).toFixed(2);
        final = (valor - desconto).toFixed(2);
    } else if (venda == "90") {
        desconto = (valor * 0.5).toFixed(2);
        final = (valor + desconto).toFixed(2);
    } else if (venda == "debito") {
        desconto = (valor * 0.8).toFixed(2);
        final = (valor - desconto).toFixed(2);
    } else if (venda == "credito") {
        desconto = (valor * 0.7).toFixed(2);
        final = (valor - desconto).toFixed(2);
    } else {
        desconto = 0;
        final = (valor - desconto).toFixed(2);
    }


    document.getElementById("resposta").innerHTML = `O valor a pagar é R$${final}`
}