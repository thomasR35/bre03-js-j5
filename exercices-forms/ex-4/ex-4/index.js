document.addEventListener("DOMContentLoaded", () => {
  let form = document.getElementById("formEx4");
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    let status = document.getElementById("statusFilter").value;
    let table = document.querySelector("table");
    let rows = table.querySelectorAll("tr");
    for (let row of rows) {
      if (status === "all") {
        row.style.display = "table-row";
      } else {
        if (row.classList.contains(status)) {
          row.style.display = "table-row";
        } else {
          row.style.display = "none";
        }
      }
    }
  });
});
