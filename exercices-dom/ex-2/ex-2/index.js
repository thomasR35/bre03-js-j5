document.addEventListener("DOMContentLoaded", function () {
  let Btn = document.getElementById("ex2Btn");
  Btn.addEventListener("click", function (event) {
    let text = document.querySelector("h2");
    text.style.color = "var(--purple)";
  });
});
