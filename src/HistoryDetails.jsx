// import { useEffect, useRef, useState } from "react";

const HistoryDetails = (props) => {
  const { pointsAmount, historyLength, lastPointsAction } = props;

  //SKETCHY way of updating lastPointsAction using some logic (IN A USEEFFECT) (ATTENTION, COMMENT OUT LINE 4 TO TRY IT!)
  // |
  // |
  // V

  // const { pointsAmount, historyLength } = props;
  // const [lastPointsAction, setLastPointsAction] = useState("NONE");

  // const timeoutID = useRef(0);
  // function updateLastAction(action, timeoutID) {
  //   if (!["PUSH", "PULL", "NEW"].includes(action)) return;
  //   clearTimeout(timeoutID.current);

  //   setLastPointsAction(action);
  //   timeoutID.current = setTimeout(() => {
  //     setLastPointsAction("NONE");
  //   }, 500);
  // }

  // const lastPointsAmount = useRef(0);
  // const lastHistoryLength = useRef(0);

  // useEffect(() => {
  //   console.log(lastPointsAmount.current, pointsAmount);
  //   console.log(lastHistoryLength.current, historyLength);

  //   if (lastPointsAmount.current > pointsAmount && lastHistoryLength.current < historyLength) {
  //     console.log("%cUNDO", "color:#f00");
  //     updateLastAction("PULL", timeoutID);
  //   } else if (lastPointsAmount.current < pointsAmount && lastHistoryLength.current > historyLength) {
  //     console.log("%cREDO", "color:#ff0");
  //     updateLastAction("PUSH", timeoutID);
  //   } else if (lastPointsAmount.current < pointsAmount && lastHistoryLength.current === historyLength) {
  //     console.log("%cADD", "color:#0f0");
  //     updateLastAction("NEW", timeoutID);
  //   } else {
  //     console.error("Someone made a mistake with the math...");
  //   }

  //   lastPointsAmount.current = pointsAmount;
  //   lastHistoryLength.current = historyLength;
  // }, [pointsAmount, historyLength]);

  return (
    <>
      <div className="flex flex-col items-center justify-center select-none">
        <p className="h-5 text-react-blue">{pointsAmount}</p>
        <p>POINTS</p>
      </div>
      <div className="h-full flex items-center justify-center w-4">
        <span className="w-full text-center">
          {lastPointsAction === "NONE" && "|"}
          {lastPointsAction === "PUSH" && "<|"}
          {lastPointsAction === "PULL" && "|>"}
          {lastPointsAction === "NEW" && "^"}
        </span>
      </div>
      <div className="flex flex-col items-center justify-center select-none">
        <p className="h-5 text-react-blue">{historyLength}</p>
        <p>HISTORY</p>
      </div>
    </>
  );
};

export default HistoryDetails;
