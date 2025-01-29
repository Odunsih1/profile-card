let time = document.getElementById("time");

function updateTime() {
  let date = new Date();
  let day = date.getDate();
  let hours = date.getHours();
  let minutes = date.getMinutes();
  let seconds = date.getSeconds();

  time.innerHTML = `${day} ${hours}:${minutes}:${seconds}`;
}

setInterval(updateTime, 1000);
