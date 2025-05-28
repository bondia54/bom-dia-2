/*forma ruim!!!*/
function calcular(){
    valor = parseInt(document.getElementById("valor").value);
    resposta = "";

    /*.toString para transformar em String, não um número valor e sim um texto*/
    resposta += (valor*1).toString() + '<br>';
    resposta += (valor*2).toString() + '<br>';
    resposta += (valor*3).toString() + '<br>';
    resposta += (valor*4).toString() + '<br>';
    resposta += (valor*5).toString() + '<br>';
    resposta += (valor*6).toString() + '<br>';
    resposta += (valor*7).toString() + '<br>';
    resposta += (valor*8).toString() + '<br>';
    resposta += (valor*9).toString() + '<br>';
    resposta += (valor*10).toString() + '<br>';

    document.getElementById("resposta").innerHTML = resposta;
}

/*forma melhor!!!*/
function calc(){
    num = parseInt(document.getElementById("num").value);
    resp = "";
    /*número inicial de loop*/
    i=1;

    /*enquanto*/
    while(i<=10){
        resp += (num*i).toString() + '<br>';
        i++;
    }

    document.getElementById("resp").innerHTML = resp;
}