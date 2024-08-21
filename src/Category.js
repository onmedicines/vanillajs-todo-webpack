export default class Category {
  constructor(name) {
    this._category = { id: name.toLowerCase(), name, tasks: [] };
  }

  get category() {
    return this._category;
  }

  get id() {
    return this._category.id;
  }

  get name() {
    return this._category.name;
  }

  get tasks() {
    return this._category.tasks;
  }

  addTask(task) {
    const date = new Date();
    var month = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    let dateString = `${date.getDate()} ${month[date.getMonth() - 1]}, ${date.getFullYear()}`;

    let newTask = { task, date: dateString, id: crypto.randomUUID(), isCompleted: false };
    this._category.tasks.push(newTask);
  }

  removeTask(id) {
    let newTasks = this._category.tasks.filter((task) => task.id !== id);
    this._category.tasks = newTasks;
  }
}
