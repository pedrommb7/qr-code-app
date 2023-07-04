import { render } from "@testing-library/react";
import Heading from "./Heading";

describe("Heading", () => {
  it("should render Heading component correctly", () => {
    render(<Heading type={"h1"} text={"Glintt's ToDo List"} />);
  });
});
