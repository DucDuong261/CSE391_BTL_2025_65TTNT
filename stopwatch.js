function Stopwatch() {
  const [running, setRunning] = useState(false);
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    if (!running) return;
    const interval = setInterval(() => setSeconds(s => s + 1), 1000);
    return () => clearInterval(interval);
  }, [running]);

  const format = s => {
    const mins = Math.floor(s / 60).toString().padStart(2, '0');
    const secs = (s % 60).toString().padStart(2, '0');
    return `${mins}:${secs}`;
  };

  return (
    <div>
      <h2>Bấm giờ</h2>
      <div className="time">{format(seconds)}</div>
      <div style={{ textAlign: 'center' }}>
        <button onClick={() => setRunning(!running)}>
          {running ? 'Dừng' : 'Bắt đầu'}
        </button>
        <button onClick={() => { setSeconds(0); setRunning(false); }}>Reset</button>
      </div>
    </div>
  );
}

const stopwatchRoot = document.getElementById('stopwatch-box');
ReactDOM.createRoot(stopwatchRoot).render(<Stopwatch />);
