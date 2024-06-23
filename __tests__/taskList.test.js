import React from 'react';
import { render, screen, waitFor, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import TaskList from '@/components/TaskList';

jest.mock('@/components/Task', () => (props) => (
  <div data-testid="task">
    {props.texto}
    <button onClick={() => props.onDelete(props.id)} data-testid={`delete-${props.id}`}>Delete</button>
  </div>
));
jest.mock('@/components/AddTask', () => (props) => (
  <div data-testid="add-task">
    <button onClick={() => props.addTaskToList({ id: 3, texto: 'New Task' })} data-testid="add-button">Add Task</button>
  </div>
));
jest.mock('@/hooks/useTaskInput', () => ({
  useTaskInput: jest.fn(),
}));
jest.mock('@/utils/formatTask', () => ({
  formatTask: jest.fn((text) => `<formatted>${text}</formatted>`),
}));

beforeAll(() => {
  global.fetch = jest.fn(() =>
    Promise.resolve({
      json: () => Promise.resolve([
        { id: 1, texto: 'Task 1' },
        { id: 2, texto: 'Task 2' }
      ])
    })
  );
});

afterAll(() => {
  global.fetch.mockClear();
  delete global.fetch;
});

describe('TaskList', () => {
  test('renders tasks fetched from the server', async () => {
    render(<TaskList />);

    await waitFor(() => {
      const tasks = screen.getAllByTestId('task');
      expect(tasks.length).toBe(2);
      expect(tasks[0]).toHaveTextContent('Task 1');
      expect(tasks[1]).toHaveTextContent('Task 2');
    });
  });

  test('adds a new task to the list', async () => {
    render(<TaskList />);

    fireEvent.click(screen.getByTestId('add-button'));

    await waitFor(() => {
      const tasks = screen.getAllByTestId('task');
      expect(tasks.length).toBe(3);
      expect(tasks[0]).toHaveTextContent('New Task');
      expect(tasks[1]).toHaveTextContent('Task 1');
      expect(tasks[2]).toHaveTextContent('Task 2');
    });
  });

  test('deletes a task from the list', async () => {
    render(<TaskList />);

    await waitFor(() => {
      const tasks = screen.getAllByTestId('task');
      expect(tasks.length).toBe(2);
    });

    fireEvent.click(screen.getByTestId('delete-1'));

    await waitFor(() => {
      const tasks = screen.getAllByTestId('task');
      expect(tasks.length).toBe(1);
      expect(tasks[0]).toHaveTextContent('Task 2');
    });
  });
});
