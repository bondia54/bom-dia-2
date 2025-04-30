function efetuarLogin(){
    usuario = document.getElementById('usuario').value;
    senha = document.getElementById('senha').value;

    if(usuario == 'admin' && senha == '1234'){
        alert('Entra logo nisso.')
    } 
    else{
        alert('se não foi, 70 de novo.')
    }
    
} 

function calcularDesconto(){
    valorCompra=parseFloat(document.getElementById('valorCompra').value);
    cupom=document.getElementById('cupomDesc').value;
    desconto=0

    if(valorCompra>100 || cupom=='DESCONTO20'){
        desconto=valorCompra*0.2;
    }
    valorFinal=valorCompra-desconto;
    alert(`valor Final: R$${valorFinal}`);
}