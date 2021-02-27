const showMenu = (selector, target) => {
    const button = document.querySelector(`.${selector}`);
    const menu = document.querySelector(`.${target}`);
    const close = `${selector}--close`;

    button.addEventListener('click', event => {
        event.preventDefault();

        if (menu.style.transform != 'translateY(0px)') {
            menu.style.transform = 'translateY(0px)';
            button.classList.add(close);
        } else {
            menu.style.transform = 'translateY(-100%)';
            button.classList.remove(close);
        }        
    });
};
export {showMenu};