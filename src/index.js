// import validator from './validator.js';
const numberInput = document.getElementsByClassName("number");
// const cardNumber = document.getElementById("card-number");
const cardName = document.getElementById("card-name");
const cardLastname = document.getElementById("card-lastname");
// const cardexpiration = document.getElementById("card-exp");
const cardCode = document.getElementById("card-code");
const submitButton = document.getElementById("button");
// console.log(cardNumber);

const cardInfo = {
  numberInputs: numberInput,
  // number: cardNumber,
  name: cardName,
  lastname: cardLastname,
  // expiration: cardexpiration,
  code: cardCode
}

// console.log(cardInfo.numberInputs);

//Función para que sólo puedan ingresarse números en el input
for (const input of cardInfo.numberInputs) {
  // console.log(input);

  input.addEventListener("input", (e) => {
    const currentValue = e.target.value;
    e.target.value = currentValue.replace(/[^0-9]/g, "");
  });
}

submitButton.addEventListener("click", () => {
  // e.preventDefault(e);
  console.log(numberInput[0].value);
})




// console.log(validator);


// e.preventdefault para evitar que la página se refresque cuando se de click a confirmar