const status = document.getElementById("status");
const startBtn = document.getElementById("start");
const stopBtn = document.getElementById("stop");

startBtn.onclick = () => {
  chrome.runtime.sendMessage({ action: "start_listening" });
  status.innerText = "Told Netflix tab to start listening...";
};

stopBtn.onclick = () => {
  chrome.runtime.sendMessage({ action: "stop_listening" });
  status.innerText = "Told Netflix tab to stop.";
};
