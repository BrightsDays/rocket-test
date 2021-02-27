const pageStart = (selector) => {
    const loader = document.querySelector(`.${selector}`);

    loader.addEventListener('click', () => {
        loader.style.transform = 'translateX(-100%)';
    });
    document.addEventListener('keydown', function (event) {
        if (event.key === 'Enter') {
            loader.style.transform = 'translateX(-100%)';
        }
    });

};

export {pageStart};