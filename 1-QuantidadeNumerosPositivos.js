/*
Esse algoritmo é responsável por ler 6 valores. É possível receber valores negativos e/ou positivos como entrada, 
devendo desconsiderar os valores nulos. Após o processamento, a quantidade de valores positivos é contado.

X valores positivos

*/

//Vetor de números guardados
let numeros = [];

//Contagem de números positivos
let positivos = 0;


//Processamento dos dados
for(i = 0; i < 6; i++){
  numeros[i] = parseFloat(gets());

  //Se número > 0 - Esse número é positivo!
  if(numeros[i] > 0 ){
    positivos = positivos + 1;
  }
}

//Exibindo a quantidade de números positivos contados
console.log(positivos + " valores positivos");