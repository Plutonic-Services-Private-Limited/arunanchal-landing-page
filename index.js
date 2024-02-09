const observer2 = new IntersectionObserver(intersections => {
    intersections.forEach(({
                               target,
                               isIntersecting
                           }) => {
        target.classList.toggle('animate__animated', isIntersecting);
        target.classList.toggle('animate__fadeInLeft', isIntersecting);
        if (isIntersecting) {
            observer2.unobserve(target);
        }
    });
}, {
    threshold: 0
});

const observer3 = new IntersectionObserver(intersections => {
    intersections.forEach(({
                               target,
                               isIntersecting
                           }) => {
        target.classList.toggle('animate__animated', isIntersecting);
        target.classList.toggle('animate__fadeInRight', isIntersecting);
        if (isIntersecting) {
            observer3.unobserve(target);
        }
    });
}, {
    threshold: 0
});

window.onload = function () {
    document.querySelectorAll('.block-2').forEach(div => {
        observer2.observe(div);
    });
    document.querySelectorAll('.block-3').forEach(div => {
        observer3.observe(div);
    });
    document.querySelectorAll('.block-4').forEach(div => {
        observer2.observe(div);
    });
    document.querySelectorAll('.block-5').forEach(div => {
        observer3.observe(div);
    });
    document.querySelectorAll('.block-6').forEach(div => {
        observer2.observe(div);
    });
}