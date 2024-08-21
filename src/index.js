import "./styles.css";
import DOM from "./DOM";
import Catgeories from "./Categories";

const UI = (function (doc) {
  const dom = new DOM(doc);
  const categories = new Catgeories();
  let currentlyDisplayedCategory = categories.list[0];

  dom.init(categories, currentlyDisplayedCategory);

  // DOM elements
  const newCategoryContainer = doc.querySelector("#new-category-container");
  const categoryContainer = doc.querySelector("#category-container");
  const newTaskContainer = doc.querySelector("#new-task-container");
  const taskContainer = doc.querySelector("#task-container");

  // add a new category of tasks eg. MyDay, Important, Tomorrow
  newCategoryContainer.querySelector("button").addEventListener("click", (e) => {
    const { value } = newCategoryContainer.querySelector("input");
    if (value) {
      categories.addCategory(value);
      dom.updateCategories(categories);
    }
  });

  // display the tasks of the clicked category
  categoryContainer.addEventListener("click", (categoryPara) => {
    currentlyDisplayedCategory = categories.getCategory(categoryPara.target.id);
    dom.updateTasks(currentlyDisplayedCategory);
  });

  // add new task into the currently clicked category
  newTaskContainer.querySelector("button").addEventListener("click", (e) => {
    const { value } = newTaskContainer.querySelector("input");
    currentlyDisplayedCategory.addTask(value);
    dom.updateTasks(currentlyDisplayedCategory);
  });

  // delete task from the currently displayed category
  taskContainer.addEventListener("click", (deleteButton) => {
    if (deleteButton.target.classList.contains("delete-task")) {
      categories.getCategory(currentlyDisplayedCategory.id).removeTask(deleteButton.target.id);
      dom.updateTasks(currentlyDisplayedCategory);
    }
  });
})(document);
