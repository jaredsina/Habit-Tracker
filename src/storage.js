let storage = {
  habitStorage: [],
  categoryStorage: [],
  addHabit(habit) {
    this.habitStorage.unshift(habit);
  },
  addCategory(category) {
    categoryStorage.unshift(category);
  },
  getHabits() {
    return this.habitStorage;
  },
};
export default storage;
