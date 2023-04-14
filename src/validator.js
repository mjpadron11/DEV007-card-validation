// import { cardInfo } from "./index";
// console.log("🚀 ~ file: validator.js:2 ~ cardInfo:", cardInfo)



const validator = {
  isValid(numTarjeta){
    const arrayNumber = numTarjeta.toString().split(",").reverse();
    for (let i = 0; i < arrayNumber.length; i+=2){
      if(arrayNumber >= 2){
        arrayNumber.split("").reduce((a,b) => a + b, 0)
      }
    }
  }
};


// Pasar el string introducido a través del input a array



// aplicamos condiciones
// const cardNumberArray = cardInfo.number.split("");
// console.log(cardNumberArray);
//Como introducir los numeros a un array a traves de un input
//Revertir el array
//Multiplicar por 2 cada indice par, se debe agregar un primer indice para que este no comience en 0
//Sumar los numeros doblados si estos son de dos cifras
//Sumar todo y confirmar si el resultado es un multiplo de 10

//Es una función que debe devolver un booleano, la funcion recibe un parametro en este caso el input,
// isValid: () => {
//   const validCard = Array.from(cardNumber);
// },




export default validator;
