function calcular(){
    let saldo = parseFloat(document.getElementById('Saldo').value);
    let emprestimo = 0;
    let resposta = "";

    if (isNaN(saldo)) {
        resposta = "Saldo inválido. Digite um número.";
    } else if (saldo < 0) {
        resposta = "Saldo negativo. Digite um valor positivo.";
    }
    else {
        if(saldo <= 1300){
            emprestimo = saldo + (0.2 * saldo);
        } else if (saldo <= 3000){
            emprestimo = saldo + (0.3 * saldo);
        } else if (saldo <= 8000){
            emprestimo = saldo + (0.45 * saldo);
        } else if (saldo <= 10000){
            emprestimo = saldo + (0.5 * saldo);
        } else{
            emprestimo = saldo + (0.6 * saldo);
        }
        resposta = `Seu empréstimo é de ${emprestimo.toFixed(2)}`;
    }
   
    document.getElementById("resposta").innerHTML = resposta;
}