import validator from './validator.js';
const numberInput = document.getElementsByClassName("number");
const number = document.getElementById("card-number");
const name = document.getElementById("card-name");
const lastname = document.getElementById("card-lastname");
const code = document.getElementById("card-code");
const submitButton = document.getElementById("button");
// console.log(cardNumber);

const cardInfo = {
  numberInputs: numberInput.value,
  number: number.value,
  name: name.value,
  lastname: lastname.value,
  code: code.value
}

console.log(cardInfo);

//Función para que sólo puedan ingresarse números en el input



// for (const input of numberInput) {
//   // console.log(input);

number.addEventListener("input", (e) => {
  const currentValue = e.target.value;
  e.target.value = currentValue.replace(/[^0-9]/g, "");
});


submitButton.addEventListener("click", (e) => {
  e.preventDefault();
  validator.isValid(number.value);
  console.log(validator);
})






