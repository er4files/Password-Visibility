// script.js
const $password = document.querySelector('input');
const $toggler = document.querySelector('.fa-eye');

const showHidePassword = () => {
    if ($password.type === 'password') {
        $password.setAttribute('type', 'text');
    } else {
        $password.setAttribute('type', 'password');
    }

    $toggler.classList.toggle('fa-eye');
    $toggler.classList.toggle('fa-eye-slash');
};

$toggler.addEventListener('click', showHidePassword);
