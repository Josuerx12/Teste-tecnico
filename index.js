// Question 1

/*
  enquanto K < INDICE faça

  {
    K = K + 1;

    SOMA = SOMA + K;
  } 
  
  imprimir(SOMA);

 Ao final do processamento, qual será o valor da variável SOMA?
*/

// Question 1 answer

function quest1(index, sum, k) {
  while (k < index) {
    k = k + 1;
    sum = sum + k;
  }

  return sum;
}

console.log(quest1(13, 0, 0));

// Quest 2

/*
  2) Dado a sequência de Fibonacci, onde se inicia por 0 e 1 e 
  o próximo valor sempre será a soma dos 2 valores anteriores 
  (exemplo: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34...), escreva um 
  programa na linguagem que desejar onde, informado um número, 
  ele calcule a sequência de Fibonacci e retorne uma mensagem 
  avisando se o número informado pertence ou não a sequência.
*/

function quest2(n) {
  let fibSequence = [0, 1];
  while (fibSequence[fibSequence.length - 1] < n) {
    let nextNum =
      fibSequence[fibSequence.length - 1] + fibSequence[fibSequence.length - 2];
    fibSequence.push(nextNum);
  }
  return fibSequence.includes(n);
}

console.log(`Numero pertencente a sequencia de fibonacci:${quest2(34)}`);

// Quest 3

/*
  Descubra a lógica e complete o próximo elemento:
  a) 1, 3, 5, 7, ___
  b) 2, 4, 8, 16, 32, 64, ____
  c) 0, 1, 4, 9, 16, 25, 36, ____
  d) 4, 16, 36, 64, ____
  e) 1, 1, 2, 3, 5, 8, ____
  f) 2,10, 12, 16, 17, 18, 19, ____
*/

const answers = { a: 9, b: 128, c: 49, d: 81, e: 13, f: 20 };

console.log("Quest 3:" + JSON.stringify(answers));

// Quest 4

/* 
  Você está em uma sala com três interruptores, cada um conectado 
  a uma lâmpada em uma sala diferente. Você não pode ver as lâmpadas 
  da sala em que está, mas pode ligar e desligar os interruptores 
  quantas vezes quiser. Seu objetivo é descobrir qual interruptor 
  controla qual lâmpada.

  Como você faria para descobrir, usando apenas duas idas até uma das 
  salas das lâmpadas, qual interruptor controla cada lâmpada? 

*/

console.log(`Ligue um interruptor e aguarde alguns minutos, depois desligue-o. Isso deixa uma lâmpada acesa e as outras duas apagadas.
Ligue um segundo interruptor e entre na sala.
Se a lâmpada estiver acesa, o segundo interruptor a controla.
Se estiver apagada e fria, o primeiro interruptor a controla.
Se estiver apagada e quente, o terceiro interruptor a controla.`);

// Quest 5

/* 
  Escreva um programa que inverta os caracteres de um string.

  IMPORTANTE:
  a) Essa string pode ser informada através de qualquer entrada de sua preferência ou pode ser previamente definida no código;

  b) Evite usar funções prontas, como, por exemplo, reverse;
*/

function inverterString(string) {
  let inverted = "";
  for (let i = string.length - 1; i >= 0; i--) {
    inverted += string[i];
  }
  return inverted;
}

console.log("String invertidas: " + inverterString("josue"));
