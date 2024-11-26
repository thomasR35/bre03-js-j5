document.addEventListener("DOMContentLoaded", () => {
  let form = document.getElementById("formEx4");
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    let status = document.getElementById("statusFilter").value;
    console.log(status);
    let table = document.querySelector("table");
    let rows = table.querySelectorAll("tbody tr");
    for (let row of rows) {
      if (status === "all") {
        row.style.display = "grid";
      } else {
        if (row.classList.contains(status)) {
          row.style.display = "grid";
        } else {
          row.style.display = "none";
        }
      }
    }
  });
});
