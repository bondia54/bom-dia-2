function calcular(){
    saldo = parseFloat(document.getElementById('Saldo').value);
    emprestimo = 0;
    resposta = "";

    if (saldo < 0) {
        resposta = "Saldo negativo. Digite um valor positivo.";
    }
    else {
        if(saldo <= 1300){
            emprestimo =(0.2 * saldo);
        } else if (saldo <= 3000){
            emprestimo =(0.3 * saldo);
        } else if (saldo <= 8000){
            emprestimo =(0.45 * saldo);
        } else if (saldo <= 10000){
            emprestimo =(0.5 * saldo);
        } else{
            emprestimo =(0.6 * saldo);
        }
        resposta = `Seu empréstimo é de R$${emprestimo.toFixed(2)}`;
    }
   
    document.getElementById("resposta").innerHTML = resposta;
}