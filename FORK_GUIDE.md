# 🍴 Fork & Customize Guide

Want to create your own DateMePlease proposal? Here's the fastest way!

## ⚡ Quick Start (5 minutes)

### Step 1: Fork This Repository
1. Click the **Fork** button at the top right of this page
2. Wait for GitHub to create your copy

### Step 2: Enable GitHub Pages
1. Go to **Settings** → **Pages** in your forked repo
2. Under "Build and deployment", select:
   - Source: **Deploy from a branch**
   - Branch: **main** / **root**
3. Click **Save**
4. Wait 1-2 minutes for the site to build

### Step 3: Customize (Edit directly on GitHub)

#### Change the Name
1. Open `index.html`
2. Click the **Edit** button (pencil icon)
3. Look for line 77 (or search for "Pookie"):
   ```html
   <h3 class="username">Pookie 🌸</h3>
   ```
4. Change "Pookie" to your Valentine's name
5. Scroll down, click **Commit changes**

#### Change the Date
1. Still in `index.html`, look for lines 259-276 (or search for "Feb 14th"):
   ```html
   <span>Feb 14th, 2026</span>
   <span>7:00 PM</span>
   <span>Top Secret Location</span>
   ```
2. Update to your actual date/time/location
3. Commit changes

### Step 4: Get Your Link
- Your site will be at: `https://sonamkhadka.github.io/ValentineAPP/`
- (Replace `sonamkhadka` with your GitHub username)

### Optional: Use a Custom Domain (e.g., datemeplease.com.au)
If you bought a domain, follow these exact steps to avoid errors:

1. **In GitHub Settings → Pages:**
   - Enter your domain in the "Custom domain" field.
   - Click **Save**.
   - This creates a `CNAME` file in your repo.

2. **In Your Domain Provider (Cloudflare, GoDaddy, etc.):**
   - Add a **CNAME** record:
     - Name: `www`
     - Content: `YOURUSERNAME.github.io` (replace with your username)
   - Add four **A** records for the root domain (`@`):
     - `185.199.108.153`
     - `185.199.109.153`
     - `185.199.110.153`
     - `185.199.111.153`

> ⚠️ **Important:** Double-check the IPs! A single typo will break the site.

### Step 5: Send It! 💌
Text the link to your Valentine!

---

## 🎨 Deeper Customization

### Change the Messages
Edit `script.js` (lines 2-96) to change:
- Boot sequence text
- Guilt-trip messages
- Question variations

### Change GIFs
Edit `script.js` (lines 13-32):
1. Go to [Giphy](https://giphy.com)
2. Find cute GIFs
3. Copy the GIF URL
4. Replace in the config

### Change Colors
Edit `style.css` line 1-19 (CSS variables) to change the pink theme:
```css
:root {
    --primary-pink: #ff7eb3;
    --secondary-pink: #ff758c;
    /* ... etc */
}
```

---

## 🆘 Troubleshooting

**Site not showing?**
- Check Settings → Pages for build errors
- Make sure your repo is public

**"Domain not served by Pages" error?**
- Delete the custom domain from GitHub Settings, save, wait 10s, and re-add it.
- Verify your A records match the IPs list above exactly.
- Wait up to 24h (usually faster with Cloudflare).

**Changes not appearing?**
- Clear browser cache (Ctrl+Shift+R or Cmd+Shift+R)
- Wait 2-3 minutes for GitHub to rebuild

**Want to test locally?**
- Download the ZIP
- Open `index.html` in your browser

---

## 💡 Pro Tips

1. **Test first** - Send the link to yourself to make sure it works
2. **Mobile check** - Open it on your phone to see how it looks
3. **Screenshot** - Take a screenshot of the success screen to save the memory!

---

Good luck with your DateMePlease proposal! 💕 If it works, star this repo and share your story!
