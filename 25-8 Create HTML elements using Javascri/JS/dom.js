/*                          25-8 Create HTML elements using Javascript and appendChild */

/* console.log('Hello from JavaScript');
console.log(document.body); */



function sumOfNumbers(number) {
    let sum = 0;
    for (let i = 1; i <= number; i++) {
        sum = sum + i;
        console.log(i, sum);
    }
    return sum;
}

sumOfNumbers(5);


/* ----------------------------------------------------------------------------------------------------------- */

/*  
alt + up arrow Shortcut  for ( down line to move up and up line to down)
*/

/* 
const li  = document.createElement('li')
undefined
li.innerText = 'Brand new place to go'
'Brand new place to go'
li
<li>​Brand new place to go​</li>​
placesUL
<ul>​…​</ul>​<li class=​"important-places">​…​</li>​<li class=​"important-places">​…​</li>​<li class=​"important-places">​…​</li>​<li class=​"other-place">​…​</li>​</ul>​
placesUL.appendChild(li)
<li>​…​</li>​::marker​"Brand new place to go"</li>​
const li2 = document.createElement('li')
undefined
li2.innerText = 'another dynamic li'
'another dynamic li'
placesUL.appendChild(li2)
<li>​::marker​"another dynamic li"</li>​
placesUL
<ul>​…​</ul>​
placesUL.parentNode
<section id=​"places-container" class=​"text-center" style=​"border:​ 2px solid steelblue;​ margin-bottom:​ 5px;​ border-radius:​ 15px;​ padding-left:​ 7px;​ background-color:​ lightgray;​">​…​</section>​
placesUL.parentNode.parentNode
<main>​…​</main>​
placesUL.parentNode.parentNode.parentNode
<body>​…​</body>​
placesUL.parentNode.parentNode.parentNode.parentNode
<html lang=​"en">​<head>​…​</head>​<body>​…​</body>​</html>​
placesUL.parentNode.parentNode.parentNode.parentNode.parentNode
#document (http://127.0.0.1:5501/25-7%20NodeList,%20htmlcollection,%20parentNode/index.html)
placesUL.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode
null

*/

/* 
meaning of append in javascript:
append() method inserts a set of Node objects or strings after the last child of the document. Strings are inserted as equivalent Text nodes. This method appends a child to a Document . To append to an arbitrary element in the tree, see Element. append() .
*/


/* 
The keyboard shortcut to inspect an element in Chrome DevTools is Control + Shift + C (or Command + Shift + C on a Mac). This shortcut toggles Inspect Element mode, allowing you to select and analyze elements on the page. Alternatively, you can open the full DevTools window with Control + Shift + I (or Command + Option + I on a Mac) and then navigate to the Elements panel. 
*/

/* 
* Difference between 'HTMLCollection' and 'NodeList':

Both 'HTMLCollection' and 'NodeList' are collections of DOM elements in JavaScript, but they have some key differences in how they work.

1. Definition & How They Are Obtained

    * 'HTMLCollection': A live collection of elements, typically returned by methods like 'document.getElementsByTagName()' or 'document.getElementsByClassName()'.
    * 'NodeList': A collection of nodes (not necessarily elements) that can be live or static, returned by methods like 'document.querySelectorAll()' (static) or 'childNodes' (live).

2. Live vs Static
    * 'HTMLCollection' is live: If the DOM changes (e.g., new elements are added), an 'HTMLCollection' updates automatically.
    * 'NodeList' can be live or static:
        * 'document.querySelectorAll()' returns a static 'NodeList' (does not update if DOM changes).
        * 'childNodes' returns a live 'NodeList' (updates with the DOM).

3. Types of Nodes
    * 'HTMLCollection' contains only Element nodes (like '<div>', '<p>', etc.).
    * 'NodeList' can contain all types of nodes, including text nodes and comment nodes.

4. Iteration & Methods
    * Both support 'length' property to check the number of items.
    * 'HTMLCollection' does not support 'forEach()' (you must convert it to an array).
    * 'NodeList' (if returned from 'querySelectorAll()') supports 'forEach()'.

5. Accessing Elements
    * Both support accessing elements by index ('collection[0]').
    * 'HTMLCollection' allows access by name (id or name attribute) in some cases.

Example Demonstration:

// HTML
<div class="item">One</div>
<div class="item">Two</div>
<div class="item">Three</div>

// JavaScript
let htmlCollection = document.getElementsByClassName("item");
let nodeList = document.querySelectorAll(".item");

// Add a new div dynamically
let newDiv = document.createElement("div");
newDiv.className = "item";
newDiv.textContent = "Four";
document.body.appendChild(newDiv);

console.log(htmlCollection.length); // Updates to 4 (Live)
console.log(nodeList.length); // Stays 3 (Static)



When to Use What?

Use Case:	                                Use HTMLCollection:	                    Use NodeList:

Need live updates	                        ✅ Yes	                               ❌ No (unless 'childNodes')
Need all types of 	                        ❌ No	                               ✅ Yes
nodes (text, comments, elements)
Need 'forEach()' directly	                    ❌ No	                               ✅ Yes
Need element access by name	                ✅ Yes	                               ❌ No

Conclusion:

    * Use 'HTMLCollection' when you need a live collection of elements.
    * Use 'NodeList' when you need a static collection or when working with all node types.
*/