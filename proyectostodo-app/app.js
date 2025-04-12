document.addEventListener("DOMContentLoaded", () => {
  const taskForm = document.getElementById("task-form");
  const taskInput = document.getElementById("task-input");
  const taskList = document.getElementById("task-list");

  taskForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const taskText = taskInput.value.trim();
    if (taskText !== "") {
      const li = document.createElement("li");
      li.innerHTML = `
        <span>${taskText}</span>
        <button class="delete-btn">Eliminar</button>
      `;

      li.querySelector("span").addEventListener("click", () => {
        li.classList.toggle("completed");
      });

      li.querySelector(".delete-btn").addEventListener("click", () => {
        li.remove();
      });

      taskList.appendChild(li);
      taskInput.value = "";
    }
  });
});
