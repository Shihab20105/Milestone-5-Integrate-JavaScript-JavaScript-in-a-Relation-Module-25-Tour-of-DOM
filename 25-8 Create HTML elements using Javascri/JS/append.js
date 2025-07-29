/*                              25-8 Create HTML elements using Javascript and appendChild */

/* console.log('append js') */
// 1. Where to add

const placesList = document.getElementById('places-list');
//console.log(placesList);

// What to be added
const li = document.createElement('li');
li.innerText = 'Pahattholi Bon'

// 3. Add the child
placesList.appendChild(li);

// 1. Where to add
const mainContainer = document.getElementById('main-container');
//console.log(mainContainer);

// 2. What to be added
const section = document.createElement('section');
const h1 = document.createElement('h1');
h1.innerText = 'My food list';
section.appendChild(h1);

const ul = document.createElement('ul');
const li1 = document.createElement('li');
li1.innerText = 'Biriyani';
ul.appendChild(li1);

const li2 = document.createElement('li');
li2.innerText = 'Borhani';
ul.appendChild(li2);

const li3 = document.createElement('li');
li3.innerText = 'Salad';
ul.appendChild(li3);

section.appendChild(ul);

mainContainer.appendChild(section);

// Set innerHTML directly 
const sectionDress = document.createElement('section');
sectionDress.innerHTML = `
<h1>My dress section</h1>
<ul>
    <li>T-Shirt</li>
    <li>Lungi</li>
    <li>Vest</li>

</ul>
` 
mainContainer.appendChild(sectionDress);



