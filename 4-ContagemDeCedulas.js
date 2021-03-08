/* Desafio Contagem de Cédulas

Esse algoritmo executa a leitura de um valor inteiro. Em seguida, calcula o menor número de notas possíveis (cédulas), 
onde o valor pode ser decomposto. As notas consideradas são de 100, 50, 20, 10, 5, 2 e 1.

O algoritmo recebe um valor inteiro N (0 < N < 1000000).
O valor é exibido e a quantidade mínima de notas de cada tipo necessárias,
seguindo o exemplo de saída abaixo. Após cada linha deve ser imprimido o fim de linha.

576 (valor inteiro)
5 nota(s) de R$ 100,00
1 nota(s) de R$ 50,00
1 nota(s) de R$ 20,00
0 nota(s) de R$ 10,00
1 nota(s) de R$ 5,00
0 nota(s) de R$ 2,00
1 nota(s) de R$ 1,00
*/


//Valor recebido
let valor = parseInt(gets());

//Vetor com cédulas possíveis
let notas = [100, 50, 20, 10, 5, 2, 1];

//Vetor para dividir o valor por cédulas
let quantidadenotas = [0, 0, 0, 0, 0, 0, 0];

//Valor para ser divido por cédulas até restar 0
let resto = valor;


//Processamento
while (resto >= 1){
  nota = notas.findIndex(value => value <= resto);
  quantidadenotas[nota] = Math.trunc(resto / notas[nota]);
  resto = resto % notas[nota];
}


//Exibição do valor seguindo o padrão [X nota(s) de R$ Y,00]
console.log(valor);
for (i=0; i <= 6; i++){
  console.log(quantidadenotas[i] + " nota(s) de R$ " + notas[i] + ",00");
}

/*
console.log(quantia);
console.log(quantidadenotas[0] + " nota(s) de R$ 100,00");
console.log(quantidadenotas[1] + " nota(s) de R$ 50,00");
console.log(quantidadenotas[2] + " nota(s) de R$ 20,00");
console.log(quantidadenotas[3] + " nota(s) de R$ 10,00");
console.log(quantidadenotas[4] + " nota(s) de R$ 5,00");
console.log(quantidadenotas[5] + " nota(s) de R$ 2,00");
console.log(quantidadenotas[6] + " nota(s) de R$ 1,00");
*/
