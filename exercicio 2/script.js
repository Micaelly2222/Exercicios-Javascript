var num = parseInt(prompt("Digite um número: "));

if ((num >= 10 && num <= 15) || (num >= 25 && num <= 40)) {
    document.write("NÚMERO INVÁLIDO " + num);
} else {
    document.write("NÚMERO DIGITADO CORRETAMENTE " + num);
}
