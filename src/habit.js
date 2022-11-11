class Habit {
  constructor(title, goal, dueDate, completions, color) {
    this.title = title;
    this.goal = goal;
    this.dueDate = dueDate;
    this.completions = completions;
    this.color = color;
  }
  getTitle() {
    return this.title;
  }
  getGoal() {
    return this.goal;
  }
  getdueDate() {
    return this.dueDate;
  }
  getCompletions() {
    return this.completions;
  }
  getColor() {
    return this.color;
  }
}

export default Habit;
