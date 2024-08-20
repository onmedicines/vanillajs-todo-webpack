import "./styles.css";
import DOM from "./DOM";
import Category from "./Category";

const dom = new DOM(document);
const categories = [];

const newCategoryContainer = document.querySelector("#new-category-container");
newCategoryContainer.querySelector("button").addEventListener("click", (e) => {
  const { value } = newCategoryContainer.querySelector("input");
  const newCategory = new Category(value);
  categories.push(newCategory.category);

  dom.updateCategories(categories);
});
