/*
Dado um vetor que guarda o valor de faturamento diário de uma 
distribuidora, faça um programa, na linguagem que desejar,
que calcule e retorne:
    • O menor valor de faturamento ocorrido em um dia do mês;
    • O maior valor de faturamento ocorrido em um dia do mês;
    • Número de dias no mês em que o valor de faturamento diário foi superior
    à média mensal.

IMPORTANTE:
    a) Usar o json ou xml disponível como fonte dos dados do faturamento
    mensal;
    b) Podem existir dias sem faturamento, como nos finais de semana e feriados.
    Estes dias devem ser ignorados no cálculo da média;
*/

//importando dados.json
const dados = require('./dados.json')

//usando filter() para ter apenas os dias em que tiveram faturamento.
const diasComFaturamento = dados
    .filter(dados => (dados.valor > 0))

//reduce() para calcular o total de faturamento.
const total = dados.reduce((diasComFaturamento, item) => diasComFaturamento + item.valor, 0)

//cálculo da média mensal.
const media = total / diasComFaturamento.length

//cálculo do maior faturamento em um dia.
const maiorFaturamento = dados.reduce((inicial, atual) => 
    inicial.valor > atual.valor ? inicial : atual) 

//cálculo do menor faturamento em um dia.
const menorFaturamento = diasComFaturamento
    .reduce((inicial, atual) =>
        inicial.valor > 0 && inicial.valor < atual.valor ? inicial : atual)

//cálculo de faturamento maior que a média
const faturamentoMaiorQueMedia = dados
    .filter(dados => (dados.valor > media))

console.log('Menor faturamento do mês:', menorFaturamento)
console.log('Maior faturamento obtido em um dia do mês:', maiorFaturamento)
console.log('Média do mês:', media.toFixed(2))
console.log('Maior faturamento que a média:', faturamentoMaiorQueMedia)