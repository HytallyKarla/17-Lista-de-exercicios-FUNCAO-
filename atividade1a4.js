/*1. Crie uma função que pergunte o nome e o salário de um
colaborador;
2. Depois crie uma função que irá calcular o aumento de salário
conforme a seguinte tabela:
ATÉ R$1.500,00 : aumento de 20%
R$1.501,00 até R$2.000,00 : aumento de 15%
R$2.001,00 até R$3.000,00 : aumento de 10%
R$3.001,00 em diante : aumento de 5%
Essa função tem que receber dois parâmetros: o salário e a %
de aumento. E retornar o valor do salário já com o aumento.
3. Depois de calcular o aumento você deve exibir: o nome do
colaborador, o salário, a % de aumento e o salário reajustado.
4. Crie uma função que pergunte se o usuário deseja calcular
novamente com novas informações.*/

var nome 
var salario 
var aumento
var porcentagemAumento

function CadastrarUsuario() {
    nome = prompt("insira seu nome")
    salario = parseFloat(prompt("insira seu salario"))
    if(salario <= 1500){
        aumento = 1.20
        porcentagemAumento = "20%"
    }else if (salario > 1500 && salario >= 2000){
        aumento = 1.15
        porcentagemAumento = "15%"
    }else if (salario > 2000 && salario <= 3000){
        aumento = 1.10
        porcentagemAumento = "10%"
    }else {
        aumento = 1.05
        porcentagemAumento = "5%"
    }
}

function CalcularAumento(salario, aumento){
    var salarioAumento = salario * aumento
    return salarioAumento
}
console.log("seu nome é" + nome + "seu salário atual: " + salario + " você receberá: " + porcentagemAumento + " de aumento e seu salário reajustado será de: " + CalcularAumento(salario, aumento))