document.addEventListener('DOMContentLoaded', () => {

    // Toggle de pestañas

    const tabLogin = document.getElementById('tab-login');
    const tabRegister = document.getElementById('tab-register');

    const loginTab = document.getElementById('login-tab');
    const registerTab = document.getElementById('register-tab');

    if (tabLogin && tabRegister && loginTab && registerTab) {

        tabRegister.addEventListener('click', () => {

            tabRegister.classList.remove('text-on-surface-variant');

            tabRegister.classList.add(
                'bg-surface-container-lowest',
                'text-primary-container',
                'shadow-sm'
            );

            tabRegister.setAttribute('aria-selected', 'true');

            tabLogin.classList.remove(
                'bg-surface-container-lowest',
                'text-primary-container',
                'shadow-sm'
            );

            tabLogin.classList.add('text-on-surface-variant');

            tabLogin.setAttribute('aria-selected', 'false');

            loginTab.classList.add('hidden');

            registerTab.classList.remove('hidden');
        });


        tabLogin.addEventListener('click', () => {

            tabLogin.classList.remove('text-on-surface-variant');

            tabLogin.classList.add(
                'bg-surface-container-lowest',
                'text-primary-container',
                'shadow-sm'
            );

            tabLogin.setAttribute('aria-selected', 'true');

            tabRegister.classList.remove(
                'bg-surface-container-lowest',
                'text-primary-container',
                'shadow-sm'
            );

            tabRegister.classList.add('text-on-surface-variant');

            tabRegister.setAttribute('aria-selected', 'false');

            registerTab.classList.add('hidden');

            loginTab.classList.remove('hidden');
        });
    }


    // Mostrar y ocultar contraseña del login

    const toggleLoginPassword =
        document.getElementById('toggle-login-password');

    const loginPassword =
        document.getElementById('login-password');

    const loginEyeIcon =
        document.getElementById('login-eye-icon');

    const loginToggleLabel =
        document.getElementById('login-toggle-label');


    if (toggleLoginPassword && loginPassword) {

        toggleLoginPassword.addEventListener('click', () => {

            const isPassword =
                loginPassword.getAttribute('type') === 'password';

            loginPassword.setAttribute(
                'type',
                isPassword ? 'text' : 'password'
            );

            if (isPassword) {

                loginEyeIcon.textContent = 'visibility_off';

                loginToggleLabel.textContent = 'Ocultar';

                toggleLoginPassword.setAttribute(
                    'aria-label',
                    'Ocultar contraseña'
                );

            } else {

                loginEyeIcon.textContent = 'visibility';

                loginToggleLabel.textContent = 'Ver';

                toggleLoginPassword.setAttribute(
                    'aria-label',
                    'Mostrar contraseña como texto visible'
                );
            }
        });
    }


    // Aumento de fuente

    const fontBtn =
        document.getElementById('font-increase-btn');

    let isLarge = false;

    if (fontBtn) {

        fontBtn.addEventListener('click', () => {

            isLarge = !isLarge;

            if (isLarge) {

                document.documentElement.style.fontSize = '120%';

                fontBtn.classList.add(
                    'underline',
                    'text-secondary-container'
                );

            } else {

                document.documentElement.style.fontSize = '';

                fontBtn.classList.remove(
                    'underline',
                    'text-secondary-container'
                );
            }
        });
    }

});


// Mostrar y ocultar contraseñas del registro

function togglePass(inputId, iconId) {

    const input = document.getElementById(inputId);

    const icon = document.getElementById(iconId);

    if (input.type === 'password') {

        input.type = 'text';

        icon.textContent = 'visibility_off';

    } else {

        input.type = 'password';

        icon.textContent = 'visibility';
    }
}