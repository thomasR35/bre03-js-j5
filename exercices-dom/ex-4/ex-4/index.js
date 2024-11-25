document.addEventListener("DOMContentLoaded", () => {
  let crepe = document.getElementById("crepe");
  let ex4Btn = document.getElementById("ex4Btn");

  ex4Btn.addEventListener("click", () => {
    let li = document.createElement("li");
    li.document.createTextNode = "Beurre";
    crepe.appendChild(li);
  });
});
