const button = document.querySelector('button');
const popup = document.querySelector('.popup-wrapper');
const closeBtn = document.querySelector('.popup-close');

button.addEventListener('click', (event) => {
    popup.style.display = 'block';
});

closeBtn.addEventListener('click', () => {
    popup.style.display = 'none';
});

popup.addEventListener('click', () => {
    popup.style.display = 'none';
});