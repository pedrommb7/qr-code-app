import { render } from "@testing-library/react";
import ToDoList from "./ToDoList";

describe("ToDoList", () => {
  it("should render ToDoList component correctly", () => {
    render(<ToDoList toDos={[]} selectedOption={"All"} />);
  });
});
