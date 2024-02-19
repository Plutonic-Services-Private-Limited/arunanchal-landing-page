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


function counter(id, start, end, duration, plus = false) {
    let obj = document.getElementById(id),
        current = start,
        range = end - start,
        increment = end > start ? 1 : -1,
        step = Math.abs(Math.floor(duration / range)),
        timer = setInterval(() => {
            current += increment;
            obj.textContent = current + (plus ? "+" : "");
            if (current == end) {
                clearInterval(timer);
            }
        }, step);
}

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

const observer4 = new IntersectionObserver(intersections => {
    intersections.forEach(({
                               target,
                               isIntersecting
                           }) => {
        counter("count1", 0, 45, 1500, true);
        counter("count2", 0, 85, 1500, false);
        counter("count3", 0, 120, 1500, true);
        counter("count4", 0, 300, 1500, true);
        counter("count5", 5800, 6000, 1500, true);
        if (isIntersecting) {
            observer4.unobserve(target);
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
    document.querySelectorAll('.block-7').forEach(div => {
        observer4.observe(div);
    });
}
