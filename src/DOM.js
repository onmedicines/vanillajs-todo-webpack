export default class DOM {
  constructor(doc) {
    this._doc = doc;
  }

  resetInputs() {
    const inputs = this._doc.querySelectorAll("input");
    inputs.forEach((input) => (input.value = ""));
  }

  updateTasks(tasks) {
    const taskContainer = this._doc.querySelector("#task-container");
    taskContainer.innerHTML = "";

    tasks.forEach((task) => {
      const div = this._doc.createElement("div");
      div.setAttribute("id", task.id);
      div.setAttribute("class", "task-item");

      const para = this._doc.createElement("p");
      para.textContent = task.task;

      const button = this._doc.createElement("button");
      button.textContent = "btn";

      div.appendChild(button);
      div.appendChild(para);

      taskContainer.appendChild(div);
    });

    this.resetInputs();
  }

  updateCategories(categories) {
    // function handleClick(e) {}

    const categoryContainer = this._doc.querySelector("#category-container");
    categoryContainer.innerHTML = "";

    categories.forEach((category, index) => {
      const para = this._doc.createElement("p");
      para.textContent = category.name;
      para.setAttribute("id", category.id);
      para.setAttribute("class", "category-item");

      categoryContainer.appendChild(para);
    });

    this.resetInputs();
  }

  init(categories, defaultCategory) {
    console.log(categories);
    this.updateCategories(categories);
    this.updateTasks(defaultCategory.tasks);
  }
}
