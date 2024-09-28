const button = document.getElementById('changeText');
const greeting = document.getElementById('greeting');

button.addEventListener('click', () => {
    greeting.textContent = '¡Bienvenido a mi página!';
});
