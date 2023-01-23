const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingridientsList = document.querySelector('ul');
console.log(ingridientsList);

const elements = ingredients.map((named) => {
  const itemList = document.createElement('li');
  itemList.textContent = named;
  itemList.classList.add('item');

  return itemList;
  });

  ingridientsList.append(...elements);
