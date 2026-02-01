# 💘 DateMePlease - The Ultimate Valentine's Proposal App

<p align="center">
  <img src="https://img.shields.io/badge/Made%20with-HTML%2C%20CSS%2C%20JS-ff69b4?style=for-the-badge" />
  <img src="https://img.shields.io/badge/Deployed%20on-GitHub%20Pages-181717?style=for-the-badge&logo=github" />
  <img src="https://img.shields.io/badge/License-MIT-green?style=for-the-badge" />
</p>

<p align="center">
  <b>A "gamified persistence" web app designed to be the cutest (and most unrefusable) way to ask someone out.</b><br>
  <sub>✨ Formerly known as Love_OS v14.0 ✨</sub>
</p>

<p align="center">
  🌸 <a href="https://datemeplease.com.au"><b>Live Demo</b></a> 🌸
</p>

---

## ✨ Features

| Feature | Description |
|---------|-------------|
| 💻 **Boot Sequence** | Hacker-style terminal intro with cute pink aesthetics |
| 🔒 **Security Check** | Verifies "Suspiciously Cute" users before proceeding |
| 🐱 **Love Captcha** | "Select all images with a reason to say YES" |
| 💌 **The Envelope** | Smooth CSS envelope opening animation |
| 💕 **The UNREFUSABLE Question** | Interactive "Will you be my Valentine?" with playful mechanics |
| 🏃 **Evasive "No" Button** | The "No" button literally runs away from the cursor after multiple attempts |
| 😢 **Guilt Trip Mode** | Progressive sad GIFs and pleading messages |
| 💥 **Mega Yes Button** | "Yes" button grows until it dominates the screen |
| 💔 **Fake BSOD** | Stubborn users get a pink "Heart Broken Exception" screen |
| 🎉 **Victory Celebration** | Confetti explosion with customizable date details |
| 🔊 **Background Music** | Optional lofi music with toggle controls |
| 📱 **Mobile Optimized** | Fully responsive, touch-friendly evasion mechanics |

---

## 🚀 Quick Start

### For Users (Send to Your Valentine)

**Option 1: GitHub Pages (Recommended)**

This app is deployed using GitHub Pages. You can:

1. Visit the live demo at your custom domain
2. Or **[fork this repo](FORK_GUIDE.md)** and set up your own in 5 minutes!

📖 **[📄 Read the Fork & Customize Guide](FORK_GUIDE.md)** for step-by-step instructions.

<details>
<summary><b>🔧 Setting Up GitHub Pages with Custom Domain</b></summary>

1. Fork this repository
2. Go to **Settings** → **Pages**
3. Under "Build and deployment", select `main` branch as Source
4. Under "Custom domain", enter your domain (e.g., `valentine.yourdomain.com`)
5. Save and wait for DNS check to complete
6. Add a `CNAME` file in your repo root with your domain:
   ```
   valentine.yourdomain.com
   ```
7. Configure DNS with your domain provider:
   - **For apex domain** (`yourdomain.com`): Add A records pointing to GitHub Pages IPs
   - **For subdomain** (`valentine.yourdomain.com`): Add CNAME record pointing to `yourusername.github.io`

See [GitHub's custom domain docs](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site) for detailed instructions.
</details>

<details>
<summary><b>🔄 Switching Back to Default github.io Domain</b></summary>

If you previously set up a custom domain and want to use the default `github.io` URL:

1. Go to **Settings** → **Pages**
2. Remove the custom domain from the "Custom domain" field
3. Save (uncheck "Enforce HTTPS" if needed, then re-enable after)
4. Delete or rename the `CNAME` file in your repository:
   ```bash
   git rm CNAME
   git commit -m "Remove custom domain"
   git push
   ```
5. Wait a few minutes for changes to propagate
6. Your site will be available at: `https://sonamkhadka.github.io/datemepleaseP/`

> ⚠️ DNS changes may take up to 24 hours to fully propagate.
</details>

**Option 2: Local File**
1. Download this repository as ZIP
2. Extract and open `index.html` in any browser
3. Send the folder to your Valentine!

---

## 🎨 Customization Guide

### 1. Change the Recipient's Name

**File:** `index.html` (Line 75)
```html
<h3 class="username">Pookie 🌸</h3>
```

### 2. Update the Date Details

**File:** `index.html` (Lines 257-273)
```html
<div class="detail-row">
    <span class="icon">📅</span>
    <span>Feb 14th, 2026</span>  <!-- Change this -->
</div>
<div class="detail-row">
    <span class="icon">⏰</span>
    <span>7:00 PM</span>  <!-- Change this -->
</div>
<div class="detail-row">
    <span class="icon">📍</span>
    <span>Top Secret Location</span>  <!-- Change this -->
</div>
```

### 3. Customize the Messages

**File:** `script.js` (Lines 1-86)

Edit the `config` object to personalize:

```javascript
const config = {
    bootLogs: [
        // Change the terminal messages
        { text: "💕 Initializing DateMePlease kernel...", type: "loading" },
        // ... more logs
    ],

    noTexts: [
        // Change guilt-trip messages
        "No 💔",
        "Are you sure? 🥺",
        "Really sure? 💔",
        // ... more messages
    ],

    questionVariations: [
        // Change the question variants
        "Will you be my Valentine?",
        "Pretty please? 🥺",
        // ... more variations
    ]
};
```

### 4. Replace GIFs

**File:** `script.js` (Lines 13-31)

Replace the Giphy URLs with your own:
```javascript
gifs: {
    happy: "https://media.giphy.com/media/...",      // Happy reaction
    celebration: "https://media.giphy.com/media/...", // Success celebration
    sad: "https://media.giphy.com/media/...",         // Sad reaction
    noSequence: [
        // Sequential sad GIFs for "No" clicks
    ]
}
```

### 5. Change Background Music

**File:** `script.js` (Lines 33-38)

Replace with your own audio URLs:
```javascript
sounds: {
    bgm: "https://cdn.pixabay.com/...",  // Background music
    pop: "https://cdn.pixabay.com/...",  // Pop sound
    yay: "https://cdn.pixabay.com/...",  // Success sound
    no: "https://cdn.pixabay.com/..."    // Reject sound
}
```

---

## 🛠️ Tech Stack

- **HTML5** - Semantic structure
- **CSS3** - Animations, gradients, glassmorphism effects
- **Vanilla JavaScript** - No frameworks, pure JS magic
- **Canvas Confetti** - Celebration effects
- **External APIs** - Giphy, Pixabay (audio), LoremFlickr

---

## 📂 Project Structure

```
datemepleasep/
├── index.html          # Main HTML structure
├── style.css           # All styling and animations
├── script.js           # Game logic and interactions
├── README.md           # This file (overview & docs)
├── FORK_GUIDE.md       # 🍴 Quick start guide for forkers
├── LICENSE             # MIT License
├── .gitignore          # Git ignore rules
└── CNAME               # Custom domain configuration (optional)
```

---

## 🎯 How It Works

1. **Boot Sequence** - Terminal-style intro builds anticipation
2. **Security Check** - Playful "identity verification"
3. **Love Captcha** - Interactive image selection game
4. **The Envelope** - Click to reveal the letter
5. **The Question** - Main interactive experience:
   - First few "No" clicks show sad GIFs
   - After 5 clicks: Button becomes evasive (runs from cursor)
   - After 12 clicks: Fake "Heart Broken Exception" BSOD
   - "Yes" button grows larger with each "No" click
6. **Success** - Confetti celebration with date details

---

## 📱 Mobile Features

- Touch-optimized evasion mechanics
- Responsive design for all screen sizes
- Portrait and landscape support
- Smooth animations on mobile devices

---

## 👨‍💻 For Developers

Want to contribute or run this locally? Here's how:

### Prerequisites
- Any modern web browser
- Git (optional)
- A text editor

### Local Development

```bash
# Clone the repository
git clone https://github.com/Sonamkhadka/datemepleaseP.git
cd datemepleaseP

# Open in browser (macOS)
open index.html

# Or on Windows
start index.html

# Or simply double-click index.html
```

No build step needed! It's pure HTML/CSS/JS.

### Project Structure Explained

```
datemepleasep/
├── index.html      # All UI screens (boot, captcha, question, etc.)
├── style.css       # Animations, gradients, responsive design
├── script.js       # Game logic: evasion, confetti, screen transitions
├── CNAME           # Custom domain config (optional)
└── ...config files
```

### How to Contribute

1. **Fork** this repository
2. **Create a branch**: `git checkout -b feature/amazing-feature`
3. **Make your changes** and test locally
4. **Commit**: `git commit -m 'Add amazing feature'`
5. **Push**: `git push origin feature/amazing-feature`
6. **Open a Pull Request**

### Contribution Ideas
- [ ] Add more language translations
- [ ] Create themes (dark mode, blue theme, etc.)
- [ ] Add sound effect volume slider
- [ ] Implement share buttons (Twitter, etc.)
- [ ] Create a "Generate Your Own" wizard
- [ ] Add easter eggs

### Bug Reports
Found a bug? [Open an issue](../../issues) with:
- Browser & version
- Steps to reproduce
- Expected vs actual behavior

---

## 🤝 Contributing Guidelines

### Ideas for Contributions
- [ ] Add more language translations
- [ ] Create themes (dark mode, different color schemes)
- [ ] Add sound effect volume control
- [ ] Implement share functionality
- [ ] Create a customization wizard

---

## 📜 License

This project is licensed under the [MIT License](LICENSE) - feel free to use it for your own Valentine's proposal! 💝

---

## 🙏 Credits & Attributions

### GIFs
All GIFs are sourced from [Giphy](https://giphy.com) and are used for entertainment purposes:

| GIF | Source |
|-----|--------|
| Happy Cat | [Giphy - Happy Happy Happy Cat](https://giphy.com/gifs/T70hpBP1L0N7U0jtkq) |
| Excited | [Giphy - Excited](https://giphy.com/gifs/12hvzkZSFkAsiS) |
| Shocked Eyes | [Giphy - Shocked](https://giphy.com/gifs/FY8c5SKwiNf1EtZKGs) |
| Confused Girl | [Giphy - Confused](https://giphy.com/gifs/ji6zzUZwNIuLS) |
| Celebration Kiss | [Giphy - Kiss You Love](https://giphy.com/gifs/xR5cPyPoL5HVXSphqA) |
| Sad Sequence GIFs | Various from [Giphy](https://giphy.com) |
| Boot/Security GIFs | Various from [Giphy](https://giphy.com) |

### Sound Effects
All audio is sourced from [Pixabay](https://pixabay.com) (free for commercial use):

| Sound | Source |
|-------|--------|
| Background Music (Lofi) | [Pixabay - Cute Lofi](https://cdn.pixabay.com/download/audio/2022/10/25/audio_4f61c958a5.mp3) |
| Pop Sound | [Pixabay - Pop](https://cdn.pixabay.com/download/audio/2022/03/15/audio_29107954b0.mp3) |
| Error/Deny Sound | [Pixabay - Error](https://cdn.pixabay.com/download/audio/2021/08/04/audio_12b0c7443c.mp3) |
| Success Sound | [Pixabay - Success](https://cdn.pixabay.com/download/audio/2021/08/04/audio_0625c1539c.mp3) |
| Hover/Tick Sound | [Pixabay - Soft Tick](https://cdn.pixabay.com/download/audio/2022/03/24/audio_804e9c73b6.mp3) |

### Other Resources
- **Confetti effect** by [canvas-confetti](https://github.com/catdad/canvas-confetti)
- **Fonts** from [Google Fonts](https://fonts.google.com) (Nunito, Outfit, Courier Prime, Pacifico)
- **Placeholder Images** from [LoremFlickr](https://loremflickr.com)

> ⚠️ **Note**: All third-party media is used under their respective licenses. If you're the creator of any content used here and want it removed, please open an issue.

---

<p align="center">
  <b>Made with 💕 and too much JavaScript</b><br>
  <sub>If you used this for your Valentine, let me know how it went! 🌸</sub>
</p>
