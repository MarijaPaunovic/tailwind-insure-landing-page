const btnMenuOpen = document.querySelector('[data-btn-open]');
const btnMenuClose = document.querySelector('[data-btn-close]');
const menu = document.querySelector('[data-menu]');

btnMenuOpen.addEventListener('click', e => {
    e.preventDefault();

    btnMenuOpen.classList.add('hidden');
    btnMenuClose.classList.remove('hidden');
    menu.classList.remove('hidden');
    menu.classList.add('show');

});

btnMenuClose.addEventListener('click', e => {
    e.preventDefault();

    btnMenuOpen.classList.remove('hidden');
    btnMenuClose.classList.add('hidden');
    menu.classList.add('hidden');
    menu.classList.remove('show');
});