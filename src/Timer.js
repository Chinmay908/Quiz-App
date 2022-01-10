import { useState, useEffect } from "react";

/* Timer Component - Not included - Can be used to set timer */
const Timer = () => {
  const [seconds, setSeconds] = useState(59);
  const [minutes, setMinutes] = useState(1);
  const timer = () => setSeconds(seconds - 1);
  useEffect(() => {
    if (minutes === 1 && seconds === 0) {
      setMinutes(minutes - 1);
      setSeconds(59);
    }
    if (minutes === 0 && seconds === 0) {
      return;
    }
    const id = setInterval(timer, 1000);
    return () => clearInterval(id);
  }, [seconds]);
  return (
    <div>
      <h1>
        00:0{minutes === 0 ? "0" : minutes}:
        {minutes === 0 && seconds === 0
          ? "00"
          : seconds < 10
          ? `0${seconds}`
          : seconds}
      </h1>
    </div>
  );
};

export default Timer;
