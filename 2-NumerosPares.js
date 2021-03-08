/*
Esse algoritmo é responsável por ler um número e mostrar todos os números pares antes dele,
Inclusive ele mesmo.

Valor 6 - números pares: 2 - 4 - 6

*/

//Leitura do número
let N = gets();

/* Processamento do número
    Contador inicia em 2, verifica se esse valor é menor que o número e após a verificação, acrescenta mais dois. 
    Em seguida, exibe no console, o número par sucessor
    O laço termina quando o contador par é maior que o valor a ser processado

    Valor 6
    - 2
    - 4
    - 6

*/

for(par = 2; par <= N; par+=2){
  console.log(par);
}

