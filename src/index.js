import Habit from "./habit.js";
import Category from "./categories.js";
import showForm from "./form-DOM.js";

let title = "Exercise";
let goal = "10 Min";
let dueDate = 1;
let completions = 3;
let color = "blue";

let newHabit = new Habit(title, goal, dueDate, completions, color);
let newHabit2 = new Habit("Read", "10 pages", 1, 1, "Yellow");
let Health = new Category("Health");
let Knowledge = new Category("Knowledge");
Knowledge.addHabit(newHabit2);
Health.addHabit(newHabit);
console.log(Health.getName());
console.log(Health.getList());
console.log(Knowledge.getName());
console.log(Knowledge.getList());

const newHabitButton = document.querySelector(".form-button");
newHabitButton.addEventListener("click", showForm);
