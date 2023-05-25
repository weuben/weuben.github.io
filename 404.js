span = document.querySelectorAll('span');
var lastEl;

(rotat = () => {
    let el = span[Math.floor(Math.random() * span.length)];
    while (el === lastEl) {
        el = span[Math.floor(Math.random() * span.length)];
    };
    if (el.style.transform === 'rotateY(0deg)') {
        el.style.transform = 'rotateY(180deg)';
    } else {
        el.style.transform = 'rotateY(0deg)';
    };
    lastEl = el;
})();

setInterval(rotat, 500);