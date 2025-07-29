/*                          25-9 Module summary (DOM Review) */

console.log('first file');

const allLi = document.getElementsByTagName('li');
console.log(allLi);

const allTitles = document.getElementsByClassName('section-title');
console.log(allTitles);


const secondSection = document.getElementById('second-section');
console.log(secondSection);
secondSection.style.color = 'violet';
secondSection.style.backgroundColor = 'lightgray';


// document.querySelectorAll (querySelectorAll - will give you node list)
// document.querySelector  (querySelector - will give you first matching)