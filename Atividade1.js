// Desenvolvimento de código para o cadastro de participantes.

var readlineSync = require('readline-sync'); // Declaração da variável e Instalação do pacote para que o sistema exija a entrada manual de dados pelo usuário.
var dataAtual = 24062022; // Data em que o projeto foi desenvolvido.
var quantidadeConvidados = 0; // Declaração da variável a respeito da quantidade de pessoas cadastradas em cada evento disponível.

console.log ('----------------------------------------------');

console.log ('Bem vindo ao cadastramento online de palestras!'); // Apresentação de uma mensagem de boas vindas ao aplicativo.

var dataInformada = (readlineSync.question ('Informe a data da palestra de seu interesse: ')); // Declaração e armazenamento de um valor inserido manualmente pelo usuário.

if (dataInformada > dataAtual) // Teste de condição para verificar a disponibilidade do evento.
    {
    console.log ('----------------------------------------------');
    console.log ('A palestra escolhida está liberada! Siga em frente!'); // Mensagem enviada caso a condição seja satisfeita.}
    var idadeConvidado = (readlineSync.question ('Por favor, digite a sua idade: ')); // Declaração e armazenamento de um valor inserido manualmente pelo usuário.

        if(idadeConvidado >= 18)
            {
            console.log ('----------------------------------------------');
            console.log ('Você tem idade permitida para participar'); // Mensagem caso a condição de idade seja verdadeira.
                quantidadeConvidados ++;
                if(quantidadeConvidados < 100) // Caso fosse <=100, o programa entraria no loop com o convidado 100, aceitaria a condição e teríamos 101 participantes.
                    {
                    console.log ('----------------------------------------------');
                    console.log ('A palestra escolhida ainda tem vaga. Parabéns, você já está participando do evento!'); // Mensagem caso a condição de capacidade seja verdadeira.
                    }
                else{
                    console.log ('----------------------------------------------');
                    console.log ('Infelizmente a palestra já atingiu a sua capacidade máxima. Por favor, tente outra opção.'); // Mensagem caso a condição de capacidade seja falsa.
                    }
            }
        else{
            console.log ('----------------------------------------------');
            console.log ('Infelizmente você não atende aos requisitos de idade mínima.'); // Mensagem caso a condição de idade seja falsa.
            }
    }
else{
    console.log ('----------------------------------------------');
    console.log ('Infelizmente, a data informada já expirou. Por favor, escolha outra opção'); // Mensagem caso a condição de data seja falsa.
    }
    console.log ('----------------------------------------------');
    