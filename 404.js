span = document.querySelectorAll('span');

span.forEach(el => {
    el.addEventListener('click', () => {
        if (el.style.transform === 'rotateY(180deg)') {
            el.style.transform = 'rotateY(0deg)';
        } else {
            el.style.transform = 'rotateY(180deg)';
        }
    });
});