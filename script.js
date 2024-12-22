const registerBnt = document.querySelector('#register');
const container = document.querySelector('#container');
const loginBnt = document.querySelector('#login');

registerBnt.addEventListener('click', () => {
    container.classList.add('active');
})
loginBnt.addEventListener('click', () => {
    container.classList.remove('active');
})