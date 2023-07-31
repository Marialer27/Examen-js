
function addDigits(num) {
  let sum = 0;
  // Convertimos el número en una cadena
  const numStr = num.toString(); 
  //recorremos el arreglo y sumamos los valores
  for (let i = 0; i < numStr.length; i++) {
    sum += parseInt(numStr[i]);
  }
  return sum;
}

function multipleOfThree(num) {
  while (num >= 10) {
    num = addDigits(num);
  }
  return num === 3 || num === 6 || num === 9;
}