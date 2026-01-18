# 🎙 Netflix Voice Commands

Control Netflix Web Player using simple voice commands — perfect for when you’re comfy in your blanket and don’t want to move.

## ✨ Features
* Voice control for Netflix on web
* Works on Chrome and Brave (Chromium-based)
* Hands-free controls:

  * "Skip intro"
  * "Next episode"
  * "Pause"
  * "Play" / "Resume"
* Automatically starts listening when a video begins
* No servers, no APIs, no cost

---
## 🚀 How to Install (Developer Mode)

1. Clone or download this repo
2. Open Chrome and go to: `chrome://extensions`
3. Turn ON **Developer Mode** (top-right)
4. Click **Load Unpacked**
5. Select the project folder
6. Pin the extension if you want

Done! Now open Netflix in your browser.

---
## 🎤 How to Use

1. Open Netflix and play any episode
2. Voice control starts automatically
3. Say:

   * "Skip intro" (during intro)
   * "Next episode" (near the end)
   * "Pause"
   * "Play" / "Resume"
4. Stay comfy. Don’t move your hands 😄

---
## 🛠 Tech Stack

* JavaScript, HTML, CSS
* Chrome Extension (Manifest V3)
* Web Speech API (browser built-in)

No backend. No API keys. No paid services.

---

## ⚠️ Limitations

* Works only on Netflix Web (netflix.com)
* Does NOT work on Netflix mobile/desktop apps
* Needs microphone permission
* Web Speech API may vary by browser/region
* Netflix UI changes can break button detection

---

## 💡 Why This Exists

Because sometimes you are:

* Wrapped in a blanket
* Comfortable
* Intro music starts

And you don’t want to move just to click "Skip Intro".

So you say it instead.

---

## 📁 Project Structure

```
netflix-voice-control/
├── manifest.json
├── content.js
├── popup.html
├── popup.js
├── style.css
├── logo1.png
└── README.md
```

---

## 🔐 Security & Privacy

* No data is stored
* No servers are used
* No API keys required
* Voice is handled by your browser only

Safe to use and safe to publish.

---

## ⭐ Future Ideas

* Wake word: "Hey Netflix"
* More commands (volume, rewind, fast forward)
* Multi-language support
* Better UI detection logic

---

Enjoy staying comfy. 🎬🛌
