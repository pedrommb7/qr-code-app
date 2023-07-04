import React, { FormEvent, FC } from "react";
import Input from "../../atoms/Input/Input";
import Button from "../../atoms/Button/Button";
import Select from "../../atoms/Select/Select";
import Form from "../../atoms/Form/Form";
import { AddToDoProps } from "./types";

const AddToDo: FC<AddToDoProps> = ({
  setInputValue,
  inputValue,
  toDos,
  setToDos,
  setSelectedOption,
}) => {
  //FormEvent is a generic type representing an event that takes place in a form. It is part of the React library and extends from the SyntheticEvent interface.
  //It is used to type events that occur within a form, such as submission or change events
  const handleToDo = (event: FormEvent) => {
    event?.preventDefault();
    if (inputValue) {
      setToDos([...toDos, inputValue]);
      setInputValue("");
    }
  };

  return (
    <Form id={"addToDos-form"} className="flex mt--24 mb--8">
      <div className="mr--8">
        <Input
          type={"text"}
          placeholder="Add todo..."
          onChange={(event) => setInputValue(event.target.value)}
          className="mr--4"
          ariaLabel="Add Todo"
        />
        <Button
          children={"Add"}
          onClick={handleToDo}
          className="mr--24"
          ariaLabel="Add Todo"
        />
      </div>
      <Select
        name="Select filter"
        options={["All", "Completed", "Uncompleted"]}
        onChange={(event) => setSelectedOption(event.target.value)}
        ariaLabel="Select a filter to apply"
      />
    </Form>
  );
};

export default AddToDo;
