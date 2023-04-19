import validator from './validator.js';
const numberInput = document.getElementsByClassName("number");
const number = document.getElementById("card-number");
const name = document.getElementById("card-name");
const lastname = document.getElementById("card-lastname");
const code = document.getElementById("card-code");
const submitButton = document.getElementById("button");

const cardInfo = {
  numberInputs: numberInput.value,
  number: number.value,
  name: name.value,
  lastname: lastname.value,
  code: code.value
}

console.log(cardInfo);

//Función para que sólo puedan ingresarse números en el input
number.addEventListener("input", (e) => {
  const currentValue = e.target.value;
  e.target.value = currentValue.replace(/[^0-9]/g, "");
});


submitButton.addEventListener("click", (e) => {
  e.preventDefault();
  console.log(validator.isValid(number.value))
  if(validator.isValid(number.value)){
    console.log(validator.maskify(number.value))
    alert("El número es correcto. La información se ha guardado.")
  }else{
    alert("El número ingresado en incorrecto. Por favor, ingresa un número de tarjeta válido.")
  }

})

// console.log(validator);





