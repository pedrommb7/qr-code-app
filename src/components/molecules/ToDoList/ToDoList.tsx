import React, { useState, FC } from "react";
import { ToDoListProps } from "./types";
import "./_todolist.scss";

const ToDoList: FC<ToDoListProps> = ({ toDos, selectedOption }) => {
  const [clickedItem, setClickedItem] = useState<number[]>([]);

  const handleClick = (id: number) => {
    setClickedItem((prevClickedItem) =>
      prevClickedItem.includes(id)
        ? prevClickedItem.filter((item) => item !== id)
        : [...prevClickedItem, id]
    );
  };

  return (
    <ul className="todolist">
      {toDos.map((toDo: string, id: number) => {
        if (
          selectedOption === "All" ||
          (selectedOption === "Completed" && clickedItem.includes(id)) ||
          (selectedOption === "Uncompleted" && !clickedItem.includes(id))
        ) {
          return (
            <li
              key={id}
              className={`text-align--center px--64 py--4 mb--8 ${
                clickedItem.includes(id) ? "clicked" : ""
              }`}
              onClick={() => handleClick(id)}
            >
              {toDo}
            </li>
          );
        }
        return null;
      })}
    </ul>
  );
};

export default ToDoList;
