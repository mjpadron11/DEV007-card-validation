import validator from './validator.js';
const numberInput = document.getElementsByClassName("number");
const number = document.getElementById("card-number");
const name = document.getElementById("card-name");
const lastname = document.getElementById("card-lastname");
const code = document.getElementById("card-code");
const submitButton = document.getElementById("button");
const modalWindow = document.getElementById("modal-body");
const modal = document.getElementById("modal-container");
const acceptButton = document.getElementById("modal-button");
const maskifiedCard = document.getElementById("maskified-card");

const cardInfo = {
  numberInputs: numberInput.value,
  number: number.value,
  name: name.value,
  lastname: lastname.value,
  code: code.value
}

console.log(cardInfo);

function showModal() {
  modalWindow.style.display = "block";
  modal.style.display = "flex";
  maskifiedCard.style.display = `Tarjeta n ${validator.maskify(number.value)}`
}

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
    showModal();
  }else{
    alert("El número ingresado en incorrecto. Por favor, ingresa un número de tarjeta válido.")
  }
})

acceptButton.addEventListener("click", (e) => {
  location.reload(e);
})