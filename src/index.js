import validator from './validator.js';
const number = document.getElementById("card-number");
const cardName = document.getElementById("card-name");
const cardLastName = document.getElementById("card-lastname");
const cardExp = document.getElementById("card-exp");
const cardCode = document.getElementById("card-code");
const submitButton = document.getElementById("button");
const modalWindow = document.getElementById("modal-body");
const acceptButton = document.getElementById("modal-button");
const form = document.getElementById("form")
const maskifiedCardNumber = document.getElementById("maskified-card-number");

function showModal() {
  modalWindow.style.display = "flex";
  form.style.filter = "blur(10px)";
}

number.addEventListener("input", (e) => {
  e.target.value = e.target.value.replace(/[^0-9]/g, "");
});

submitButton.addEventListener("click", (e) => {
  const hashedNumber = validator.maskify(number.value);
  const isAnyValueEmpty = number.value && cardName.value && cardLastName.value && cardExp.value && cardCode.value
  e.preventDefault();
  if (!isAnyValueEmpty) {
    alert("Por favor, completa todos los campos.");
    return;
  }else{
    if(validator.isValid(number.value)){
      maskifiedCardNumber.innerText = hashedNumber;
      showModal();
    }else{
      alert("El número ingresado en incorrecto. Por favor, ingresa un número de tarjeta válido.")
    }
  }
})

acceptButton.addEventListener("click", (e) => {
  location.reload(e);
})