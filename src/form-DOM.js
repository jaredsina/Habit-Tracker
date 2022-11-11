const showForm = () => {
  const container = document.querySelector(".habit-container");

  //Check if form is not already being completed
  if (container.childElementCount > 0) {
    return;
  }

  const form = document.createElement("form");
  form.setAttribute("id", "habit-form");
  form.innerHTML =
    "<label for='title'>Title</label><input type='text' id='title' name='title' required><label for='goal'>Goal</label><input type='text' id='goal' name='goal'><label for='dueDate'>What Days of The Week?</label><input type='checkbox' id='dueDate' name='dueDate'><label for='completions'>Completions</label><input type='number' id='completions' name='completions'><label for='color'>Color: </label><input type='color' id='color' name='color'>";

  container.append(form);
};

export default showForm;
