/*                          25-9 Module summary (DOM Review) */

const main = document.getElementById('main-container');
const section = document.createElement('section');
section.innerHTML = `
    <h1> My dynamic section</h1>
    <p> Extra text added inside paragraph</p>
    <ul>
        <li>First item</li>
        <li>Second item</li>
        <li>Third item</li>
        <li>Fourth item</li>
    </ul>
`
main.appendChild(section);