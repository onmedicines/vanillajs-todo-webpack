export default class Tasks {
  constructor() {
    this._tasks = [];
  }

  get tasks() {
    return this._tasks;
  }

  add(description) {
    const date = new Date();
    var month = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    let today = `${date.getDate()} ${month[date.getMonth() - 1]}, ${date.getFullYear()}`;

    const uniqueID = crypto.randomUUID();

    let newTask = { description: description, date: today, uuid: uniqueID, isCompleted: false };
    this._tasks.push(newTask);
  }

  remove(uuid) {
    let newTasks = this._tasks.filter((todo) => todo.uuid !== uuid);
    this._tasks = newTasks;
  }
}
