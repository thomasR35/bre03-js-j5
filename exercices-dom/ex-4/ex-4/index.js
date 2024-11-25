document.addEventListener("DOMContentLoaded", () => {
  let crepe = document.querySelector("#crepe");
  let ex4Btn = document.querySelector("#ex4Btn");

  ex4Btn.addEventListener("click", () => {
    let li = document.createElement("li");
    li.textContent = "Beurre";
    crepe.appendChild(li);
  });
});
