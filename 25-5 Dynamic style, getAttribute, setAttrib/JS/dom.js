/*                          25-5 Dynamic style, getAttribute, setAttribute, innerText, innerHTMLnode */

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