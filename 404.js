span = document.querySelectorAll('span')

span.forEach(el => {
    el.addEventListener('mouseover', () => {
        if (el.style.transform === 'rotateY(0deg)') {
            el.style.transform = 'rotateY(180deg)';
        } else {
            el.style.transform = 'rotateY(0deg)';
        }
    });
});