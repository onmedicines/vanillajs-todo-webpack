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
      div.setAttribute("id", task.uuid);
      div.setAttribute("class", "task-item");

      const para = this._doc.createElement("p");
      para.textContent = task.description;

      const button = this._doc.createElement("button");
      button.textContent = "btn";

      div.appendChild(button);
      div.appendChild(para);

      taskContainer.appendChild(div);
    });

    this.resetInputs();
  }

  updateCategories(categories) {
    function handleClick(e) {}

    const categoryContainer = this._doc.querySelector("#category-container");
    categoryContainer.innerHTML = "";

    categories.forEach((category, index) => {
      const para = this._doc.createElement("p");
      para.textContent = category.name;
      para.setAttribute("id", index);

      categoryContainer.appendChild(para);
    });

    this.resetInputs();
  }
}
