import Category from "./Category";

export default class Catgeories {
  constructor() {
    this._categories = [new Category("My Day"), new Category("Important")];
  }

  #findCategoryWithID(categoryID) {
    return this._categories.find((category) => category.id === categoryID);
  }

  get list() {
    return this._categories;
  }

  getCategory(categoryID) {
    return this.#findCategoryWithID(categoryID);
  }

  addCategory(categoryName) {
    this._categories.push(new Category(categoryName));
  }

  removeCategory(categoryID) {
    this._categories = this._categories.filter((category) => category.id !== categoryID);
  }

  getTasksFromCategory(categoryID) {
    return this.#findCategoryWithID(categoryID).tasks;
  }

  addTaskToCategory(categoryID, task) {
    this.#findCategoryWithID(categoryID).addTask(task);
  }

  removeTaskFromCategory(categoryID, taskID) {
    this.#findCategoryWithID(categoryID).removeTask(taskID);
  }
}
