import Habit from "./habit.js";
import storage from "./storage.js";
import DOM from "./DOM.js";
//Let the user know when one of the inputs has an error
function showError(input, message) {
  //get the form field element
  const formField = input.parentElement;

  //remove success class than add the error-class
  formField.classList.remove("success");
  formField.classList.add("error");

  //show the error message
  const error = formField.querySelector("small");
  error.textContent = message;
}

//Let user know when they successfully inputed a form prompt
function showSuccess(input) {
  //get the form field element
  const formField = input.parentElement;

  //remove the error class
  formField.classList.remove("error");
  formField.classList.add("success");

  //remove error message
  const error = formField.querySelector("small");
  error.textContent = "";
}

//Check that all inputs are valid before submitting
function checkValidation(e) {
  e.preventDefault();
  console.log("Listenning");
  //Require user to type in a title
  let checkTitle = new Promise(function (resolve, reject) {
    let message = "";
    const title = document.getElementById("title");
    if (title.validity.valueMissing) {
      message = "Please input a title!";
      showError(title, message);
    } else {
      showSuccess(title);
      resolve(title.value);
    }
  });

  //Require user to have a goal in mind for their habit
  let checkGoal = new Promise(function (resolve, reject) {
    let message = "";
    const goal = document.getElementById("goal");
    if (goal.validity.valueMissing) {
      message =
        "Type in your end goal for this habit. Example: Run a 5k under 30 Min!";
      showError(goal, message);
    } else {
      showSuccess(goal);
      resolve(goal.value);
    }
  });

  //The user has to complete a habit on atleast one day of the week
  let checkDays = new Promise(function (resolve, reject) {
    let daysPicked = [];
    let message =
      "Please pick one day of the week for you to complete your habit!";
    const days = document.querySelectorAll(".checkbox");
    days.forEach((day) => {
      if (day.checked == true) {
        message = "";
        daysPicked.unshift(day.id);
      }
    });
    if (message == "") {
      showSuccess(days[0]);
      resolve(daysPicked);
    } else {
      showError(days[0], message);
    }
  });

  //Habits need to be completed atleast once per day to build them
  let checkPerDay = new Promise(function (resolve, reject) {
    let message = "";
    const perDay = document.getElementById("perDay");
    if (perDay.validity.rangeUnderflow) {
      message = "Number is to short. Please type a number higher than 1!";
      showError(perDay, message);
    } else if (perDay.validity.rangeOverflow) {
      message = "Number is to high. Please type a number lower than 31!";
      showError(perDay, message);
    } else {
      showSuccess(perDay);
      resolve(perDay.value);
    }
  });

  //Call all checkers and if all return true submit the form
  Promise.all([checkPerDay, checkDays, checkGoal, checkTitle]).then(function (
    values
  ) {
    // create our habit
    let habit = new Habit(values[3], values[2], values[1], values[0]);
    console.log("All forms filled correctly");
    storage.addHabit(habit);
    DOM.changeHabitForm();
    DOM.displayHabit();
  });
}

export default checkValidation;
