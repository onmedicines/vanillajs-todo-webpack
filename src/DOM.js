export default class DOM {
  constructor(doc) {
    this._doc = doc;
  }

  #resetInputs() {
    const inputs = this._doc.querySelectorAll("input");
    inputs.forEach((input) => (input.value = ""));
  }

  #updateContentHeading(text) {
    const contentHeading = this._doc.querySelector("#content h1");
    contentHeading.textContent = text;
  }

  updateTasks(category) {
    const taskContainer = this._doc.querySelector("#task-container");
    taskContainer.innerHTML = "";

    this.#updateContentHeading(category.name);
    category.tasks.forEach((task) => {
      const div = this._doc.createElement("div");
      div.setAttribute("class", "task-item");

      const para = this._doc.createElement("p");
      para.textContent = task.task;

      const btnDiv = this._doc.createElement("div");
      btnDiv.setAttribute("class", "date-button-container");

      const datePara = this._doc.createElement("para");
      datePara.textContent = task.date;
      datePara.setAttribute("class", "date");

      const button = this._doc.createElement("button");
      button.textContent = "delete";
      button.setAttribute("class", "delete-task");
      button.setAttribute("id", task.id);

      btnDiv.appendChild(datePara);
      btnDiv.appendChild(button);

      div.appendChild(para);
      div.appendChild(btnDiv);

      taskContainer.appendChild(div);
    });

    this.#resetInputs();
  }

  updateCategories(categories) {
    console.log(categories);

    const categoryContainer = this._doc.querySelector("#category-container");
    categoryContainer.innerHTML = "";

    categories.list.forEach((category, index) => {
      const para = this._doc.createElement("p");
      para.textContent = category.name;
      para.setAttribute("id", category.id);
      para.setAttribute("class", "category-item");

      categoryContainer.appendChild(para);
    });

    this.#resetInputs();
  }

  init(categories, currentlyDisplayedCategory) {
    this.updateTasks(currentlyDisplayedCategory);
    this.updateCategories(categories);
  }
}
