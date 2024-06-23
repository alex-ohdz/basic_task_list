import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Task from '@/components/Task';

describe('Task', () => {
  const taskProps = {
    id: 1,
    texto: 'This is a task',
    formattedText: '<span>This is a <span style="color: blue;">task</span></span>',
    onDelete: jest.fn(),
  };

  beforeEach(() => {
    fetch.resetMocks();
  });

  test('renders the task with text', () => {
    render(<Task {...taskProps} />);

    const taskLabel = screen.getByText((content, element) => {
      const hasText = (node) => node.textContent === 'This is a task';
      const elementHasText = hasText(element);
      const childrenDontHaveText = Array.from(element?.children || []).every(
        (child) => !hasText(child)
      );
      return elementHasText && childrenDontHaveText;
    });

    expect(taskLabel).toBeInTheDocument();
  });

  test('calls onDelete when checkbox is clicked and API call is successful', async () => {
    fetch.mockResponseOnce(JSON.stringify({ message: 'Task deleted successfully' }));

    render(<Task {...taskProps} />);

    const checkbox = screen.getByRole('checkbox');
    fireEvent.click(checkbox);

    expect(fetch).toHaveBeenCalledTimes(1);
    expect(fetch).toHaveBeenCalledWith('/api/deleteTask', {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ id: taskProps.id }),
    });

    await new Promise((resolve) => setTimeout(resolve, 0));

    expect(taskProps.onDelete).toHaveBeenCalledWith(taskProps.id);
  });

  test('logs error when API call fails', async () => {
    const consoleSpy = jest.spyOn(console, 'error').mockImplementation();
    fetch.mockRejectOnce(new Error('API is down'));

    render(<Task {...taskProps} />);

    const checkbox = screen.getByRole('checkbox');
    fireEvent.click(checkbox);

    expect(fetch).toHaveBeenCalledTimes(1);

    await new Promise((resolve) => setTimeout(resolve, 0));

    expect(consoleSpy).toHaveBeenCalledWith('Error deleting task:', expect.any(Error));

    consoleSpy.mockRestore();
  });
});
