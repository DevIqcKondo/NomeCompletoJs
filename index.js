var nome = prompt('Digite seu nome: ');
var sobrenome = prompt('Digite seu sobrenome: ');

function showNavigator() {
    document.getElementById("saida").innerHTML = 'Nome Completo: ' + nome + ' ' + sobrenome + '<br>' + '<br>' + 'Nome Catalago: ' + sobrenome.toUpperCase() + ' ' + nome;

}
