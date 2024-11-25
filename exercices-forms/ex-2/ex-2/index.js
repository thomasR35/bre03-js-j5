document.addEventListener("DOMContentLoaded", () => {
  let form = document.getElementById("formEx2");
  form.addEventListener("change", (event) => {
    event.preventDefault();
    let text = document.querySelector("p");
    text.innerHTML = document.getElementById("text").value;
  });
});
