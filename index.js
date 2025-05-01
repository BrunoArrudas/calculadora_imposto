let salarioBruto = parseFloat(('Informe o salario bruto: '));

let inssFaixa1Inicio = 0;
let inssFaixa1Fim = 1_518.00;
let inssFaixa1Aliquota = 7.5;

let faixa1 = {
    inicio: 0,
    fim: 1_518.00,
    aliquota: 0.075
}

let faixa2 = {
    inicio: 0,
    fim: 1_518.00,
    aliquota: 0.075
}

let faixa3 = {
    inicio: 1_518.00,
    fim: 1_518.00,
    aliquota: 0.075
}

let faixa4 = {
    inicio: 0,
    fim: 1_518.00,
    aliquota: 0.075
}

let tabelaINSS = [faixa1, faixa2, faixa3, faixa4]; 

console.table = (tabelaINSS);

for (let i = 0; i < tabelaINSS.length; i++){
    const faixa = tabelaINSS[i];
    if(salarioBruto >=faixa.inicio && salarioBruto <= faixa.fim){
        faixaEncontrada =faixa;
        break;
    }
}