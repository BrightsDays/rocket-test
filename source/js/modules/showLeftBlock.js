const showLeftBlock = (selector, target) => {
    const button = document.querySelector(`.${selector}`);
    const block = document.querySelector(`.${target}`);

    button.addEventListener('click', event => {
        event.preventDefault();

        if (window.innerWidth <= 768) {
            if (block.style.transform != 'translateX(0px)') {
                block.style.transform = 'translateX(0px)';
            } else {
                block.style.transform = 'translateX(-100%)';
            }  
        }      
    });

};

export {showLeftBlock};