/*  
Esse algoritmo é responsável por ler 5 valores inteiros. Em seguida exibe quantos 
valores informados são pares, quantos valores informados são ímpares, 
quantos valores informados são positivos e são negativos.

Exemplo--
Números: -5, 0, -3, -4, 12  
3 valor(es) par(es)
2 valor(es) impar(es)
1 valor(es) positivo(s)
3 valor(es) negativo(s)

*/

//Vetor de 5 posições para guardar os números de entrada
let valores = [5];


//Processamento dos números de entrada guardando os no vetor Valores[]
for(i = 0; i < 5; i++){
  valores[i] = parseFloat(gets());
}

//Filtro para verificar o resto do valor divido por 2, caso seja 0, esse número é par
//Caso resto seja 1, esse número é impar
pares = valores.filter(value => value % 2 == 0);
impares = valores.filter(value => value % 2 != 0);

//Exibir a quantidade de valores pares e ímpares
console.log(pares.length + " valor(es) par(es)");
console.log(impares.length + " valor(es) impar(es)");

//Filtro para verificar se o número é maior que zero (positivo) ou menor que zero (negativo)
positivos = valores.filter(value => value > 0);
negativos = valores.filter(value => value < 0);

//Exibir a quantidade de valores positivos e negativos
console.log(positivos.length + " valor(es) positivo(s)");
console.log(negativos.length + " valor(es) negativo(s)");