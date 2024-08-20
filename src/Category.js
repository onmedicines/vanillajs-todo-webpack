export default class Category {
  constructor(name) {
    this._category = { id: name.toLowerCase(), name, tasks: [] };
  }

  get category() {
    return this._category;
  }

  get name() {
    return this._category.name;
  }

  get tasks() {
    return this._category.tasks;
  }

  addTask(description) {
    const date = new Date();
    var month = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    let today = `${date.getDate()} ${month[date.getMonth() - 1]}, ${date.getFullYear()}`;

    const uniqueID = crypto.randomUUID();

    let newTask = { description: description, date: today, uuid: uniqueID, isCompleted: false };
    this._category.tasks.push(newTask);
  }

  removeTask(uuid) {
    let newTasks = this._category.tasks.filter((task) => task.uuid !== uuid);
    this._category.tasks = newTasks;
  }
}
