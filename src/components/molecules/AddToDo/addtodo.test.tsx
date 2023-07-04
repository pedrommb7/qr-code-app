import { render, screen } from "@testing-library/react";
import AddToDo from "./AddToDo";

describe("AddToDo", () => {
  it("should render AddToDo component correctly", () => {
    render(
      <AddToDo
        setInputValue={() => {}}
        inputValue=""
        toDos={[]}
        setToDos={() => {}}
        setSelectedOption={() => {}}
      />
    );

    expect(screen.getByPlaceholderText("Add todo...")).toBeInTheDocument();
    expect(screen.getByText("Add")).toBeInTheDocument();
  });
});
