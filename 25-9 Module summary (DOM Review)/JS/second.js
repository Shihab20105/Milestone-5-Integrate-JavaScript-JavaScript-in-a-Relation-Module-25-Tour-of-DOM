/*                          25-9 Module summary (DOM Review) */

console.log('second file');

const secondList = document.getElementById('second-list');

const li = document.createElement('li');
li.innerText = 'My dynamic item';

secondList.appendChild(li);
