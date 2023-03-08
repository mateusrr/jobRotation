/*
Dado o valor de faturamento mensal de uma distribuidora, detalhado por estado:

SP – R$67.836,43
RJ – R$36.678,66
MG – R$29.229,88
ES – R$27.165,48
Outros – R$19.849,53

Escreva um programa na linguagem que desejar onde calcule o percentual de representação
que cada estado teve dentro do valor total mensal da distribuidora.
*/

const sp = 67836.43
const rj = 36678.66
const mg = 29229.88
const es = 27165.48
const out = 19849.53
const total = sp + rj + mg + es + out
console.log(total.toFixed(2))

const pSp = (sp/total)*100
const pRj = (rj/total)*100
const pMg = (mg/total)*100
const pEs = (es/total)*100
const pOut = (out/total)*100

console.log('Porcentagem de SP', pSp.toFixed(2),'%')
console.log('Porcentagem de RJ', pRj.toFixed(2),'%')
console.log('Porcentagem de MG', pMg.toFixed(2),'%')
console.log('Porcentagem de ES', pEs.toFixed(2),'%')
console.log('Porcentagem de OUT', pOut.toFixed(2),'%')