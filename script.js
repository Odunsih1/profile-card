let time = document.getElementById("time");

function updateTime() {
  let fullTime = new Date().toUTCString();
  time.innerHTML = `${fullTime}`;
}
updateTime();
setInterval(updateTime, 1000);
