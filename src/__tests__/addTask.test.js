import { render, fireEvent, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import AddTask from "@/components/AddTask";

jest.mock("@/public/icons/Circle.svg", () => () => (<svg data-testid="circle-icon"></svg>));
jest.mock("@/public/icons/Light.svg", () => () => (<svg data-testid="light-icon"></svg>));

describe("AddTask Component", () => {
  test("rendering AddTask and allowing typing and data fetching from the input", () => {
    render(<AddTask />);
    
    // Verificar que el texto inicial esté presente
    expect(screen.getByText("Type to add new task")).toBeInTheDocument();

    // Hacer click para iniciar la edición
    fireEvent.click(screen.getByText("Type to add new task"));

    // Verificar que el input esté presente y se pueda escribir en él
    const input = screen.getByPlaceholderText("Type to add new task");
    expect(input).toBeInTheDocument();

    fireEvent.change(input, { target: { value: "New Task" } });
    expect(input.value).toBe("New Task");

    // Verificar que el componente ButtonBar se haya renderizado
    expect(screen.getByText("Open")).toBeInTheDocument();
    expect(screen.getByText("Today")).toBeInTheDocument();
    expect(screen.getByText("Public")).toBeInTheDocument();
    expect(screen.getByText("Highlight")).toBeInTheDocument();
    expect(screen.getByText("Estimation")).toBeInTheDocument();

    // Simular pérdida de foco en el input
    fireEvent.blur(input);
    expect(screen.queryByPlaceholderText("Type to add new task")).not.toBeInTheDocument();
  });
});
