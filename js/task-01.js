const categorEl = document.querySelectorAll('li.item');
console.log(`Number of categories:${categorEl.length}`);

categorEl.forEach(item => {
  console.log(`Category: ${item.querySelector('h2').textContent}`);
  console.log(`Elements: ${item.querySelectorAll('li').length}`);
});
