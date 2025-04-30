function calcular() {
    var valor = parseFloat(document.getElementById("valor").value);
    var codigo = parseInt(document.getElementById("codigo").value);
    var total = 0;
    var descricao = "";
    if (codigo === 1) {
        total = valor * 0.9;
        descricao = "À Vista (10% de desconto)";
    }
    if (codigo === 2) {
        total = valor * 0.95;
        descricao = "Prazo 30 dias (5% de desconto)";
    }
    if (codigo === 3) {
        total = valor;
        descricao = "Prazo 60 dias (sem desconto)";
    }
    if (codigo === 4) {
        total = valor * 1.05;
        descricao = "Prazo 90 dias (5% de acréscimo)";
    }
    if (codigo === 5) {
        total = valor * 0.92;
        descricao = "Cartão de Débito (8% de desconto)";
    }
    if (codigo === 6) {
        total = valor * 0.93;
        descricao = "Cartão de Crédito (7% de desconto)";
    }
    document.getElementById("resultado").innerHTML =
        "Condição escolhida: " + descricao + "<br>Total da venda: R$ " + total.toFixed(2);
}