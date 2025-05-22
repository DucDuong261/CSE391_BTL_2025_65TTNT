function startAnalogClock() {
  const hourHand = document.getElementById("hour-hand");
  const minuteHand = document.getElementById("minute-hand");
  const secondHand = document.getElementById("second-hand");

  function updateAnalogClock() {
    const now = new Date();
    const sec = now.getSeconds();
    const min = now.getMinutes();
    const hour = now.getHours() % 12;

    const secDeg = sec * 6;
    const minDeg = min * 6 + sec * 0.1;
    const hourDeg = hour * 30 + min * 0.5;

    secondHand.style.transform = `translate(-50%) rotate(${secDeg}deg)`;
    minuteHand.style.transform = `translate(-50%) rotate(${minDeg}deg)`;
    hourHand.style.transform = `translate(-50%) rotate(${hourDeg}deg)`;
  }

  updateAnalogClock();
  setInterval(updateAnalogClock, 1000);
}

startAnalogClock();
