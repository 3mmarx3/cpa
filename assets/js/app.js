let step = 1, time = 60;

document.querySelectorAll('.select-trigger').forEach(b => b.onclick = () => {
    setTimeout(() => {
        document.getElementById(`phase-${step}`).classList.add('display-none');
        document.getElementById(`phase-${step = b.dataset.jump}`).classList.remove('display-none');
        if (step == 4) confetti({ particleCount: 150, spread: 80, origin: { y: 0.6 } });
    }, 200);
});

const timer = setInterval(() => {
    const el = document.getElementById("time-left");
    if (el) {
        time--;
        el.innerText = time;
        if (time <= 0) {
            clearInterval(timer);
            location.href = 'https://www.google.com/';
        }
    }
}, 1000);

document.getElementById('submit-action-btn').onclick = () => {
    location.href = 'https://www.google.com/';
};