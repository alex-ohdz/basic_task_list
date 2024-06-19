import { render, fireEvent } from "@testing-library/react";
import AddTask from "@/components/AddTask";

test("renderizando AddTask y permitir escribir y tomar datos del input", () => {
  const { getByPlaceholderText, getByText } = render(<AddTask />);

  expect(getByText("Type to add new task")).toBeInTheDocument();

  fireEvent.click(getByText("Type to add new task"));

  const input = getByPlaceholderText("Type to add new task");
  expect(input).toBeInTheDocument();

  fireEvent.change(input, { target: { value: "New Task" } });
  expect(input.value).toBe("New Task");
});
