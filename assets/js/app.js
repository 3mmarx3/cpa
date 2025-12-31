
        const targetURL = "https://www.google.com/";
        const $ = id => document.getElementById(id);
        let step = 1, time = 60;
        let confettiActive = false;

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
                        $('top-timer-section').style.visibility = 'hidden';
                        $('main-container').classList.add('main-container-bonus');
                        confettiActive = true;
                        runContinuousConfetti();
                    }
                }, 200);
            };
        });

        function runContinuousConfetti() {
            if (!confettiActive) return;
            confetti({
                particleCount: 100,
                spread: 70,
                origin: { y: 0.6 }
            });
            setTimeout(runContinuousConfetti, 2000);
        }

        $('submit-action-btn').onclick = () => {
            confettiActive = false;
            location.href = targetURL;
        };
