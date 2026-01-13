localStorage.setItem('login', 'Firdavs');
localStorage.setItem('parol', '12345678');

let form = document.querySelector('.login-form');
let loginInput = document.querySelector('#student-id');
let parolInput = document.querySelector('#password');
let submitInput = document.querySelector('.login-btn');

submitInput.addEventListener('click', (e) => {
    e.preventDefault();
    console.log(loginInput.value);

    if (localStorage.getItem('login') == loginInput.value && localStorage.getItem('parol') == parolInput.value) {
        alert('Xush kelibsiz');
        window.location.href = 'about.html';
    } else {
        alert('Login yoki parol xato');
    }
})