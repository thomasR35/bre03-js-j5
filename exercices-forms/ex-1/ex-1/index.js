document.addEventListener("DOMContentLoaded", () => {
  let form = document.getElementById("formEx1");
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    alert("Formulaire envoyé !");
  });
});
