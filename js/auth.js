const loginOption = document.getElementById('login-option');
const registerOption = document.getElementById('register-option');
const loginContent = document.getElementById('login-content');
const registerContent = document.getElementById('register-content');

let activeOption = 1;

const changeActiveOption = () => {
    activeOption == 1 ? (
        loginOption.classList.value = 'tab-item option-active login-tab',
        loginContent.classList.value = 'content content-active'
    ) : (
        loginOption.classList.value = 'tab-item',
        loginContent.classList.value = 'content'
    );

    activeOption == 2 ? (
        registerOption.classList.value = 'tab-item option-active register-tab',
        registerContent.classList.value = 'content content-active'
    ) : (
        registerOption.classList.value = 'tab-item',
        registerContent.classList.value = 'content'
    );
}

loginOption.addEventListener('click', () => {
    activeOption = 1;
    changeActiveOption();
});

registerOption.addEventListener('click', () => {
    activeOption = 2;
    changeActiveOption();
});