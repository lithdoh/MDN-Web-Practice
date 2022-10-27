const list = document.querySelector('.output ul');
const totalBox = document.querySelector('.output p');
let total = 0;
list.innerHTML = '';
totalBox.textContent = '';
// number 1

const products = [
                'Underpants:6.99',
                'Socks:5.99',
                'T-shirt:14.99',
                'Trousers:31.99',
                'Shoes:23.99',
];

// number 2

for (const product of products) {


  // number 3

	const colonSeparated = product.split(":");

  // number 4

	const toNumber = Number(colonSeparated[1]);
	total += toNumber; 

  // number 5
  let itemText = `${colonSeparated[0]} — $${colonSeparated[1]}`;

  const listItem = document.createElement('li');
  listItem.textContent = itemText;
  list.appendChild(listItem);

// number 6
}

totalBox.textContent = 'Total: $' + total.toFixed(2);
