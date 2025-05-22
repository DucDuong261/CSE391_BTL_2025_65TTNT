const { useState, useEffect } = React;

function Countdown({ start }) {
  const [timeLeft, setTimeLeft] = useState(null);
  const [ended, setEnded] = useState(false);

  useEffect(() => {
    if (start === null) {
      setTimeLeft(null);
      setEnded(false);
      return;
    }
    setTimeLeft(start);
    setEnded(false);
    const interval = setInterval(() => {
      setTimeLeft(prev => {
        if (prev > 1) return prev - 1;
        clearInterval(interval);
        setEnded(true);
        return 0;
      });
    }, 1000);
    return () => clearInterval(interval);
  }, [start]);

  return (
    <div>
      <h2>Bộ đếm ngược</h2>
      <div className="time">{timeLeft !== null ? `${timeLeft}s` : '--'}</div>
      {ended && <div className="end-message">⏰ Hết giờ!</div>}
    </div>
  );
}

let currentStart = null;
const countdownRoot = document.getElementById('countdown-box');
ReactDOM.createRoot(countdownRoot).render(<Countdown start={currentStart} />);

document.getElementById('start-btn').addEventListener('click', () => {
  let val = parseInt(document.getElementById('input-seconds').value);
  if (isNaN(val) || val < 1) val = 10;
  if (val > 600) val = 600;
  currentStart = val;
  ReactDOM.createRoot(countdownRoot).render(<Countdown start={currentStart} />);
});
