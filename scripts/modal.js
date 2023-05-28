var modal = document.getElementById("purchase-modal");

var openButtons = document.querySelectorAll(".product-card__buy-button");

var closeButton = document.getElementById("modal__close-button");

var submitForm = document.querySelector(".modal__form");

const closeModal = () => {
  modal.classList.add("hidden");
};

const openModal = () => {
  modal.classList.remove("hidden");
};

const submitInfo = () => {
  setTimeout(() => alert("Информация о заказе была успешна отправлена!"), 0.1);
};

submitForm.addEventListener('submit', function(event) {
  event.preventDefault();
  closeModal();
  submitInfo();
  submitForm.reset();
});

for (var i = 0; i < openButtons.length; i++) {
    openButtons[i].addEventListener("click", openModal);
};

closeButton.addEventListener("click", closeModal);

window.onclick = function(event) {
  if (event.target == modal) {
    closeModal();
  }
};