const ACCESS_PASSWORD = "ejboot";

const overlay = document.getElementById("accessOverlay");
const passwordInput = document.getElementById("bootcampPassword");
const submitButton = document.querySelector(".access-submit");
const errorText = document.getElementById("accessError");
const modal = document.querySelector(".access-modal");

const handleSuccess = () => {
  overlay.classList.add("is-hidden");
  overlay.setAttribute("aria-hidden", "true");
  passwordInput.value = "";
};

const handleError = () => {
  errorText.textContent = "Incorrect password. Please try again.";
  passwordInput.classList.add("is-error");
  modal.classList.remove("shake");
  void modal.offsetWidth;
  modal.classList.add("shake");
};

const validatePassword = () => {
  const attempt = passwordInput.value.trim();
  if (attempt === ACCESS_PASSWORD) {
    errorText.textContent = "";
    passwordInput.classList.remove("is-error");
    handleSuccess();
    return;
  }
  handleError();
};

submitButton.addEventListener("click", validatePassword);
passwordInput.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    validatePassword();
  }
});

passwordInput.addEventListener("input", () => {
  errorText.textContent = "";
  passwordInput.classList.remove("is-error");
});

const classCards = document.querySelectorAll(".class-card");
classCards.forEach((card) => {
  const toggle = card.querySelector(".class-toggle");
  const content = card.querySelector(".class-content");

  toggle.addEventListener("click", () => {
    const isOpen = card.classList.toggle("is-open");
    toggle.setAttribute("aria-expanded", isOpen);
    if (isOpen) {
      content.style.maxHeight = `${content.scrollHeight}px`;
    } else {
      content.style.maxHeight = "0px";
    }
  });
});

window.addEventListener("resize", () => {
  document.querySelectorAll(".class-card.is-open .class-content").forEach((content) => {
    content.style.maxHeight = `${content.scrollHeight}px`;
  });
});
