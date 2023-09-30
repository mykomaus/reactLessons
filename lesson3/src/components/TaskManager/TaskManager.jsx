import { useState } from "react";
import { list } from "../../data";
import { Task } from "../Task/Task";
import "./TaskManager.style.css";

const removeFirstElement = (current) =>
  current.filter((_, index) => index !== 0);

const removeLastElement = (current) =>
  current.filter((_, index, array) => index !== array.length - 1);

export const TaskManager = () => {
  const [firstColumn, setFirstCoulmn] = useState(list);
  const [middleColumn, setMibbleCoulmn] = useState([]);
  const [lastColumn, setLastCoulmn] = useState([]);

  const isFistDisabled = !firstColumn.length;
  const isMiddleDisabled = !middleColumn.length;
  const isLastDisabled = !lastColumn.length;

  const moveToMiddle = () => {
    setMibbleCoulmn((current) => [firstColumn[0], ...current]);
    setFirstCoulmn(removeFirstElement);
  };

  const moveToFirst = () => {
    setFirstCoulmn((current) => [middleColumn[0], ...current]);
    setMibbleCoulmn(removeFirstElement);
  };

  const moveToLast = () => {
    setLastCoulmn((current) => [middleColumn[0], ...current]);
    setMibbleCoulmn(removeFirstElement);
  };
  const removeFromLast = () => setLastCoulmn(removeLastElement);

  return (
    <div className="container">
      <div className="column">
        <div>
          {firstColumn.map((item) => {
            return <Task key={item.id} item={item} />;
          })}
        </div>

        <button
          className="button"
          disabled={isFistDisabled}
          onClick={moveToMiddle}
        >
          move right
        </button>
      </div>
      <div className="column">
        <div>
          {middleColumn.map((item) => {
            return <Task key={item.id} item={item} />;
          })}
        </div>

        <div className="middleButtonContainer">
          <button
            className="button"
            disabled={isMiddleDisabled}
            onClick={moveToFirst}
          >
            move left
          </button>
          <button
            className="button"
            disabled={isMiddleDisabled}
            onClick={moveToLast}
          >
            move right
          </button>
        </div>
      </div>
      <div className="column">
        <div>
          {lastColumn.map((item) => {
            return <Task key={item.id} item={item} />;
          })}
        </div>
        <button
          className="button"
          disabled={isLastDisabled}
          onClick={removeFromLast}
        >
          remove
        </button>
      </div>
    </div>
  );
};
