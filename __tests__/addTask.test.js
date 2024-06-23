import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import AddTask from '@/components/AddTask';
import { useTaskInput } from '@/hooks/useTaskInput';

// Mock de FeatherIcon y Avatar
jest.mock('@/components/FeatherIcon', () => (props) => <div data-testid={props.icon} />);
jest.mock('@mui/material', () => ({
  Avatar: (props) => <div {...props} data-testid="avatar" />,
}));

// Mock de useTaskInput
jest.mock('@/hooks/useTaskInput', () => ({
  useTaskInput: jest.fn(),
}));

describe('AddTask', () => {
  beforeEach(() => {
    useTaskInput.mockReturnValue({
      task: '',
      isTaskEmpty: true,
      isEditing: false,
      setIsEditing: jest.fn(),
      handleInputChange: jest.fn(),
      handleInputBlur: jest.fn(),
      handleIconClick: jest.fn(),
      handleFormatText: jest.fn(),
      textareaRef: { current: null },
      formattedTask: '',
    });
  });

  test('renders AddTask component with initial elements', () => {
    render(<AddTask />);

    // Verifica que el botón plus-square esté presente
    expect(screen.getByTestId('plus-square')).toBeInTheDocument();

    // Verifica que el texto "Type to add new task" esté presente
    expect(screen.getByText('Type to add new task')).toBeInTheDocument();
  });

  test('renders input field and avatar when editing', () => {
    useTaskInput.mockReturnValue({
      ...useTaskInput(),
      isEditing: true,
    });

    render(<AddTask />);

    // Verifica que el campo de entrada esté presente
    expect(screen.getByPlaceholderText('Type to add new task')).toBeInTheDocument();

    // Verifica que el avatar esté presente
    expect(screen.getByTestId('avatar')).toBeInTheDocument();
  });

  test('renders formatted task label when editing', () => {
    useTaskInput.mockReturnValue({
      ...useTaskInput(),
      isEditing: true,
      formattedTask: '<span>Formatted task</span>',
    });

    render(<AddTask />);

    // Verifica que el label con la tarea formateada esté presente
    expect(screen.getByText('Formatted task')).toBeInTheDocument();
  });
});
