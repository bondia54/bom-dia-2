function votar() {
    voto = parseInt(document.getElementById('candidato').value)
    switch (voto) {
        case 1:
            alert('voto no aluno 1');
            break;
        case 2:
            alert('voto no aluno 2');
            break;
        case 3:
            alert('voto no aluno 3');
            break;
        default:
            alert('candidato invalido');
            break;
    }
}
