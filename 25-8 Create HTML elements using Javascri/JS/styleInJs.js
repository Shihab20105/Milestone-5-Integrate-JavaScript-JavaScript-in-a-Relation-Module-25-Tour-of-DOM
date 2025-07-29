/*                              25-8 Create HTML elements using Javascript and appendChild */

/* const sections = document.querySelectorAll('section');
console.log(sections); */


/* const sections = document.querySelectorAll('section');
for(const section of sections){
    console.log(section);
} */



const sections = document.querySelectorAll('section');
for(const section of sections){
   section.style.border = '2px solid steelblue';
   section.style.marginBottom = '5px';
   section.style.borderRadius = '15px';
   section.style.paddingLeft = '7px';
   section.style.backgroundColor = 'lightgray';
}


/* const placesContainer = document.getElementById('places-container');
placesContainer.style.backgroundColor = 'yellow'; */


/* const placesContainer = document.getElementById('places-container');
placesContainer.classList.add('yellow-bg'); */


const placesContainer = document.getElementById('places-container');
placesContainer.classList.add('text-center');
placesContainer.classList.remove('large-text');