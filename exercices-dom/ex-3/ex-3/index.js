document.addEventListener("DOMContentLoaded", () => {
  let Btn = document.getElementById("ex3Btn");
  Btn.addEventListener("click", () => {
    let grid = document.getElementById("grid");
    grid.classList.toggle("grid-3");
  });
});
