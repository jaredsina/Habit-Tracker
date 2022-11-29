class Habit {
  constructor(title, goal, dueDate, completions) {
    this.title = title;
    this.goal = goal;
    this.dueDate = dueDate;
    this.completions = completions;
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
}

export default Habit;
