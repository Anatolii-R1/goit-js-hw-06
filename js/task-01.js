const numbCategories = document.querySelectorAll(`.item`);
console.log(`Number of categories: ${numbCategories.length}`);

const itemsElement = document.querySelectorAll(".item");
itemsElement.forEach((item) => {
  console.log("Category: ", item.firstElementChild.textContent);
  console.log("Elements: ", item.lastElementChild.children.length);
});

