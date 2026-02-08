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
        bgm: "assets/audio/bgm.mp3", // Keep lofi for intro
        questionBgm: "assets/audio/happy.mp3", // Happy Happy Happy
        pop: "assets/audio/pop.mp3", // Pop sound
        yay: "assets/audio/yay.mp3", // Anime Wow
        bsod: "assets/audio/bsod.mp3", // BSOD Crash
        laugh: "https://www.myinstants.com/media/sounds/el-risitas-funniest-laugh-ever-mp3cut.mp3", // El Risitas Laugh
        hover: "assets/audio/hover.mp3", // Soft tick
        // Sequence for "No" clicks
        noSequence: [
            "assets/audio/no1.mp3", // Thud
            "assets/audio/no2.mp3", // SpongeBob Fail
            "assets/audio/no3.mp3", // Fahhh
            "assets/audio/no4.mp3", // Bruh
            "assets/audio/no5.mp3", // Sad Trombone
            "assets/audio/no6.mp3"  // Emotional Damage
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
    ], // Removed extra ']'
    // DATING DETAILS
    datingDetails: {
        phoneNumber: "61400000000", // Fallback WhatsApp number
        message: "I said YES! See you on the 14th! 💕" // Fallback confirmation
    },
    personalizationDefaults: {
        fromName: "Your Secret Admirer",
        toName: "Cutie",
        tone: "mixed",
        phoneNumber: "",
        date: "Feb 14th, 2026",
        time: "7:00 PM",
        location: "Top Secret Location",
        customLine: "Don't be late! 🥰",
        confirmationMessage: "I said YES! See you soon! 💕",
        storyMessage: "",
        storyStep: "none"
    },
    messagePacks: {
        questionVariations: {
            funny: [
                "{to}, will you be my Valentine?",
                "Clicking YES gives you lifetime VIP cuddles 😌",
                "{to}, don't break this dramatic rom-com scene 💔",
                "I already rehearsed my happy dance for your YES 🕺",
                "If you say YES, I promise snacks and zero chaos 🍫",
                "Come on {to}, let's make this official 💌",
                "My lawyer says this is a legally cute proposal.",
                "Saying YES boosts your luck by 300% ✨",
                "Emergency alert: {from} is being adorable again 🚨",
                "Plot twist: the No button is unionizing.",
                "Say YES and I will share my fries. All of them. 🍟",
                "You, me, and a suspicious amount of dessert?"
            ],
            emotional: [
                "{to}, will you be my Valentine?",
                "You make ordinary moments feel warm and safe.",
                "My favorite place is wherever you are, {to}.",
                "I want more memories with you, one day at a time.",
                "You matter to me more than I can explain.",
                "Say YES, and let's keep choosing each other. 💗",
                "You make my heart feel seen.",
                "With you, I feel peaceful and brave.",
                "I love who I am when I am with you.",
                "You are my comfort and my favorite adventure.",
                "I still smile when your name appears on my phone.",
                "I want to keep building this beautiful us."
            ],
            mixed: [
                "{to}, will you be my Valentine?",
                "You're my favorite notification every day 📱💕",
                "Life feels softer with you in it.",
                "Say YES and I'll bring dessert plus emotional support 🍰",
                "I really, really like you, {to}.",
                "Let's make this a cute love story together.",
                "I can offer jokes, loyalty, and top-tier hugs.",
                "You are my calm place and my chaos partner.",
                "If you say YES, I will celebrate like a cartoon villain (happy one).",
                "My heart picked you. No second choice.",
                "This is me being brave and a little dramatic 🎭",
                "Say YES and let's romanticize everything."
            ]
        },
        subtitles: {
            funny: [
                "(from {from}, professionally down bad 😅)",
                "(this is your sign to say yes ✨)",
                "(no pressure... okay maybe a little 🥺)",
                "(I can be charming after coffee, promise ☕)",
                "(I already told my playlist about us 🎵)",
                "(last call for romance mode 💘)",
                "(my delulu says we are meant to be)",
                "(fine, I am bribing you with snacks 🍪)",
                "(our rom-com budget is now live)",
                "(my heart filed a formal complaint 💌)"
            ],
            emotional: [
                "(from {from}, with all my heart 💗)",
                "(you feel like home to me)",
                "(I don't want to imagine life without you)",
                "(thank you for being you)",
                "(I mean every word)",
                "(please choose us 💞)",
                "(you are my favorite peace)",
                "(you make hard days lighter)",
                "(my heart feels safe with you)",
                "(I am all in, sincerely)"
            ],
            mixed: [
                "(from {from}, please say yes... 🥺💕)",
                "(I can offer hugs and snacks 😌)",
                "(you make me smile for no reason)",
                "(I promise to be worth it 💖)",
                "(this is me being brave for you)",
                "(say yes and let's celebrate 🎉)",
                "(I brought feelings and funny lines)",
                "(we look good in the same story)",
                "(soft heart, loud excitement 💫)",
                "(I really like us)"
            ]
        },
        popupMessages: {
            funny: [
                "{to}, even my Wi-Fi gets stronger around you 📶💕",
                "Breaking news: {from} has a massive crush.",
                "You + me + snacks = elite combo 🍿",
                "If love was homework, I'd still pick you.",
                "Petition to make us official starts now ✍️",
                "No refunds: you are already my favorite person.",
                "You're the plot. Everyone else is side quest."
            ],
            emotional: [
                "You are my calm in loud days, {to}.",
                "You make my heart feel understood.",
                "I feel lucky every time I think of you.",
                "Thank you for being part of my world.",
                "With you, love feels peaceful and real.",
                "Your smile is my daily reset.",
                "You are worth all my courage, {to}."
            ],
            mixed: [
                "You make my heart do happy cartwheels, {to}.",
                "I'd choose you in every timeline 💫",
                "{from} + {to} sounds right to me.",
                "You're my favorite person to laugh with.",
                "Let's turn this into our favorite memory.",
                "Warning: this crush is now enterprise-grade.",
                "You feel like sunshine and inside jokes."
            ]
        },
        successNotes: {
            funny: [
                "Yesss! {to} unlocked romance mode. {from} is celebrating already 🎉"
            ],
            emotional: [
                "Thank you for saying yes, {to}. This means a lot to {from}. 💗"
            ],
            mixed: [
                "I knew you'd say yes, {to}! (Eventually... 💕)"
            ]
        }
    }
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
let personalization = { ...config.personalizationDefaults };
let popupTimers = [];
let activeShareLink = '';
let lastNoGifIndex = -1;
let shownStorySteps = new Set();
let storyHideTimer = null;
const appMode = {
    builder: false,
    hasData: false
};
const validTones = new Set(['funny', 'emotional', 'mixed']);
const validStorySteps = new Set(['none', '1', '2', '3', '4', '5', '6']);

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

function sanitizeText(value, fallback, maxLength) {
    if (typeof value !== 'string') return fallback;
    const cleaned = value.replace(/\s+/g, ' ').trim();
    if (!cleaned) return fallback;
    return cleaned.slice(0, maxLength);
}

function sanitizeMultilineText(value, fallback, maxLength) {
    if (typeof value !== 'string') return fallback;

    const normalized = value
        .replace(/\r\n?/g, '\n')
        .split('\n')
        .map((line) => line.replace(/\s+/g, ' ').trim())
        .join('\n')
        .replace(/\n{3,}/g, '\n\n')
        .trim();

    if (!normalized) return fallback;
    return normalized.slice(0, maxLength);
}

function sanitizePhone(value, fallback) {
    if (typeof value !== 'string') return fallback;
    const cleaned = value.replace(/[^\d]/g, '').slice(0, 20);
    return cleaned || fallback;
}

function sanitizeTone(value, fallback) {
    const tone = String(value || '').trim().toLowerCase();
    return validTones.has(tone) ? tone : fallback;
}

function sanitizeStoryStep(value, fallback) {
    const step = String(value || '').trim().toLowerCase();
    return validStorySteps.has(step) ? step : fallback;
}

function sanitizePersonalization(raw = {}) {
    const defaults = config.personalizationDefaults;
    const fromName = sanitizeText(raw.fromName, defaults.fromName, 40);
    const toName = sanitizeText(raw.toName, defaults.toName, 40);

    return {
        fromName,
        toName,
        tone: sanitizeTone(raw.tone, defaults.tone),
        phoneNumber: sanitizePhone(raw.phoneNumber, defaults.phoneNumber),
        date: sanitizeText(raw.date, defaults.date, 60),
        time: sanitizeText(raw.time, defaults.time, 40),
        location: sanitizeText(raw.location, defaults.location, 80),
        customLine: sanitizeText(raw.customLine, defaults.customLine, 120),
        confirmationMessage: sanitizeText(raw.confirmationMessage, defaults.confirmationMessage, 160),
        storyMessage: sanitizeMultilineText(raw.storyMessage, defaults.storyMessage, 700),
        storyStep: sanitizeStoryStep(raw.storyStep, defaults.storyStep)
    };
}

function renderTemplate(template) {
    if (typeof template !== 'string') return '';
    return template
        .replace(/\{from\}/g, personalization.fromName)
        .replace(/\{to\}/g, personalization.toName);
}

function getToneMessages(groupName, fallback) {
    const groups = config.messagePacks[groupName];
    if (!groups) return fallback || [];
    return groups[personalization.tone] || groups.mixed || fallback || [];
}

function pickMessageAt(messages, index, fallbackMessages) {
    const source = Array.isArray(messages) && messages.length ? messages : (fallbackMessages || []);
    if (!source.length) return '';
    const safeIndex = Math.min(index, source.length - 1);
    return source[safeIndex];
}

function pickMessageLoop(messages, index, fallbackMessages) {
    const source = Array.isArray(messages) && messages.length ? messages : (fallbackMessages || []);
    if (!source.length) return '';
    const safeIndex = ((index % source.length) + source.length) % source.length;
    return source[safeIndex];
}

function encodePayload(payload) {
    const json = JSON.stringify(payload);
    const bytes = new TextEncoder().encode(json);
    let binary = '';

    bytes.forEach((b) => {
        binary += String.fromCharCode(b);
    });

    return btoa(binary)
        .replace(/\+/g, '-')
        .replace(/\//g, '_')
        .replace(/=+$/, '');
}

function decodePayload(encoded) {
    try {
        const base64 = encoded.replace(/-/g, '+').replace(/_/g, '/');
        const padded = base64 + '='.repeat((4 - (base64.length % 4)) % 4);
        const binary = atob(padded);
        const bytes = Uint8Array.from(binary, (char) => char.charCodeAt(0));
        const json = new TextDecoder().decode(bytes);
        return JSON.parse(json);
    } catch (err) {
        console.warn('Failed to decode shared payload:', err);
        return null;
    }
}

function buildShareUrl(payload) {
    const encoded = encodePayload(payload);
    return `${window.location.origin}${window.location.pathname}?data=${encoded}`;
}

function parsePersonalizationFromQuery() {
    const params = new URLSearchParams(window.location.search);
    appMode.builder = params.get('build') === '1';

    const encoded = params.get('data');
    if (!encoded) {
        personalization = sanitizePersonalization(config.personalizationDefaults);
        return;
    }

    const decoded = decodePayload(encoded);
    if (!decoded || typeof decoded !== 'object') {
        personalization = sanitizePersonalization(config.personalizationDefaults);
        return;
    }

    appMode.hasData = true;
    personalization = sanitizePersonalization(decoded);
}

function setText(id, value) {
    const el = document.getElementById(id);
    if (el) el.textContent = value;
}

function updateQuestionCopy(questionIndex) {
    const fallbackQuestions = config.questionVariations;
    const questionTemplate = pickMessageLoop(
        getToneMessages('questionVariations', fallbackQuestions),
        questionIndex,
        fallbackQuestions
    );

    setText('main-question-text', renderTemplate(questionTemplate));

    const questionEl = document.querySelector('.main-question');
    if (questionEl) {
        questionEl.style.animation = 'none';
        setTimeout(() => {
            questionEl.style.animation = 'popIn 0.4s ease';
        }, 10);
    }
}

function updateSubtitleCopy(subtitleIndex) {
    const fallbackSubtitles = [
        "(please say yes... 🥺💕)",
        "(come on... 🥺)",
        "(I'm begging you! 😢)",
        "(why are you doing this?! 💔)",
        "(my heart is breaking... 😭)",
        "(I'll do anything! 🙏)"
    ];
    const subtitleTemplate = pickMessageLoop(
        getToneMessages('subtitles', fallbackSubtitles),
        subtitleIndex,
        fallbackSubtitles
    );
    setText('question-subtitle', renderTemplate(subtitleTemplate));
}

function clearQuestionPopups() {
    popupTimers.forEach((timerId) => clearTimeout(timerId));
    popupTimers = [];
    const layer = document.getElementById('popups-layer');
    if (layer) layer.innerHTML = '';
}

function showLovePopup(message, slot) {
    const layer = document.getElementById('popups-layer');
    if (!layer || !message) return;

    const popup = document.createElement('div');
    popup.className = 'love-popup';
    popup.textContent = message;

    const xPositions = [18, 50, 78, 34];
    const yPositions = [10, 24, 38, 52];
    popup.style.left = `${xPositions[slot % xPositions.length]}%`;
    popup.style.top = `${yPositions[slot % yPositions.length]}%`;

    layer.appendChild(popup);
    setTimeout(() => popup.remove(), 3600);
}

function queueQuestionPopups() {
    clearQuestionPopups();

    const popupTemplates = getToneMessages('popupMessages', []);
    const maxPopups = Math.min(4, popupTemplates.length);
    if (!maxPopups) return;

    const pool = [...popupTemplates];
    for (let i = 0; i < maxPopups; i++) {
        const randomIndex = Math.floor(Math.random() * pool.length);
        const popupTemplate = pool.splice(randomIndex, 1)[0];
        const timerId = setTimeout(() => {
            showLovePopup(renderTemplate(popupTemplate), i);
        }, 1100 + (i * 2500));
        popupTimers.push(timerId);
    }
}

function getStoryStepLabel(step) {
    const labels = {
        '1': 'Step 1 (Security screen)',
        '2': 'Step 2 (Captcha screen)',
        '3': 'Step 3 (Question appears)',
        '4': 'Step 4 (After 3 No clicks)',
        '5': 'Step 5 (BSOD screen)',
        '6': 'Step 6 (Success celebration)'
    };
    return labels[step] || '';
}

function closeStoryNote() {
    const overlay = document.getElementById('story-note-overlay');
    if (overlay) {
        overlay.style.animation = 'fadeOut 0.2s ease forwards';
        setTimeout(() => overlay.remove(), 180);
    }
    if (storyHideTimer) {
        clearTimeout(storyHideTimer);
        storyHideTimer = null;
    }
}

function showStoryNote(message) {
    if (!message) return;

    closeStoryNote();

    const overlay = document.createElement('div');
    overlay.id = 'story-note-overlay';
    overlay.className = 'story-note-overlay';

    const card = document.createElement('div');
    card.className = 'story-note-card';

    const title = document.createElement('h3');
    title.className = 'story-note-title';
    title.textContent = `A note from ${personalization.fromName} 💌`;

    const body = document.createElement('div');
    body.className = 'story-note-body';

    const paragraphs = message.split(/\n+/).map((chunk) => chunk.trim()).filter(Boolean);
    if (!paragraphs.length) {
        paragraphs.push(message);
    }

    paragraphs.forEach((paragraph) => {
        const p = document.createElement('p');
        p.textContent = paragraph;
        body.appendChild(p);
    });

    const closeBtn = document.createElement('button');
    closeBtn.className = 'story-note-close';
    closeBtn.type = 'button';
    closeBtn.textContent = 'Close';
    closeBtn.addEventListener('click', closeStoryNote);

    card.appendChild(title);
    card.appendChild(body);
    card.appendChild(closeBtn);
    overlay.appendChild(card);
    document.body.appendChild(overlay);

    overlay.addEventListener('click', (event) => {
        if (event.target === overlay) {
            closeStoryNote();
        }
    });

    storyHideTimer = setTimeout(() => {
        closeStoryNote();
    }, 9000);
}

function maybeShowStoryAtStep(step) {
    if (!step || personalization.storyStep !== step) return;
    if (!personalization.storyMessage) return;
    if (shownStorySteps.has(step)) return;

    shownStorySteps.add(step);
    showStoryNote(renderTemplate(personalization.storyMessage));
}

function resetStoryStepTracking() {
    shownStorySteps = new Set();
    closeStoryNote();
    lastNoGifIndex = -1;
}

function applyPersonalizationToUI() {
    resetStoryStepTracking();
    setText('receiver-preview-name', `${personalization.toName} 🌸`);
    setText('date-detail-value', personalization.date);
    setText('time-detail-value', personalization.time);
    setText('location-detail-value', personalization.location);
    setText('highlight-detail-value', personalization.customLine);
    setText('send-confirm-label', `Send Confirmation to ${personalization.fromName}`);

    const successTemplates = getToneMessages('successNotes', ['I knew you would say yes! 💕']);
    const successTemplate = pickMessageAt(successTemplates, 0, successTemplates);
    setText('love-note', renderTemplate(successTemplate));

    updateQuestionCopy(0);
    updateSubtitleCopy(0);
}

function openBuilderModal() {
    const modal = document.getElementById('builder-modal');
    if (!modal) return;
    modal.classList.add('active');
    modal.setAttribute('aria-hidden', 'false');
}

function closeBuilderModal() {
    const modal = document.getElementById('builder-modal');
    if (!modal) return;
    modal.classList.remove('active');
    modal.setAttribute('aria-hidden', 'true');
}

function setBuilderFormValues(profile) {
    setInputValue('builder-from-name', profile.fromName);
    setInputValue('builder-to-name', profile.toName);
    setInputValue('builder-tone', profile.tone);
    setInputValue('builder-phone', profile.phoneNumber);
    setInputValue('builder-date', profile.date);
    setInputValue('builder-time', profile.time);
    setInputValue('builder-location', profile.location);
    setInputValue('builder-custom-line', profile.customLine);
    setInputValue('builder-confirmation', profile.confirmationMessage);
    setInputValue('builder-story-message', profile.storyMessage);
    setInputValue('builder-story-step', profile.storyStep);
}

function setInputValue(id, value) {
    const input = document.getElementById(id);
    if (input) input.value = value || '';
}

function getBuilderPayload() {
    return sanitizePersonalization({
        fromName: document.getElementById('builder-from-name')?.value || '',
        toName: document.getElementById('builder-to-name')?.value || '',
        tone: document.getElementById('builder-tone')?.value || 'mixed',
        phoneNumber: document.getElementById('builder-phone')?.value || '',
        date: document.getElementById('builder-date')?.value || '',
        time: document.getElementById('builder-time')?.value || '',
        location: document.getElementById('builder-location')?.value || '',
        customLine: document.getElementById('builder-custom-line')?.value || '',
        confirmationMessage: document.getElementById('builder-confirmation')?.value || '',
        storyMessage: document.getElementById('builder-story-message')?.value || '',
        storyStep: document.getElementById('builder-story-step')?.value || 'none'
    });
}

function setShareLinkResult(url, status) {
    const resultBox = document.getElementById('share-link-result');
    const output = document.getElementById('share-link-output');
    const openLink = document.getElementById('open-share-link-btn');
    const statusEl = document.getElementById('share-link-status');

    if (resultBox) resultBox.classList.add('active');
    if (output) output.value = url;
    if (openLink) openLink.href = url;
    if (statusEl) statusEl.textContent = status;
}

async function copyShareLink() {
    const output = document.getElementById('share-link-output');
    const statusEl = document.getElementById('share-link-status');

    if (!output || !output.value) return;

    try {
        await navigator.clipboard.writeText(output.value);
        if (statusEl) statusEl.textContent = 'Copied. Send this link to your partner.';
    } catch (err) {
        output.focus();
        output.select();
        const copied = document.execCommand('copy');
        if (statusEl) {
            statusEl.textContent = copied
                ? 'Copied. Send this link to your partner.'
                : 'Copy failed. Select the URL manually and copy.';
        }
    }
}

function setupBuilder() {
    const launcher = document.getElementById('builder-launcher');
    const openBtn = document.getElementById('open-builder-btn');
    const closeBtn = document.getElementById('close-builder-btn');
    const backdrop = document.getElementById('builder-backdrop');
    const form = document.getElementById('builder-form');
    const copyBtn = document.getElementById('copy-share-link-btn');

    if (!launcher || !openBtn || !closeBtn || !backdrop || !form || !copyBtn) return;

    launcher.classList.toggle('visible', appMode.builder);

    setBuilderFormValues(personalization);

    if (appMode.builder) {
        openBuilderModal();
        activeShareLink = buildShareUrl(personalization);
        const storyHint = personalization.storyMessage && personalization.storyStep !== 'none'
            ? ` Paragraph set for ${getStoryStepLabel(personalization.storyStep)}.`
            : '';
        setShareLinkResult(activeShareLink, `Share this link. It opens directly in receiver mode.${storyHint}`);
    }

    openBtn.addEventListener('click', () => {
        openBuilderModal();
    });

    closeBtn.addEventListener('click', () => {
        closeBuilderModal();
    });

    backdrop.addEventListener('click', () => {
        closeBuilderModal();
    });

    form.addEventListener('submit', (event) => {
        event.preventDefault();
        personalization = getBuilderPayload();
        applyPersonalizationToUI();

        activeShareLink = buildShareUrl(personalization);
        const storyHint = personalization.storyMessage && personalization.storyStep !== 'none'
            ? ` Paragraph will show at ${getStoryStepLabel(personalization.storyStep)}.`
            : '';
        setShareLinkResult(activeShareLink, `Link generated. Copy it and share.${storyHint}`);

        if (screens.question.classList.contains('active')) {
            queueQuestionPopups();
        }
    });

    copyBtn.addEventListener('click', () => {
        copyShareLink();
    });
}

/* --- INITIALIZATION --- */
document.addEventListener('DOMContentLoaded', () => {
    parsePersonalizationFromQuery();
    applyPersonalizationToUI();
    createFloatingHearts();
    setupBuilder();
    setupAudio(); // Initialize Audio (ON by default)
    startBootSequence();
    setupNoButtonEvasion();
    setupQuiz(); // Initialize Quiz Troll
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

        // Initialize UI state
        if (!isMuted) {
            const icon = musicBtn.querySelector('.icon');
            icon.textContent = '🔊';
            musicBtn.classList.add('active');

            // Try to play immediately (might be blocked)
            bgm.play().catch(() => {
                console.log("Autoplay blocked - waiting for interaction");
                // Unlock on first interaction
                const unlock = () => {
                    if (!isMuted && bgm.paused) {
                        bgm.play().catch(e => console.log("Play failed", e));
                    }
                    document.removeEventListener('click', unlock);
                    document.removeEventListener('touchstart', unlock);
                };
                document.addEventListener('click', unlock);
                document.addEventListener('touchstart', unlock);
            });
        }
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

    if (hideId === 'question') {
        clearQuestionPopups();
    }
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
    maybeShowStoryAtStep('1');
}

// 2. SECURITY
document.getElementById('security-btn').addEventListener('click', () => {
    playSound('pop');
    switchScreen('security', 'captcha');
    maybeShowStoryAtStep('2');
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
    lastNoGifIndex = -1;

    updateQuestionCopy(0);
    updateSubtitleCopy(0);

    // Reset no button
    noClickCount = 0;
    isEvasive = false;
    const noBtn = document.getElementById('no-btn');
    noBtn.style.position = 'static';
    noBtn.style.left = '';
    noBtn.style.top = '';
    noBtn.style.transform = 'none';
    noBtn.querySelector('.no-text').textContent = 'No';
    noBtn.classList.remove('scared');

    // Start popup compliments for the personalized vibe
    queueQuestionPopups();
    maybeShowStoryAtStep('3');

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
    maybeShowStoryAtStep('6');

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
    updateQuestionCopy(noClickCount - 1);
    const subtitleIndex = Math.floor(noClickCount / 2);
    updateSubtitleCopy(subtitleIndex);

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
    const totalNoGifs = config.gifs.noSequence.length;
    if (noClickCount <= totalNoGifs) {
        gifIndex = noClickCount - 1;
    } else {
        // After the first full pass, pick randomly without immediate repeats.
        const candidates = [];
        for (let i = 0; i < totalNoGifs; i++) {
            if (i !== lastNoGifIndex) candidates.push(i);
        }
        const randomSlot = Math.floor(Math.random() * candidates.length);
        gifIndex = candidates[randomSlot];
    }

    // Ensure index is valid
    if (gifIndex >= 0 && gifIndex < totalNoGifs) {
        mainGif.src = config.gifs.noSequence[gifIndex];
        lastNoGifIndex = gifIndex;
    } else {
        mainGif.src = config.gifs.sad; // Fallback
        lastNoGifIndex = -1;
    }

    if (noClickCount === 5) {
        showEvasionWarning();
    }

    if (noClickCount >= 3) {
        maybeShowStoryAtStep('4');
    }

    // 4. Make No button shake
    noBtn.classList.add('evasive');
    setTimeout(() => noBtn.classList.remove('evasive'), 300);

    // --- TROLL EVENTS ---
    // Quiz appears at click 6
    if (noClickCount === 6) {
        triggerQuizTroll();
        return; // Block further clicks until quiz is done
    }

    // 5. BSOD Trigger after 12 clicks
    if (noClickCount >= 12 && !isBSODTriggered) {
        triggerBSOD();
    }
}

function showEvasionWarning() {
    const warning = document.createElement('div');
    warning.className = 'evasion-warning';
    warning.textContent = renderTemplate('{to}, I got you! Try now 😉 ✨');
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
    setTimeout(() => playSound('laugh'), 500); // Play laugh shortly after crash
    switchScreen('question', 'bsod');
    maybeShowStoryAtStep('5');
}

document.getElementById('reboot-btn').addEventListener('click', () => {
    isBSODTriggered = false;
    noClickCount = 5;
    playSound('pop');

    const bsodScreen = document.getElementById('bsod-screen');
    bsodScreen.classList.remove('active');
    bsodScreen.classList.add('hidden');

    screens.question.classList.remove('hidden');
    screens.question.classList.add('active');

    // Fully reset No button state
    noBtn.style.position = 'static';
    noBtn.style.left = '';
    noBtn.style.top = '';
    noBtn.style.transform = 'scale(1)';
    noBtn.style.opacity = '1';
    noBtn.style.transition = 'all 0.3s';
    noBtn.querySelector('.no-text').textContent = "No";

    // Resume question BGM
    if (!isMuted && sfx.questionBgm) {
        sfx.questionBgm.play().catch(e => { });
    }

    updateQuestionCopy(noClickCount - 1);
    updateSubtitleCopy(Math.floor(noClickCount / 2));
    queueQuestionPopups();

    // Show a hopeful GIF
    mainGif.src = config.gifs.happy;
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

// 8. SEND MESSAGE BUTTON
const sendMsgBtn = document.getElementById('send-msg-btn');
if (sendMsgBtn) {
    sendMsgBtn.addEventListener('click', () => {
        const phoneNumber = personalization.phoneNumber || (appMode.hasData ? '' : config.datingDetails.phoneNumber);
        const message = personalization.confirmationMessage || config.datingDetails.message;
        if (!phoneNumber) {
            alert("No WhatsApp number is included in this link.");
            return;
        }

        // Create WhatsApp URL
        const cleanPhone = phoneNumber.replace(/\D/g, '');
        const encodedMsg = encodeURIComponent(message);

        const url = `https://wa.me/${cleanPhone}?text=${encodedMsg}`;
        window.open(url, '_blank');
    });
}
// 9. TROLL FUNCTIONS
function triggerButtonHeist() {
    const pawContainer = document.getElementById('paw-container');
    const noBtn = document.getElementById('no-btn');

    if (!pawContainer || !noBtn) return;

    // Create dramatic overlay
    const overlay = document.createElement('div');
    overlay.id = 'heist-overlay';
    overlay.innerHTML = `
        <div class="heist-message">
            <div class="heist-emoji">🐱</div>
            <div class="heist-text">A CAT APPEARED!</div>
            <div class="heist-subtext">It seems interested in your button...</div>
        </div>
    `;
    overlay.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0,0,0,0.7);
        z-index: 9998;
        display: flex;
        align-items: center;
        justify-content: center;
        animation: fadeIn 0.3s ease;
    `;
    document.body.appendChild(overlay);

    // Style the message
    const msgBox = overlay.querySelector('.heist-message');
    msgBox.style.cssText = `
        background: white;
        padding: 30px 50px;
        border-radius: 20px;
        text-align: center;
        animation: popIn 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    `;
    overlay.querySelector('.heist-emoji').style.cssText = `font-size: 4rem; margin-bottom: 10px;`;
    overlay.querySelector('.heist-text').style.cssText = `font-size: 1.5rem; font-weight: bold; color: #ff69b4;`;
    overlay.querySelector('.heist-subtext').style.cssText = `font-size: 1rem; color: #666; margin-top: 5px;`;

    // 1. Paw enters from the right (after 1.5s)
    setTimeout(() => {
        pawContainer.style.transition = 'right 1s ease-in-out';
        pawContainer.style.right = '20%';

        // Update message
        overlay.querySelector('.heist-text').textContent = "WAIT... IT'S STEALING THE BUTTON!";
        overlay.querySelector('.heist-subtext').textContent = "🐾 YOINK! 🐾";
        overlay.querySelector('.heist-emoji').textContent = "😼";
    }, 1500);

    // 2. Button disappears (after 3s)
    setTimeout(() => {
        playSound('pop');
        noBtn.style.transition = 'all 0.3s ease';
        noBtn.style.transform = 'scale(0)';
        noBtn.style.opacity = '0';
    }, 3000);

    // 3. Paw leaves with button (after 3.5s)
    setTimeout(() => {
        pawContainer.style.right = '-300px';

        // Update message
        overlay.querySelector('.heist-text').textContent = "YOUR BUTTON IS GONE! 😱";
        overlay.querySelector('.heist-subtext').textContent = "Guess you'll have to click YES now...";
        overlay.querySelector('.heist-emoji').textContent = "🙀";
    }, 3500);

    // 4. Remove overlay and restore button (after 6s)
    setTimeout(() => {
        overlay.style.animation = 'fadeOut 0.5s ease forwards';

        setTimeout(() => {
            overlay.remove();
            // Restore button with "defeated" animation
            noBtn.style.transform = 'scale(1)';
            noBtn.style.opacity = '1';
            noBtn.querySelector('.no-text').textContent = "Fine... 😿";
        }, 500);
    }, 6000);
}

// Quiz Questions - Real General Knowledge!
// Each has a correct answer index (0-3)
const quizQuestions = [
    {
        question: "What is the capital of Australia?",
        options: ["Sydney", "Melbourne", "Canberra", "Perth"],
        correct: 2
    },
    {
        question: "How many planets are in our solar system?",
        options: ["7", "8", "9", "10"],
        correct: 1
    },
    {
        question: "What year did the Titanic sink?",
        options: ["1905", "1912", "1920", "1898"],
        correct: 1
    },
    {
        question: "Which element has the chemical symbol 'Au'?",
        options: ["Silver", "Copper", "Gold", "Aluminum"],
        correct: 2
    },
    {
        question: "What is the largest ocean on Earth?",
        options: ["Atlantic", "Indian", "Arctic", "Pacific"],
        correct: 3
    },
    {
        question: "Who painted the Mona Lisa?",
        options: ["Michelangelo", "Leonardo da Vinci", "Van Gogh", "Picasso"],
        correct: 1
    }
];

let currentQuizIndex = 0;

function setupQuiz() {
    const optionBtns = document.querySelectorAll('.quiz-option');

    optionBtns.forEach((btn, index) => {
        btn.addEventListener('click', () => {
            handleQuizAnswer(index);
        });
    });
}

function handleQuizAnswer(selectedIndex) {
    const q = quizQuestions[currentQuizIndex];
    const resultDiv = document.getElementById('quiz-result');
    const optionBtns = document.querySelectorAll('.quiz-option');

    playSound('pop');

    // Highlight selected
    optionBtns[selectedIndex].style.transform = 'scale(1.05)';

    if (selectedIndex === q.correct) {
        // CORRECT!
        optionBtns[selectedIndex].style.background = 'linear-gradient(135deg, #2ecc71, #27ae60)';
        optionBtns[selectedIndex].style.color = 'white';

        resultDiv.innerHTML = '✅ Correct! You may continue... for now 😏';
        resultDiv.style.cssText = `
            margin-top: 15px;
            padding: 15px;
            background: linear-gradient(135deg, #2ecc71, #27ae60);
            color: white;
            border-radius: 10px;
            font-weight: bold;
            animation: popIn 0.3s ease;
        `;

        // Close quiz and let them continue
        setTimeout(() => {
            const modal = document.getElementById('quiz-modal');
            modal.classList.remove('active');
            resetQuiz();
        }, 1500);

    } else {
        // WRONG! Trigger BSOD!
        optionBtns[selectedIndex].style.background = 'linear-gradient(135deg, #e74c3c, #c0392b)';
        optionBtns[selectedIndex].style.color = 'white';

        // Show correct answer
        optionBtns[q.correct].style.background = 'linear-gradient(135deg, #2ecc71, #27ae60)';
        optionBtns[q.correct].style.color = 'white';

        resultDiv.innerHTML = '❌ WRONG! The correct answer was: ' + q.options[q.correct] + ' 💔';
        resultDiv.style.cssText = `
            margin-top: 15px;
            padding: 15px;
            background: linear-gradient(135deg, #e74c3c, #c0392b);
            color: white;
            border-radius: 10px;
            font-weight: bold;
            animation: popIn 0.3s ease;
        `;

        // Trigger BSOD after delay
        setTimeout(() => {
            const modal = document.getElementById('quiz-modal');
            modal.classList.remove('active');
            resetQuiz();
            triggerBSOD();
        }, 2000);
    }
}

function resetQuiz() {
    const options = document.querySelectorAll('.quiz-option');
    options.forEach(btn => {
        btn.style.background = '';
        btn.style.color = '';
        btn.style.transform = '';
    });
    document.getElementById('quiz-result').innerHTML = '';

    // Load next question for variety
    currentQuizIndex = (currentQuizIndex + 1) % quizQuestions.length;
}

function loadQuizQuestion() {
    const q = quizQuestions[currentQuizIndex];
    document.getElementById('quiz-question').textContent = q.question;

    const optionBtns = document.querySelectorAll('.quiz-option');
    q.options.forEach((opt, i) => {
        if (optionBtns[i]) {
            optionBtns[i].textContent = String.fromCharCode(65 + i) + ") " + opt;
        }
    });
}

function triggerQuizTroll() {
    const modal = document.getElementById('quiz-modal');
    loadQuizQuestion();
    modal.classList.add('active');

    // Play notification sound
    const audio = new Audio('https://assets.mixkit.co/sfx/preview/mixkit-software-interface-start-2574.mp3');
    audio.play().catch(e => { });
}

// Add some easter eggs
// Console message
console.log('%c💕 DateMePlease 💕', 'font-size: 24px; font-weight: bold; color: #ff69b4;');
console.log('%cMade with love for your special someone! 🌸', 'font-size: 14px; color: #ff1493;');
console.log('%cIf you found this, you\'re either curious or debugging. Either way, have a great day! ✨', 'font-size: 12px; color: #666;');
