import "./styles.css";
import DOM from "./DOM";
import Catgeories from "./Categories";

const UI = (function (doc) {
  const dom = new DOM(doc);
  const categories = new Catgeories();
  let isActive = categories.list[0];

  dom.init(categories.list, isActive);

  // DOM elements
  const newCategoryContainer = doc.querySelector("#new-category-container");
  const categoryContainer = doc.querySelector("#category-container");
  const newTaskContainer = doc.querySelector("#new-task-container");
  const taskContainer = doc.querySelector("#task-container");

  newCategoryContainer.querySelector("button").addEventListener("click", (e) => {
    const { value } = newCategoryContainer.querySelector("input");
    categories.addCategory(value);
    dom.updateCategories(categories.list);
  });

  categoryContainer.addEventListener("click", (categoryPara) => {
    isActive = categories.getCategory(categoryPara.target.id);
    dom.updateTasks(isActive.tasks);
  });

  newTaskContainer.querySelector("button").addEventListener("click", (e) => {
    const { value } = newTaskContainer.querySelector("input");
    isActive.addTask(value);
    dom.updateTasks(isActive.tasks);
  });

  taskContainer.addEventListener("click", (deleteButton) => {
    if (deleteButton.target.classList.contains("delete-task")) {
      categories.getCategory(isActive.id).removeTask(deleteButton.target.id);
      dom.updateTasks(isActive.tasks);
    }
  });
})(document);
