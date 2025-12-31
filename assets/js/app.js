const targetURL = "https://www.google.com/";
const $ = id => document.getElementById(id);
let step = 1, time = 60;

const timer = setInterval(() => {
    time--;
    if (time <= 0) {
        clearInterval(timer);
        location.href = targetURL;
    }
    if ($("time-left")) $("time-left").innerText = time;
    if ($("time-left-header")) $("time-left-header").innerText = time;
}, 1000);

document.querySelectorAll('.select-trigger').forEach(b => {
    b.onclick = () => {
        setTimeout(() => {
            $(`phase-${step}`).style.display = 'none';
            step = b.dataset.jump;
            $(`phase-${step}`).style.display = 'block';
            
            if (step == 4) {
                clearInterval(timer);
                $('top-timer-section').style.visibility = 'hidden';
                $('main-container').classList.add('main-container-bonus');
                
                confetti({
                    particleCount: 150,
                    spread: 100,
                    origin: { y: 0.6 },
                    ticks: 300
                });
            }
        }, 200);
    };
});

$('submit-action-btn').onclick = () => {
    location.href = targetURL;
};