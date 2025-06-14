var DispMin = document.getElementById("DispMin");
var DispSec = document.getElementById("DispSec");
var DispMS = document.getElementById("DispMS");
var Start = document.getElementById("Start");
var Pause = document.getElementById("Pause");
var Reset = document.getElementById("Reset");

var min = 0;
var sec = 0;
var millisec = 0;
var timer = false;
var interval;

function stopwatch() {
  millisec++;
  if (millisec === 100) {
    millisec = 0;
    sec++;
  }
  if (sec === 60) {
    sec = 0;
    min++;
  }

  DispMin.innerHTML = min < 10 ? "0" + min : min;
  DispSec.innerHTML = sec < 10 ? "0" + sec : sec;
  DispMS.innerHTML = millisec < 10 ? "0" + millisec : millisec;
}

Start.onclick = function () {
  if (!timer) {
    timer = true;
    interval = setInterval(stopwatch, 10);
  }
};

Pause.onclick = function () {
  timer = false;
  clearInterval(interval);
};

Reset.onclick = function () {
  timer = false;
  clearInterval(interval);
  min = 0;
  sec = 0;
  millisec = 0;
  DispMin.innerHTML = "00";
  DispSec.innerHTML = "00";
  DispMS.innerHTML = "00";
};
