function startLiveClock() {
  function updateClockAndTheme() {
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');

    document.getElementById('live-clock').textContent = `${hours}:${minutes}:${seconds}`;

    const isDark = hours >= 18 || hours < 6;
    document.body.className = isDark ? 'dark' : 'light';

    let message = "";
    if (hours < 6) message = "Chúc bạn một đêm yên giấc 💤";
    else if (hours < 12) message = "Chào buổi sáng! ☀️";
    else if (hours < 18) message = "Buổi chiều vui vẻ 🌻";
    else message = "Buổi tối an lành 🌙";

    document.getElementById('greeting').textContent = message;
  }

  updateClockAndTheme();
  setInterval(updateClockAndTheme, 1000);
}

startLiveClock();
