import './text-input.js';

window.addEventListener('load', () => {
    setupLargeInput();
});

async function setupLargeInput() {
    const res = await fetch(`http://localhost:3000/textInput`);
    const json = await res.json();

    const main = document.querySelector('main');

    json.forEach(input => {
        const el = document.createElement('text-input');

        el.element = input;

        main.appendChild(el);
    })
}