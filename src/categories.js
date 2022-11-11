class Category {
  constructor(name) {
    this.name = name;
    this.list = [];
  }
  addHabit(habit) {
    this.list.push(habit);
  }
  getName() {
    return this.name;
  }
  getList() {
    return this.list;
  }
}

export default Category;
