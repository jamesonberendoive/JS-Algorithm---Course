// Algoritmo para calcular la distancia recorrida por un carro que mantenía movimiento constante (d = v x t).
/*
function distance(v, t) {
  if (typeof v === "number" && typeof t === "number") {
    d = v * t;
    return `the distance traveled by the car is ${d} km.`;
  } else {
    return "Please insert valid numbers for v and t.";
  }
}

console.log(distance(29, 4));

// Algoritmo para calcular el tiempo transcurrido por un carro que mantenía movimiento constante desplazandose a un  lugar (t = d / v).
function time(d, v) {
  if (typeof d === "number" && typeof v === "number") {
    t = d / v;
    return `the time traveled by the car is ${t} h.`;
  } else {
    return "Please insert valid numbers for d and v.";
  }
}

console.log(time(50, 10));

// Algoritmo para calcular la velocidad a la recorria un carro que mantenía movimiento constante a cierta distancia a través del tiempo (v = d / t).
function speed(d, t) {
  if (typeof d === "number" && typeof t === "number") {
    v = d / t;
    return `the speed traveled by the car is ${t} km/h.`;
  } else {
    return "Please insert valid numbers for d and t.";
  }
}

console.log(speed(100, 10));

// Algoritmo que me permita escribir un número y muestre la tabla de multiplicar de ese número (1 - 12).
// function multiplicationTable() {
//   let n = prompt("Write a number between 1 and 12:");
//   while (!Number.isInteger(n) || n < 1 || n > 12) {
//     alert("Invalid input! Please write a number between 1 and 12.");
//     n = prompt("Write a number between 1 and 12:");
//   }
//   for (let i = 1; i <= 12; i++) {
//     console.log(`${n} x ${i} = ${n * i}`);
//   }
// }
// multiplicationTable();
function table(number) {
  // Validate that the user inserted a number between 1 and 12 by calling the function table and parse the value
  if (Number.isNaN(number) || number < 1 || number > 12) {
    return "Invalid input! Please enter a number between 1 and 12.";
  }

  // Print out the multiplication table using a loop
  for (let i = 1; i <= 10; i++) {
    let res = i * number;
    console.log(`${number} x ${i} = ${res}`);
  }
}
table(12);
*/

// Algoritmo que me permita escribir un número decimal y me retorne el número convertido en binario.
//(int = 50; out = 110010)
/*
function binaryConversion() {
  let num = parseFloat(prompt("Enter a decimal number:"));
  let result = "";
  while (num >= 1) {
    result += Math.floor(num % 2);
    num = Math.floor(num / 2);
  }
  document.write("<br>" + result);
}
binaryConversion();*/

// Algoritmo que me permita escribir un número y me retorne una lista de números desde 1 hasta el número indicado (int = 5; out = 1, 2, 3, 4, 5).
// giving a number count until that number is reached
/* 
function counting(countNum) {
  for (let i = 1; i <= countNum; i++) {
    console.log(i + " ");
  }
}
counting(10); 
*/

// Algoritmo que me permita escribir un número y me retorne una lista de números desde el número indicado hasta 1 (int = 5; out = 5, 4, 3, 2, 1).
/*
function countingDown(countNum) {
  for (let i = countNum; i >= 1; i--) {
    console.log(i + " ");
  }
}
countingDown(10);
*/

// Algoritmo que me permita escribir un número y me retorne una lista de números desde 1 hasta el número indicado separando pares e impares.
// (int = 5; outOdd = 1, 3, 5; outEven = 2, 4)
/*
function outOdd_outEven(number) {
  var outEven = [];
  var outOdd = [];

  for (var i = 1; i <= number; i++) {
    if (i % 2 === 0) {
      outEven.push(i);
    } else {
      outOdd.push(i);
    }
  }

  return {
    even: outEven,
    odd: outOdd,
  };
}

var numberEntered = parseInt(prompt("Please enter a number:"));
var separatedList = outOdd_outEven(numberEntered);

console.log("outEven:", separatedList.even);
console.log("outOdd:", separatedList.odd);
*/

/***************************** */

// Algoritmo que me permita escribir un número y me retorne una lista de los números primos desde cero hasta el número indicado.
/*
function isPrime(number) {
  if (number <= 1) {
    return false;
  }

  for (var i = 2; i < number; i++) {
    if (number % i === 0) {
      return false;
    }
  }

  return true;
}

function primeNumberList(number) {
  var primeList = [];

  for (var i = 0; i <= number; i++) {
    if (isPrime(i)) {
      primeList.push(i);
    }
  }

  return primeList;
}

var numberEntered = parseInt(prompt("Please digit a number:"));
var primeList = primeNumberList(numberEntered);

console.log("Prime Numbers:", primeList);

*/

/************************************************************************************ */

// Algoritmo visualizar la cantidad de dígitos que se le indique de la sucessión de fibonacci.
// (int = 5; out = 0, 1, 1, 2, 3)
/*
function fibonacciSequenceList(numberOfDigits) {
  var fibonacciSequence = [0, 1];

  while (fibonacciSequence.length < numberOfDigits) {
    var nextNumber =
      fibonacciSequence[fibonacciSequence.length - 1] +
      fibonacciSequence[fibonacciSequence.length - 2];
    fibonacciSequence.push(nextNumber);
  }

  return fibonacciSequence;
}

var numberOfDigits = parseInt(
  prompt("Digit the number of Fibonacci sequence :")
);
var sequence = fibonacciSequenceList(numberOfDigits);

console.log("Sequence of Fibonacci:", sequence);

*/

///////////////////////////////////////////////////////////////////////////////////////////////////////

// Algoritmo para codificar mensajes utilizando Cifrado de César.

function cesarEncrypted(message, mov) {
  var codedMessage = "";

  for (var i = 0; i < message.length; i++) {
    var caracter = message[i];
    var codedCharacter = message.charCodeAt(i);

    // Cesar Encryption applies only to characters
    if (codedCharacter >= 65 && codedCharacter <= 90) {
      caracter = String.fromCharCode(((codedCharacter - 65 + mov) % 26) + 65);
    } else if (codedCharacter >= 97 && codedCharacter <= 122) {
      caracter = String.fromCharCode(((codedCharacter - 97 + mov) % 26) + 97);
    }

    codedMessage += caracter;
  }

  return codedMessage;
}

var originalMessage = prompt("Enter the message to be encrypted:");
var mov = parseInt(prompt("Enter the encrypted movement:"));
var codedMessage = cesarEncrypted(originalMessage, mov);

console.log("Encrypted Message:", codedMessage);
