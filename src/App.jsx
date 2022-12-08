import logo from "./logo.svg";
import "./App.css";
import { useState, useRef, useEffect } from "react";

import HistoryDetails from "./HistoryDetails";
import { moveLastElemOf } from "./utils/arrayUtils";

function App() {
  const [points, setPoints] = useState([]);
  const [pointsHistory, setPointsHistory] = useState([]);
  const [lastPointsAction, setLastPointsAction] = useState("NONE");
  const clickArea = useRef(undefined);

  //ONMOUNT
  useEffect(() => {
    console.log("MOUNTED", clickArea?.current);
  }, []);

  let timeout = useRef(0);
  function updateLastAction(action) {
    if (!["PUSH", "PULL", "NEW"].includes(action)) return;
    clearTimeout(timeout.current);

    setLastPointsAction(action);
    timeout.current = setTimeout(() => {
      setLastPointsAction("NONE");
    }, 500);
  }

  //
  function handleClick(e) {
    const { clientX, clientY } = e;
    const point = { x: clientX, y: clientY };

    console.log(point);

    setPoints((prev) => [...prev, point]);
    updateLastAction("NEW");
  }

  function undo() {
    console.log("undo", points.length);
    if (!points.length) return;

    const [newPoints, newHistory] = moveLastElemOf(points, pointsHistory);
    setPoints(newPoints);
    setPointsHistory(newHistory);

    updateLastAction("PULL");
  }

  function redo() {
    console.log("redo", pointsHistory.length);
    if (!pointsHistory.length) return;

    const [newHistory, newPoints] = moveLastElemOf(pointsHistory, points);
    setPointsHistory(newHistory);
    setPoints(newPoints);

    updateLastAction("PUSH");
  }

  return (
    <div className="App flex flex-col">
      <div className="flex-grow relative" ref={clickArea} onClick={handleClick}>
        {points && points.map((point) => <img src={logo} className="logo point" alt="logo" style={{ position: "absolute", left: `${point.x - 32}px`, top: `${point.y - 32}px` }} />)}
      </div>
      <div className="flex gap-2 justify-center relative h-16">
        <button className="react-blue-btn p-1 px-2 rounded-sm" onClick={undo}>
          Undo
        </button>
        <button className="react-blue-btn p-1 px-2 rounded-sm" onClick={redo}>
          Redo
        </button>
        <div className="absolute left-0 flex gap-2 text-lg h-full px-2">
          <HistoryDetails pointsAmount={points.length} historyLength={pointsHistory.length} lastPointsAction={lastPointsAction} />
        </div>
      </div>
    </div>
  );
}

export default App;
