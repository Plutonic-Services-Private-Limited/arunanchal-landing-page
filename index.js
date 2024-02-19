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
        counter("count6", 0, 45, 1500, true);
        counter("count7", 0, 85, 1500, false);
        counter("count8", 0, 120, 1500, true);
        counter("count9", 0, 300, 1500, true);
        counter("count10", 5800, 6000, 1500, true);
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

function topFunction() {
    var w = screen.width;
    if (w > 600)
        window.scrollTo({top: 0, behavior: 'smooth'});
    else
        window.scrollTo({top: 450, behavior: 'smooth'});
}

function forgotPassword() {
    document.getElementById("password").style.display = "none";
    document.getElementById("remember").style.display = "none";
    document.getElementById("login_password").style.display = "none";
    document.getElementById("login_menu").style.display = "none";
    document.getElementById("login_now").style.display = "block";
    document.getElementById("login_btn").innerText = "Submit";
}

function loginNow() {
    document.getElementById("password").style.display = "block";
    document.getElementById("otp").style.display = "none";
    document.getElementById("remember").style.display = "block";
    document.getElementById("login_password").style.display = "none";
    document.getElementById("login_menu").style.display = "flex";
    document.getElementById("login_now").style.display = "none";
    document.getElementById("login_btn").innerText = "Login";
}

function loginOtp() {
    document.getElementById("password").style.display = "none";
    document.getElementById("otp").style.display = "block";
    document.getElementById("login_password").style.display = "block";
    document.getElementById("remember").style.display = "none";
    document.getElementById("login_menu").style.display = "none";
    document.getElementById("login_now").style.display = "none";
    document.getElementById("login_btn").innerText = "Login";
}
