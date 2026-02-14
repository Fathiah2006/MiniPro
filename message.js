function startLove() {
            const btn = document.getElementById("loveBtn");
            const countdown = document.getElementById("countdown");
            const name = document.getElementById("bigName");
            const message = document.getElementById("loveMessage");
            const music = document.getElementById("bgMusic");

            btn.style.display = "none";

            countdown.innerHTML = "Get ready Ifemi...";

            setTimeout(() => {
                let count = 3;
                countdown.innerHTML = count;

                const timer = setInterval(() => {
                    count--;
                    if (count > 0) {
                        countdown.innerHTML = count;
                    } else {
                        clearInterval(timer);
                        countdown.innerHTML = "❤️";

                        setTimeout(() => {
                            name.style.display = "block";
                        }, 800);

                        setTimeout(() => {
                            message.style.display = "block";
                            music.play();
                        }, 1600);
                    }
                }, 1000);

            }, 2000);
        }

        /* floating hearts */
        function createHeart() {
            const heart = document.createElement("div");
            heart.classList.add("heart");
            heart.innerHTML = "❤️";
            heart.style.left = Math.random() * 100 + "vw";
            heart.style.fontSize = Math.random() * 20 + 15 + "px";
            document.body.appendChild(heart);

            setTimeout(() => heart.remove(), 6000);
        }
        setInterval(createHeart, 400);
    
    // your countdown code...
    const music = document.getElementById("bgMusic");
    
    // Play after countdown/message appears
    bgMusic.currentTime = 25; // optional: skip to 30s
    bgMusic.volume = 0.7;     // adjust volume
   bgMusic.play();
