import { useEffect, useState } from "react";

const Stopwatch = () => {
  const [state, setState] = useState("start");
  const [time, setTime] = useState(0);

  useEffect(() => {
    let timerId;

    if (state === "running") {
      timerId = setInterval(() => {
        setTime((prevTime) => prevTime + 10);
      }, 10);
    }

    return () => {
      clearInterval(timerId);
    };
  }, [state]);

  const handleStart = () => {
    setState("running");
  };

  const handleStop = () => {
    setState("resume");
  };

  const handleReset = () => {
    setState("start");
    setTime(0);
  };

  const handleResume = () => {
    setState("running");
  };

  return (
    <div>
      <h1 className="text-center mt-20 text-2xl font-bold uppercase">stopwatch</h1>

      <p className="text-6xl text-center font-semibold">
        {("0" + Math.floor((time / 60000) % 60)).slice(-2)} :{" "}
        {("0" + Math.floor((time / 1000) % 60)).slice(-2)} :{" "}
        {("0" + ((time / 10) % 100)).slice(-2)}
      </p>

      {state === "start" && (
        <button
          className="border-2 border-black shadow-sm block w-fit mx-auto mt-5 py-1 px-3 font-medium"
          onClick={handleStart}
        >
          Start
        </button>
      )}

      {state === "running" && (
        <button
          className="border-2 border-black shadow-sm block w-fit mx-auto mt-5 py-1 px-3 font-medium"
          onClick={handleStop}
        >
          Stop
        </button>
      )}

      {state === "resume" && (
        <div className="flex w-fit mx-auto">
          <button
            className="border-2 border-black shadow-sm block w-fit mx-2 mt-5 py-1 px-3 font-medium"
            onClick={handleReset}
          >
            Reset
          </button>
          <button
            className="border-2 border-black shadow-sm block w-fit  mt-5 py-1 px-3 font-medium"
            onClick={handleResume}
          >
            Resume
          </button>
        </div>
      )}
    </div>
  );
};

export default Stopwatch;
