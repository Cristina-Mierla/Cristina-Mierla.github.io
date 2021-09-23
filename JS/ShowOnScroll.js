var scroll = window.requestAnimationFrame ||
    function (callback) { window.setTimeout(callback, 1000/60) };
var elementsToShow = document.querySelectorAll('.show-on-scroll');

function myloop() {
    elementsToShow.forEach(function (element) {
        if (isElementInViewport(element)) {
            element.classList.add('is-visible');
        }
        else {
            element.classList.remove('is-visible');
        }
    });
    scroll(myloop);
}

myloop();

function isElementInViewport(elem) {
    if (typeof JQuery === "function" && elem instanceof JQuery) {
        elem = elem[0];
    }
    var rect = elem.getBoundingClientRect();
    return (
        (rect.top <= 0 && rect.bottom >= 0) ||
        (rect.bottom >= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.top <= (window.innerHeight || document.documentElement.clientHeight))
        ||
        (rect.top >= 0 && rect.bottom <= (window.innerHeight || document.documentElement.clientHeight))
    );
}