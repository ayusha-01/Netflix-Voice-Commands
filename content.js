let recognition = null;
let alreadyStarted = false;

// Auto-start when video appears
const observer = new MutationObserver(() => {
  const video = document.querySelector("video");
  if (video && !alreadyStarted) {
    console.log("🎬 Video detected, starting voice control...");
    alreadyStarted = true;
    startListening();
  }
});

observer.observe(document.body, { childList: true, subtree: true });

function startListening() {
  const SpeechRecognition =
    window.SpeechRecognition || window.webkitSpeechRecognition;

  if (!SpeechRecognition) {
    console.error("Speech Recognition not supported");
    return;
  }

  recognition = new SpeechRecognition();
  recognition.lang = "en-US";
  recognition.continuous = true;
  recognition.interimResults = false;

  recognition.onstart = () => {
    console.log("🎤 Always-on listening started");
  };

  recognition.onerror = (e) => {
    console.error("Mic error:", e.error || e);
  };

  recognition.onend = () => {
    console.log("⏹ Restarting mic after silence...");
    if (recognition) recognition.start();
  };

  recognition.onresult = (event) => {
    const text =
      event.results[event.results.length - 1][0].transcript.toLowerCase();
    console.log("Heard:", text);
    handleCommand(text);
  };

  recognition.start();
}

function handleCommand(cmd) {
  wakeControls();

  if (cmd.includes("pause")) document.querySelector("video")?.pause();
  if (cmd.includes("play") || cmd.includes("resume"))
    document.querySelector("video")?.play();
  if (cmd.includes("skip")) clickByText("skip");
  if (cmd.includes("next")) clickByText("next");
}

function wakeControls() {
  document.body.dispatchEvent(new MouseEvent("mousemove", { bubbles: true }));
}

function clickByText(text) {
  const buttons = [...document.querySelectorAll("button")];
  const btn = buttons.find((b) =>
    b.innerText.toLowerCase().includes(text)
  );
  if (btn) btn.click();
}
