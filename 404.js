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

cursorEffect = (() => {
    let el = document.createElement('div');
    el.classList.add('effect');
    document.body.appendChild(el);
    return el;
})();

document.addEventListener('mousemove', (e) => {
    cursorEffect.style.display = '';
    cursorEffect.style.left = e.x - 20 + 'px';
    cursorEffect.style.top = e.y - 20 + 'px';
});