import validator from './validator.js';
const number = document.getElementById("card-number");
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
  const currentValue = e.target.value;
  e.target.value = currentValue.replace(/[^0-9]/g, "");
});


submitButton.addEventListener("click", (e) => {
  const hashedNumber = validator.maskify(number.value);

  e.preventDefault();
  if(validator.isValid(number.value)){
    maskifiedCardNumber.innerText = hashedNumber;
    showModal();
  }else{
    alert("El número ingresado en incorrecto. Por favor, ingresa un número de tarjeta válido.")
  }
})

acceptButton.addEventListener("click", (e) => {
  location.reload(e);
})