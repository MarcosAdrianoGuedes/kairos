const menuMobile = document.getElementById("menuMobile");
const navbar = document.querySelector(".navbar");

if (menuMobile && navbar) {
  menuMobile.addEventListener("click", () => {
    navbar.classList.toggle("open");

    if (navbar.classList.contains("open")) {
      menuMobile.textContent = "✕";
    } else {
      menuMobile.textContent = "☰";
    }
  });
}

const newsletterForm = document.querySelector(".newsletter form");

if (newsletterForm) {
  newsletterForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const emailInput = newsletterForm.querySelector("input");

    if (!emailInput.value.trim()) {
      alert("Digite seu e-mail para receber novidades.");
      return;
    }

    alert("E-mail cadastrado com sucesso!");
    emailInput.value = "";
  });
}