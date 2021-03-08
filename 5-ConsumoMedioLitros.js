/*
Esse algoritmo calcula o consumo médio de um automóvel onde será informada 
a distância total percorrida (em Km) e o total de combustível consumido (em litros).

Entrada de um valor inteiro X com a distância total percorrida (em Km), e um valor real Y que 
representa o total de combustível consumido, com um dígito após o ponto decimal.


Exiba o valor que representa o consumo médio do automóvel (3 casas após a vírgula), incluindo no final a mensagem "km/l".

X: 500
Y: 35.0
Valor: 14.286 km/l

O consumo médio deve ser exibido com 3 casas decimais

Calculo 
KM / L = KM/L

Saída:  consumomedio km/l
*/


let km = parseInt(gets());
let litros = parseFloat(gets());
let consumomedio = 0;

//Calculo 
consumomedio = km / litros;

console.log(consumomedio.toFixed(3) + " km/l");



