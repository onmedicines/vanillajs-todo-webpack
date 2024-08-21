import "./styles.css";
import DOM from "./DOM";
import Category from "./Category";

const dom = new DOM(document);
const categories = [new Category("My Day"), new Category("Important")];
let isActive = categories[0];

const newCategoryContainer = document.querySelector("#new-category-container");
const categoryContainer = document.querySelector("#category-container");
const newTaskContainer = document.querySelector("#new-task-container");

newCategoryContainer.querySelector("button").addEventListener("click", (e) => {
  const { value } = newCategoryContainer.querySelector("input");
  categories.push(new Category(value));

  dom.updateCategories(categories);

  console.log(categories); // logs
});

categoryContainer.addEventListener("click", (e) => {
  isActive = categories.find((category) => category.id === e.target.id);
  dom.updateTasks(isActive.tasks);

  console.log(categories); // logs
});

newTaskContainer.querySelector("button").addEventListener("click", (e) => {
  const { value } = newTaskContainer.querySelector("input");
  isActive.addTask(value);
  dom.updateTasks(isActive.tasks);

  console.log(categories); // logs
});
