const categoriesList = document.querySelector('#categories');
console.log('Number of categories: ' + categoriesList.children.length);

const categoriesItem = document.querySelectorAll('.item');
categoriesItem.forEach(category => {
  const categoryName = category.querySelector('h2').textContent;
  const elementsCount = category.querySelectorAll('li').length;

  console.log(`Category: ${categoryName}`);
  console.log(`Elements: ${elementsCount}`);
});
