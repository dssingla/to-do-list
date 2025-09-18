function addTask() {
  const title = document.getElementById("titleInput").value.trim();
  const desc = document.getElementById("descInput").value.trim();
  if (!title) return alert("Please enter a title!");

  const taskDiv = document.createElement("div");
  taskDiv.className = "task";

  const titleEl = document.createElement("span");
  titleEl.textContent = title;
  const descEl = document.createElement("p");
  descEl.textContent = desc;

  const completeBtn = document.createElement("button");
  completeBtn.textContent = "Mark as Completed";
  completeBtn.className = "complete-btn";
  completeBtn.onclick = () => {
    titleEl.classList.toggle("completed");
    descEl.classList.toggle("completed");
    completeBtn.textContent = titleEl.classList.contains("completed")
      ? "Mark as Incomplete"
      : "Mark as Completed";
  };

  const editBtn = document.createElement("button");
  editBtn.textContent = "Edit";
  editBtn.className = "edit-btn";
  editBtn.onclick = () => {
    if (editBtn.textContent === "Edit") {
      const titleInput = document.createElement("input");
      titleInput.value = titleEl.textContent;
      const descInput = document.createElement("input");
      descInput.value = descEl.textContent;

      taskDiv.insertBefore(titleInput, titleEl);
      taskDiv.insertBefore(descInput, descEl);
      taskDiv.removeChild(titleEl);
      taskDiv.removeChild(descEl);

      editBtn.textContent = "Save";
    } else {
      const newTitle = taskDiv.querySelector("input").value;
      const newDesc = taskDiv.querySelectorAll("input")[1].value;

      const newTitleEl = document.createElement("span");
      newTitleEl.textContent = newTitle;
      const newDescEl = document.createElement("p");
      newDescEl.textContent = newDesc;

      taskDiv.insertBefore(newTitleEl, taskDiv.querySelector("input"));
      taskDiv.insertBefore(newDescEl, taskDiv.querySelectorAll("input")[1]);
      taskDiv.removeChild(taskDiv.querySelector("input"));
      taskDiv.removeChild(taskDiv.querySelector("input"));

      editBtn.textContent = "Edit";
    }
  };

  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Delete";
  deleteBtn.className = "delete-btn";
  deleteBtn.onclick = () => taskDiv.remove();

  taskDiv.appendChild(titleEl);
  taskDiv.appendChild(descEl);
  taskDiv.appendChild(completeBtn);
  taskDiv.appendChild(editBtn);
  taskDiv.appendChild(deleteBtn);

  document.getElementById("taskList").appendChild(taskDiv);

  document.getElementById("titleInput").value = "";
  document.getElementById("descInput").value = "";
}
