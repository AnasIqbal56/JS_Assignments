let inputMin = document.getElementById("inputMin");
let inputSec = document.getElementById("inputSec");
let DispMin = document.getElementById("DispMin");
let DispSec = document.getElementById("DispSec");
let Start = document.getElementById("Start");
let Pause = document.getElementById("Pause");
let Reset = document.getElementById("Reset");

let timer;
let totalSeconds = 0;
let running = false;

function updateDisplay() {
  let min = Math.floor(totalSeconds / 60);
  let sec = totalSeconds % 60;

  DispMin.textContent = min < 10 ? "0" + min : min;
  DispSec.textContent = sec < 10 ? "0" + sec : sec;
}

Start.onclick = function () {
  if (!running) {
    if (totalSeconds === 0) {
      let minutes = parseInt(inputMin.value) || 0;
      let seconds = parseInt(inputSec.value) || 0;
      totalSeconds = minutes * 60 + seconds;
    }

    timer = setInterval(() => {
      if (totalSeconds > 0) {
        totalSeconds--;
        updateDisplay();
      } else {
        clearInterval(timer);
        running = false;
        alert("⏰ Time's up!");
      }
    }, 1000);

    running = true;
  }
};

Pause.onclick = function () {
  clearInterval(timer);
  running = false;
};

Reset.onclick = function () {
  clearInterval(timer);
  running = false;
  totalSeconds = 0;
  inputMin.value = "";
  inputSec.value = "";
  updateDisplay();
};

updateDisplay(); 