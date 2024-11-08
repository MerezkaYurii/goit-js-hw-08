const categoriesEl = document.querySelector("#categories");
console.log(`Number of categories: ${categoriesEl.children.length}`);
const itemEl = document.querySelectorAll(".item");
itemEl.forEach(element => {
console.log(`Category: ${element.firstElementChild.textContent}`);
console.log(`Elements: ${element.children[1].children.length}`);
})











