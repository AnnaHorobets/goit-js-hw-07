const titleLi = document.querySelectorAll('#categories > li.item');
console.log(titleLi.length);

titleLi.forEach(category => {
  const textItem = category.querySelector('h2');
  const subitems = category.querySelectorAll('li');
  console.log(`Category: ${textItem.textContent}`);
  console.log(`Elements: ${subitems.length}`);
});
