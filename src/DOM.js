import checkValidation from "./form-validation";
import storage from "./storage";
//Add event listener to new form button on page load
const addToggleListener = () => {
  const newHabitButton = document.querySelector(".form-button");
  newHabitButton.addEventListener("click", () => {
    changeHabitForm();
  });
};

//Add validation listener to submit button
const addListener = () => {
  const form = document.getElementById("create-habit");
  //On submit validate form before submitting
  form.addEventListener("submit", (e) => {
    checkValidation(e);
  });
};

//
const changeHabitForm = () => {
  const form = document.getElementById("create-habit");
  form.classList.toggle("hide");
  if (form.className == "hide") {
    clearForm(form);
  }
};

const clearForm = (form) => {
  form.reset();
};

//Show newly created habit on screen
const displayHabit = () => {
  const container = document.getElementById("habit-container");
  const habitList = storage.getHabits();
  const habit = habitList[0];
  const habitCard = document.createElement("div");
  habitCard.classList.add("card");
  const cardHeader = document.createElement("h1");
  cardHeader.innerHTML = `${habit.title}`;
  habitCard.appendChild(cardHeader);

  container.appendChild(habitCard);
};
export default {
  addToggleListener,
  addListener,
  changeHabitForm,
  displayHabit,
};

//Cant create habit with same names
