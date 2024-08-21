import "./styles.css";
import DOM from "./DOM";
import Category from "./Category";

const dom = new DOM(document);
const categories = [new Category("My Day"), new Category("Important")];
const isActive = categories[0];

const newCategoryContainer = document.querySelector("#new-category-container");
newCategoryContainer.querySelector("button").addEventListener("click", (e) => {
  const { value } = newCategoryContainer.querySelector("input");
  const newCategory = new Category(value);
  categories.push(newCategory.category);

  dom.updateCategories(categories);
});

const newTaskContainer = document.querySelector("#new-task-container");
newTaskContainer.querySelector("button").addEventListener("click", (e) => {
  const { value } = newTaskContainer.querySelector("input");
  isActive.addTask(value);
  dom.updateTasks(isActive.tasks);
});
