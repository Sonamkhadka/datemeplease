/* --- CONFIGURATION --- */
const config = {
    bootLogs: [
        { text: "💕 Initializing DateMePlease kernel...", type: "loading" },
        { text: "🌸 Loading cute_assets.pkg... [OK]", type: "success" },
        { text: "💗 Detecting user... HIGH_LEVEL_CUTENESS found", type: "success" },
        { text: "✨ Optimizing romance algorithms...", type: "loading" },
        { text: "🎀 Romance algorithms optimized... 100%", type: "success" },
        { text: "💝 Checking for existing entanglements... NONE", type: "success" },
        { text: "🌸 Loading 'forever_and_always.exe'...", type: "loading" },
        { text: "💕 System ready. Prepare to be loved! ✨", type: "success" }
    ],
    gifs: {
        // Working cute GIFs
        happy: "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExZHc4NnRhd2ZjMWUwMzRncmJ0dWRwOXFpbWd2dXNxM3Myd3ZlMTU0MSZlcD12MV9naWZzX3NlYXJjaCZjdD1n/T70hpBP1L0N7U0jtkq/giphy.gif", // Happy Happy Happy Cat
        happy2: "https://media.giphy.com/media/12hvzkZSFkAsiS/giphy.gif", // Excited
        shocked: "https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExcHZobDg5c3NkM28yOG5iZ2E5cWE3ZWVsNHV3MmQ2YjJzczdvdGEzZyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/FY8c5SKwiNf1EtZKGs/giphy.gif", // Shocked Eyes
        sad: "https://media.giphy.com/media/v1.Y2lkPWVjZjA1ZTQ3MWg0dHN3ejY4YmFyZnRyNWZwdDBsdnJ4cWNvb3UycWQ0bG8yMDlzNiZlcD12MV9naWZzX3RyZW5kaW5nJmN0PWc/ji6zzUZwNIuLS/giphy.gif", // Confused Little Girl
        celebration: "https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExcHo3amowcWFjNDBmYjlteWc3ZzZveDlldHh5NzVkaGwxcHhoczg2eCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/xR5cPyPoL5HVXSphqA/giphy.gif", // Kiss You Love GIF

        // Sequential GIFs for "No" clicks
        noSequence: [
            "https://media.giphy.com/media/v1.Y2lkPWVjZjA1ZTQ3b28wajJ0dXc3ajQwNmZqa2pieHpqdmsxNjQ4Ym41anZzMm9rd2JxbiZlcD12MV9naWZzX3RyZW5kaW5nJmN0PWc/AAsj7jdrHjtp6/giphy.gif",
            "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExOHZudWxxemlyajN0MmRteGwyajMxc21pb2hkbml2Z3NwZ2ZlM2VwNSZlcD12MV9naWZzX3RyZW5kaW5nJmN0PWc/MDJ9IbxxvDUQM/giphy.gif",
            "https://media.giphy.com/media/v1.Y2lkPWVjZjA1ZTQ3aGRncWswNDM5a3Jlamo0ZmtjMmJmc2VpMjlrN2o5aGgwN25xNnV5dyZlcD12MV9naWZzX3RyZW5kaW5nJmN0PWc/wr7oA0rSjnWuiLJOY5/giphy.gif",
            "https://media.giphy.com/media/v1.Y2lkPWVjZjA1ZTQ3em5xNGY5NDljOWI2Ynl2dDMyYmNpa2RkMjljaDNuZms1cDdlZXZiOSZlcD12MV9naWZzX3RyZW5kaW5nJmN0PWc/XBCJIv6xAyDfrajXoe/giphy.gif",
            "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExZWZ0ZGFqYWJjY2pkeDV1dDFxNGhjbnIwNzNjamNqNmFqbzduejhmdyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/dCwNmR9BBOzKpiBQOs/giphy.gif",
            "https://media.giphy.com/media/v1.Y2lkPWVjZjA1ZTQ3b2JmczBnYWVrZDdvd20waTg0ZGsxNTlybXJvMWVuM3Ayc2t4YTFicCZlcD12MV9naWZzX3NlYXJjaCZjdD1n/6Q3M4BIK0lX44/giphy.gif",
            "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExbzZzMW5uM3Jlc3E4ZHMzemFkNmU0dmw0YW8xMndoYXZmNmNjZHJtOCZlcD12MV9naWZzX3NlYXJjaCZjdD1n/l1J9u3TZfpmeDLkD6/giphy.gif",
            "https://media.giphy.com/media/v1.Y2lkPWVjZjA1ZTQ3YzNodWM5OHg0MHN5Ym5wZ3F3NjgydjhmZnRkdnk5N3gyb3Nhbm55diZlcD12MV9naWZzX3NlYXJjaCZjdD1n/8hhuGidIs1omrQcEbK/giphy.gif"
        ]
    },
    sounds: {
        bgm: "https://cdn.pixabay.com/download/audio/2022/10/25/audio_4f61c958a5.mp3", // Keep lofi for intro
        questionBgm: "https://www.myinstants.com/media/sounds/happy-happy-happy-song.mp3", // Happy Happy Happy
        pop: "https://cdn.pixabay.com/download/audio/2022/03/15/audio_29107954b0.mp3", // Pop sound
        yay: "https://www.myinstants.com/media/sounds/anime-wow-sound-effect.mp3", // Anime Wow
        bsod: "https://www.myinstants.com/media/sounds/your-computer-has-crashed.mp3", // BSOD Crash
        hover: "https://cdn.pixabay.com/download/audio/2022/03/24/audio_804e9c73b6.mp3", // Soft tick
        // Sequence for "No" clicks
        noSequence: [
            "https://www.myinstants.com/media/sounds/vine-boom-sound-effect_KT89XIq.mp3", // Thud
            "https://www.myinstants.com/media/sounds/spongebob-fail.mp3", // SpongeBob Fail
            "https://www.myinstants.com/media/sounds/fahhhhhhhhhhhhhh.mp3", // Fahhh
            "https://www.myinstants.com/media/sounds/movie_1.mp3", // Bruh
            "https://www.myinstants.com/media/sounds/sad-trombone.mp3", // Sad Trombone
            "https://www.myinstants.com/media/sounds/emotional-damage-meme.mp3" // Emotional Damage
        ]
    },
    noTexts: [
        "No 💔",
        "Are you sure? 🥺",
        "Really sure? 💔",
        "Think again! 🌸",
        "Last chance! 💕",
        "Surely not? 🥺",
        "You might regret this! ✨",
        "Give it another thought! 💗",
        "Are you absolutely certain? 🌸",
        "This could be a mistake! 💝",
        "Have a heart! 💕",
        "Don't be so cold! 🥺",
        "Change of heart? 💗",
        "Wouldn't you reconsider? 🌸",
        "Is that your final answer? 💔",
        "You're breaking my heart ;(",
        "Pretty please? 🥺💕",
        "I'll be so sad... 💔",
        "My heart hurts... 😢",
        "But I love you! 💗"
    ],
    questionVariations: [
        "Will you be my Valentine?",
        "Pretty please? 🥺",
        "Are you sure you want to say no?",
        "But... I really like you! 💕",
        "Please reconsider? 🌸",
        "I promise to make you happy!",
        "Don't break my heart... 💔",
        "One more chance? 🥺",
        "You're so beautiful! Say yes? ✨",
        "I'll treat you like a queen! 👑",
        "Think of all the fun we'll have!",
        "Last chance before I cry... 😢"
    ],
    cuteMessages: [
        "Please? 🥺",
        "I promise it'll be fun! ✨",
        "We can get ice cream! 🍦",
        "I'll be your best friend! 💕",
        "Don't make me cry... 😢",
        "You're so beautiful! 🌸",
        "I'll give you hugs! 🤗",
        "Pretty please with cherry on top? 🍒"
    ]
};

/* --- STATE --- */
let noClickCount = 0;
let isBSODTriggered = false;
let mouseX = 0;
let mouseY = 0;
let noBtnElement = null;
let isEvasive = false;

// Audio State - ON by default
let isMuted = false;
let bgm = null;
let sfx = {};

/* --- DOM ELEMENTS --- */
const screens = {
    boot: document.getElementById('boot-screen'),
    security: document.getElementById('security-screen'),
    captcha: document.getElementById('captcha-screen'),
    envelope: document.getElementById('envelope-screen'),
    question: document.getElementById('question-screen'),
    bsod: document.getElementById('bsod-screen'),
    success: document.getElementById('success-screen')
};

/* --- INITIALIZATION --- */
document.addEventListener('DOMContentLoaded', () => {
    createFloatingHearts();
    setupAudio(); // Initialize Audio (ON by default)
    startBootSequence();
    setupNoButtonEvasion();
    preloadImages(); // Start loading images
    
    // Enable audio on first user interaction (browser autoplay policy)
    const enableAudio = () => {
        if (!isMuted && bgm && bgm.paused) {
            bgm.play().catch(e => console.log("Audio play failed:", e));
        }
        // Remove listeners after first interaction
        document.removeEventListener('click', enableAudio);
        document.removeEventListener('touchstart', enableAudio);
    };
    document.addEventListener('click', enableAudio);
    document.addEventListener('touchstart', enableAudio);
});

// Preload images to prevent lag
function preloadImages() {
    const uniqueUrls = new Set([
        ...Object.values(config.gifs).filter(v => typeof v === 'string'),
        ...config.gifs.noSequence
    ]);

    uniqueUrls.forEach(url => {
        const img = new Image();
        img.src = url;
    });
}

// Create floating hearts background
function createFloatingHearts() {
    const container = document.getElementById('floating-hearts-container');
    if (!container) return;

    const hearts = ['💕', '💖', '💗', '💝', '🌸', '✨', '🎀'];

    // Increase density to 40 hearts for continuous flow
    for (let i = 0; i < 40; i++) {
        const heart = document.createElement('div');
        heart.className = 'floating-bg-heart';
        heart.textContent = hearts[Math.floor(Math.random() * hearts.length)];
        heart.style.left = Math.random() * 100 + '%';
        // Slower speed: 15s to 25s duration
        heart.style.animationDuration = (Math.random() * 10 + 15) + 's';
        // Spread out start times over 15s to ensure no gaps
        heart.style.animationDelay = Math.random() * 15 + 's';
        heart.style.fontSize = (Math.random() * 1 + 1) + 'rem';
        container.appendChild(heart);
    }
}

/* --- AUDIO FUNCTIONS --- */
function setupAudio() {
    // Background Music
    bgm = new Audio(config.sounds.bgm);
    bgm.loop = true;
    bgm.volume = 0.5;

    // SFX
    for (const [key, value] of Object.entries(config.sounds)) {
        if (key !== 'bgm') {
            if (Array.isArray(value)) {
                sfx[key] = value.map(url => {
                    const a = new Audio(url);
                    a.volume = 0.6;
                    return a;
                });
            } else {
                sfx[key] = new Audio(value);
                sfx[key].volume = 0.6;
                if (key === 'questionBgm') sfx[key].loop = true;
            }
        }
    }

    // Toggle Button
    const musicBtn = document.getElementById('music-toggle');
    if (musicBtn) {
        musicBtn.addEventListener('click', toggleMusic);
    }
}

function toggleMusic() {
    isMuted = !isMuted;
    const musicBtn = document.getElementById('music-toggle');
    const icon = musicBtn.querySelector('.icon');

    if (!isMuted) {
        // Unmuted
        bgm.play().catch(e => console.log("Audio play failed:", e));
        icon.textContent = '🔊';
        musicBtn.classList.add('active');
        // Show sound controls if hidden
        document.getElementById('sound-controls').classList.remove('hidden');
    } else {
        // Muted
        bgm.pause();
        icon.textContent = '🔇';
        musicBtn.classList.remove('active');
    }
}

function playSound(name) {
    if (isMuted) return;
    if (sfx[name]) {
        // Clone node to allow overlapping sounds
        const sound = sfx[name].cloneNode();
        sound.volume = sfx[name].volume;
        sound.play().catch(e => console.log("SFX play failed:", e));
    }
}

/* --- FUNCTIONS --- */

// UTILS
function switchScreen(hideId, showId) {
    screens[hideId].classList.remove('active');
    screens[hideId].classList.add('hidden');

    screens[showId].classList.remove('hidden');
    screens[showId].classList.add('active');
}

// 1. BOOT SEQUENCE - Cute pink edition
async function startBootSequence() {
    const logContainer = document.getElementById('boot-log');

    // Try to auto-play music (browsers may block until interaction)
    if (!isMuted && bgm) {
        bgm.play().catch(() => {
            // Browser blocked autoplay - will enable on first click
            console.log('Music will start on first interaction');
        });
    }

    for (let log of config.bootLogs) {
        const p = document.createElement('p');
        p.innerHTML = `> ${log.text}`;
        p.className = log.type;
        logContainer.appendChild(p);

        // Scroll to bottom
        logContainer.scrollTop = logContainer.scrollHeight;

        // Random typing delay with cute variation
        const delay = Math.random() * 600 + 300;
        await new Promise(r => setTimeout(r, delay));
    }

    // Add extra cute message
    await new Promise(r => setTimeout(r, 500));
    const readyMsg = document.createElement('p');
    readyMsg.innerHTML = '> 🎀 <span style="color: #ff69b4; font-weight: bold;">Ready to spread love!</span> 🎀';
    readyMsg.className = 'success';
    logContainer.appendChild(readyMsg);

    // Show Sound Controls hint
    const soundHint = document.getElementById('sound-controls');
    if (soundHint) soundHint.classList.remove('hidden');

    await new Promise(r => setTimeout(r, 1200));
    switchScreen('boot', 'security');
}

// 2. SECURITY
document.getElementById('security-btn').addEventListener('click', () => {
    playSound('pop');
    switchScreen('security', 'captcha');
    initCaptcha();
});

// 3. CAPTCHA - Cute edition
function initCaptcha() {
    const grid = document.getElementById('captcha-grid');
    grid.innerHTML = '';

    // Cute search terms for variety
    const cuteTerms = ['kitten', 'puppy', 'bunny', 'hamster', 'red+panda', 'fox'];

    for (let i = 0; i < 9; i++) {
        const div = document.createElement('div');
        div.className = 'captcha-img-container';

        const img = document.createElement('img');
        // Use picsum with different seeds or cute placeholder services
        const term = cuteTerms[Math.floor(Math.random() * cuteTerms.length)];
        img.src = `https://loremflickr.com/200/200/${term}?random=${Date.now()}-${i}`;
        img.alt = 'Cute animal';
        img.loading = 'lazy';

        div.appendChild(img);
        div.addEventListener('click', () => {
            div.classList.toggle('selected');
            // Add a little animation feedback
            if (div.classList.contains('selected')) {
                playSound('pop');
                div.style.animation = 'popIn 0.3s ease';
                setTimeout(() => div.style.animation = '', 300);
            }
        });
        grid.appendChild(div);
    }
}

document.getElementById('captcha-verify-btn').addEventListener('click', () => {
    playSound('pop');
    const btn = document.getElementById('captcha-verify-btn');
    btn.innerHTML = '<div class="spinner pink-spinner" style="border-top-color: white;"></div> Checking...';

    setTimeout(() => {
        playSound('yay');
        btn.innerHTML = '✅ Verified!';
        btn.style.background = 'linear-gradient(135deg, #2ecc71, #27ae60)';

        setTimeout(() => {
            switchScreen('captcha', 'envelope');
            // Reset button for next time
            setTimeout(() => {
                btn.innerHTML = '<span class="btn-sparkle left">🌸</span>VERIFY<span class="btn-sparkle right">🌸</span>';
                btn.style.background = '';
            }, 1000);
        }, 800);
    }, 1500);
});

// 4. ENVELOPE
document.getElementById('envelope').addEventListener('click', function () {
    playSound('pop');
    this.classList.toggle('open');

    setTimeout(() => {
        switchScreen('envelope', 'question');
        initQuestionScreen();
    }, 1500);
});

function initQuestionScreen() {
    // Set initial GIF
    const mainGif = document.getElementById('main-gif');
    mainGif.src = config.gifs.happy;

    // Reset no button
    noClickCount = 0;
    isEvasive = false;
    const noBtn = document.getElementById('no-btn');
    noBtn.style.position = 'static';
    noBtn.style.transform = 'none';
    noBtn.querySelector('.no-text').textContent = 'No';
    noBtn.querySelector('.no-text').textContent = 'No';
    noBtn.classList.remove('scared');

    // Switch to Question BGM
    if (bgm) bgm.pause();
    bgm = sfx.questionBgm;
    if (!isMuted && bgm) bgm.play().catch(e => console.log("BGM play failed:", e));
}

// 5. THE QUESTION (MAIN LOGIC)
const yesBtn = document.getElementById('yes-btn');
const noBtn = document.getElementById('no-btn');
const mainGif = document.getElementById('main-gif');

yesBtn.addEventListener('click', () => {
    if (bgm) bgm.pause(); // Stop music
    playSound('yay');
    // Set celebration GIF
    const finalGif = document.getElementById('final-gif');
    finalGif.src = config.gifs.celebration;

    switchScreen('question', 'success');

    // Small delay for confetti to sync with screen transition
    setTimeout(() => fireConfetti(), 300);
});

noBtn.addEventListener('click', handleNoClick);

// Track mouse position for evasion
function setupNoButtonEvasion() {
    noBtnElement = document.getElementById('no-btn');

    document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;

        // Only start evading after 5 "No" clicks
        if (noClickCount >= 5 && !isBSODTriggered) {
            checkAndEvade();
        }
    });

    // Touch support
    document.addEventListener('touchmove', (e) => {
        if (e.touches.length > 0) {
            mouseX = e.touches[0].clientX;
            mouseY = e.touches[0].clientY;

            // Only start evading after 5 "No" clicks
            if (noClickCount >= 5 && !isBSODTriggered) {
                checkAndEvade();
            }
        }
    }, { passive: true });

    // Add touchstart for immediate reaction on tap attempt
    document.addEventListener('touchstart', (e) => {
        if (e.touches.length > 0) {
            mouseX = e.touches[0].clientX;
            mouseY = e.touches[0].clientY;

            if (noClickCount >= 5 && !isBSODTriggered) {
                checkAndEvade();
            }
        }
    }, { passive: true });
}

function checkAndEvade() {
    if (!noBtnElement) return;

    const rect = noBtnElement.getBoundingClientRect();
    const btnCenterX = rect.left + rect.width / 2;
    const btnCenterY = rect.top + rect.height / 2;

    // Calculate distance from mouse to button center
    const distance = Math.sqrt(
        Math.pow(mouseX - btnCenterX, 2) +
        Math.pow(mouseY - btnCenterY, 2)
    );

    // Evasion threshold - closer = more likely to evade
    // Starts evading at 150px, increasingly desperate as mouse gets closer
    const threshold = 150 + (noClickCount * 10);

    if (distance < threshold && distance > 30) {
        // Calculate evasion direction - move AWAY from mouse
        const angle = Math.atan2(btnCenterY - mouseY, btnCenterX - mouseX);

        // Distance to move increases as mouse gets closer (more desperate)
        const evasionStrength = Math.max(80, (threshold - distance) * 0.8);

        let newX = rect.left + Math.cos(angle) * evasionStrength;
        let newY = rect.top + Math.sin(angle) * evasionStrength;

        // Keep within viewport bounds with padding
        const padding = 20;
        newX = Math.max(padding, Math.min(window.innerWidth - rect.width - padding, newX));
        newY = Math.max(padding, Math.min(window.innerHeight - rect.height - padding, newY));

        // Apply new position with smooth transition
        noBtnElement.style.position = 'fixed';
        noBtnElement.style.left = newX + 'px';
        noBtnElement.style.top = newY + 'px';
        noBtnElement.style.transition = 'all 0.2s cubic-bezier(0.68, -0.55, 0.265, 1.55)';
        noBtnElement.style.zIndex = '1000';

        // Add scared animation
        noBtnElement.classList.add('scared');
        setTimeout(() => noBtnElement.classList.remove('scared'), 200);

        // Text change removed to keep button consistent

        playSound('hover'); // Play sound when evading
        isEvasive = true;
    }
}

function handleNoClick() {
    noClickCount++;

    // Stop Happy BGM immediately
    if (bgm && !bgm.paused) {
        bgm.pause();
    }

    // Play rotating "No" sound
    if (sfx.noSequence && sfx.noSequence.length > 0 && !isMuted) {
        const soundIndex = (noClickCount - 1) % sfx.noSequence.length;
        const sound = sfx.noSequence[soundIndex];
        if (sound) {
            const clone = sound.cloneNode();
            clone.volume = sound.volume;
            clone.play().catch(e => console.log("No SFX failed:", e));
        }
    } else {
        playSound('no'); // Fallback
    }

    // 1. Change the QUESTION text (not the button!)
    const questionEl = document.querySelector('.main-question');
    const subtitleEl = document.querySelector('.question-subtitle');
    const questionIndex = Math.min(noClickCount - 1, config.questionVariations.length - 1);

    questionEl.innerHTML = `
        <span class="q-emoji left">🌸</span>
        ${config.questionVariations[questionIndex]}
        <span class="q-emoji right">🌸</span>
    `;
    questionEl.style.animation = 'none';
    setTimeout(() => {
        questionEl.style.animation = 'popIn 0.4s ease';
    }, 10);

    // Update subtitle with escalating desperation
    const subtitles = [
        "(please say yes... 🥺💕)",
        "(come on... 🥺)",
        "(I'm begging you! 😢)",
        "(why are you doing this?! 💔)",
        "(my heart is breaking... 😭)",
        "(I'll do anything! 🙏)"
    ];
    const subtitleIndex = Math.min(Math.floor(noClickCount / 2), subtitles.length - 1);
    subtitleEl.textContent = subtitles[subtitleIndex];

    // 2. Grow Yes Button (keep button text simple)
    const scale = Math.min(1 + (noClickCount * 0.15), 1.5);
    yesBtn.style.transform = `scale(${scale})`;

    // Make Yes button more prominent as No clicks increase
    if (noClickCount >= 3) {
        yesBtn.innerHTML = '<span class="yes-sparkles">✨</span> YES <span class="yes-hearts">💖</span>';
    }
    if (noClickCount >= 6) {
        yesBtn.innerHTML = '<span class="yes-sparkles">✨✨</span> YES! <span class="yes-hearts">💖💖</span>';
    }

    // 3. Change GIF sequentially based on noClickCount
    let gifIndex;
    if (noClickCount <= config.gifs.noSequence.length) {
        gifIndex = noClickCount - 1;
    } else {
        // If we run out of sequential GIFs, loop through the last 4 to keep it dynamic
        const cycleLength = 4;
        const availableGifs = config.gifs.noSequence.length;
        // Use modulo to cycle
        const offset = (noClickCount - availableGifs - 1) % cycleLength;
        // Pick from the last 'cycleLength' items
        gifIndex = availableGifs - cycleLength + offset;
    }

    // Ensure index is valid
    if (gifIndex >= 0 && gifIndex < config.gifs.noSequence.length) {
        mainGif.src = config.gifs.noSequence[gifIndex];
    } else {
        mainGif.src = config.gifs.sad; // Fallback
    }

    if (noClickCount === 5) {
        showEvasionWarning();
    }

    // 4. Make No button shake
    noBtn.classList.add('evasive');
    setTimeout(() => noBtn.classList.remove('evasive'), 300);

    // 5. BSOD Trigger after 12 clicks
    if (noClickCount >= 12 && !isBSODTriggered) {
        triggerBSOD();
    }
}

function showEvasionWarning() {
    const warning = document.createElement('div');
    warning.className = 'evasion-warning';
    warning.innerHTML = 'I got you! Try now 😉 ✨';
    warning.style.cssText = `
        position: fixed;
        top: 20px;
        left: 50%;
        transform: translateX(-50%);
        background: linear-gradient(135deg, #ff69b4, #ff1493);
        color: white;
        padding: 12px 24px;
        border-radius: 50px;
        font-weight: 700;
        font-size: 1rem;
        z-index: 10000;
        box-shadow: 0 5px 20px rgba(255, 105, 180, 0.4);
        animation: warningPop 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55);
    `;
    document.body.appendChild(warning);

    setTimeout(() => {
        warning.style.animation = 'warningFade 0.5s ease forwards';
        setTimeout(() => warning.remove(), 500);
    }, 2500);
}

// 6. BSOD - Pink cute edition
function triggerBSOD() {
    isBSODTriggered = true;
    if (bgm) bgm.pause();
    playSound('bsod');
    switchScreen('question', 'bsod');
}

document.getElementById('reboot-btn').addEventListener('click', () => {
    isBSODTriggered = false;
    noClickCount = 5;
    playSound('pop');

    const bsodScreen = document.getElementById('bsod-screen');
    bsodScreen.classList.remove('active');

    screens.question.classList.add('active');

    // Reset No button but keep Yes button massive
    noBtn.style.position = 'static';
    noBtn.style.transform = 'none';
    noBtn.style.transition = 'all 0.3s';
    noBtn.querySelector('.no-text').textContent = "I'll be good! 💔";

    // Show a hopeful GIF
    mainGif.src = config.gifs.happy; // Fallback to happy
});

// 7. SUCCESS - Cute confetti edition
function fireConfetti() {
    playSound('yay');
    const duration = 15 * 1000;
    const end = Date.now() + duration;

    // Pink color palette
    const pinkColors = ['#ff69b4', '#ff1493', '#ffb6c1', '#ffcce0', '#ff758c', '#ff4d8d'];

    (function frame() {
        // Left cannon
        confetti({
            particleCount: 4,
            angle: 60,
            spread: 55,
            origin: { x: 0 },
            colors: pinkColors,
            shapes: ['circle', 'heart'],
            scalar: 1.2
        });

        // Right cannon
        confetti({
            particleCount: 4,
            angle: 120,
            spread: 55,
            origin: { x: 1 },
            colors: pinkColors,
            shapes: ['circle', 'heart'],
            scalar: 1.2
        });

        // Center burst occasionally
        if (Math.random() < 0.1) {
            confetti({
                particleCount: 15,
                spread: 100,
                origin: { x: 0.5, y: 0.5 },
                colors: pinkColors,
                shapes: ['heart'],
                scalar: 2,
                drift: 0
            });
        }

        if (Date.now() < end) {
            requestAnimationFrame(frame);
        }
    }());
}

// Restart functionality - safely check if button exists
const restartBtn = document.getElementById('restart-btn');
if (restartBtn) {
    restartBtn.addEventListener('click', () => {
        location.reload();
    });
}

// Add some easter eggs
// Console message
console.log('%c💕 DateMePlease 💕', 'font-size: 24px; font-weight: bold; color: #ff69b4;');
console.log('%cMade with love for your special someone! 🌸', 'font-size: 14px; color: #ff1493;');
console.log('%cIf you found this, you\'re either curious or debugging. Either way, have a great day! ✨', 'font-size: 12px; color: #666;');
