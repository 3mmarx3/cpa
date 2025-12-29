const targetURL = "https://www.google.com/", $ = id => document.getElementById(id);
let step = 1, time = 60;

document.querySelectorAll('.select-trigger').forEach(b => b.onclick = () => {
    setTimeout(() => {
        $(`phase-${step}`).style.display = 'none';
        $(`phase-${step = b.dataset.jump}`).style.display = 'block';
        if (step == 4) confetti({ particleCount: 150, spread: 80, origin: { y: 0.6 } });
    }, 200);
});

const timer = setInterval(() => {
    if (--time <= 0) location.href = targetURL;
    if ($("time-left")) $("time-left").innerText = time;
}, 1000);

$('submit-action-btn').onclick = () => location.href = targetURL;