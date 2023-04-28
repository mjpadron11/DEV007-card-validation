const validator = {
  isValid(cardNumber){
  //El string se pasa a array y luego se invirtió el orden
    const arrayAlReves = cardNumber.split("").reverse();
    //Se filtró cada número con índice impar
    const filteredArray = arrayAlReves.filter((num, i) => i %  2 !== 0)
    //Se multiplicó cada número filtrado x2
    const multipliedArray = filteredArray.map(num => num * 2)
    //Se filtró nuevamente cada número para devolver un array con dos arrays de dos posiciones a través de una apróximación al número entero menor en la primaera posición y un residuo de la segunda posición
    const numbersDividido = multipliedArray.map(num => [Math.floor(num / 10), num % 10])
    //Se sumó cada posición de ambos arrays comenzando desde el 0, la posición [0] siendo el 1 y la posición [1] siendo el 6
    const suma = numbersDividido.reduce((acumulador, valorActual) => acumulador + valorActual[0] + valorActual[1], 0);
    //Se filtran los números restantes del array invertido
    const filteredEvenArray = arrayAlReves.filter((num, i) => i % 2 === 0)
    //Se convierte el array de string a array de numeros
    const convertirANumero = filteredEvenArray.map(num => Number(num))
    //Se crea una copia del array ConvertirNumero
    const finalArray = [...convertirANumero, suma].reduce((acumulador, valorActual) => acumulador + valorActual, 0)
    //Verifica que el resultado es un multiplo de 10
    return finalArray % 10 === 0;
  },

  maskify(cardNumber) {
    if(cardNumber.length <= 4) return cardNumber
    //Se verifica la longitud de la información introducida
    const cardLength = cardNumber.length;
    //Se cortan los últimos 4 números de la tarjeta
    const lastDigits = cardNumber.slice(cardLength - 4, cardLength);
    //Se hashean el resto de los números
    const hash = '#'.repeat(cardLength - 4);
    //Se concatenan los números hasheados y los últimos 4 números que siguen visibles
    return hash + lastDigits;
  }
}

export default validator