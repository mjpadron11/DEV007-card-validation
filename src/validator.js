const validator = {
  isValid(cardNumber){
  //Se convirtió el string en array y luego se invirtió el orden
    const arrayAlReves = cardNumber.split("").reverse();
    //Se filtró cada número con índice impar
    const filteredArray = arrayAlReves.filter((num, i) => i %  2 !== 0)
    //Se multiplicó cada número filtrado x2
    const multipliedArray = filteredArray.map(num => num * 2)
    //Se filtró cada número superior a 10 y que fuera positivo
    // const filteredArray2 = multipliedArray.filter(num => num || num >= 10)
    //Se filtró nuevamente cada número para devolver un array con dos arrays de dos posiciones a través de una apróximación al número entero menor en la primaera posición y un residuo de la segunda posición
    const numbersDividido = multipliedArray.map(numero => [Math.floor(numero / 10), numero % 10])
    //Se sumó cada posición de ambos arrays comenzando desde el 0, la posición [0] siendo el 1 y la posición [1] siendo el 6
    const suma = numbersDividido.reduce((acumulador, valorActual) => acumulador + valorActual[0] + valorActual[1], 0);
    //Se filtran los números restantes del array invertido
    const filteredOddArray = arrayAlReves.filter((num, i) => i % 2 === 0)
    //Se convierte el array de string a array de numeros
    const convertirANumero = filteredOddArray.map(num => Number(num))
    const finalArray = [...convertirANumero, suma].reduce((acumulador, valorActual) => acumulador + valorActual, 0)
    //Verifica que el resultado es un multiplo de 10
    return finalArray % 10 === 0;

    // console.log(arrayAlReves);
    // console.log(filteredArray)
    // console.log(multipliedArray)
    // console.log(numbersDividido)
    // console.log(filteredOddArray)
    // console.log(convertirANumero)
    // console.log(finalArray)
  },

  maskify(cardNumber) {
    const cardLength = cardNumber.length;
    const lastDigits = cardNumber .slice(cardLength - 4, cardLength);
    const hash = '#'.repeat(cardLength - 4);
    return hash + lastDigits;
  }
}

export default validator