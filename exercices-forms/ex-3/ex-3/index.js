document.addEventListener("DOMContentLoaded", () => {
  let form = document.getElementById("formEx3");
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    let list = document.getElementById("taskList");
    let task = document.getElementById("task").value;
    let li = document.createElement("li");
    li.appendChild(document.createTextNode(task));
    list.appendChild(li);
    document.getElementById("task").value = "";
  });
});
