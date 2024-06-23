import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import AddTask from '@/components/AddTask';
import { useTaskInput } from '@/hooks/useTaskInput';

jest.mock('@/components/FeatherIcon', () => (props) => <div data-testid={props.icon} />);
jest.mock('@mui/material', () => ({
  Avatar: (props) => <div {...props} data-testid="avatar" />,
}));

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

    expect(screen.getByText('Type to add new task')).toBeInTheDocument();
  });

  test('renders input field and avatar when editing', () => {
    useTaskInput.mockReturnValue({
      ...useTaskInput(),
      isEditing: true,
    });

    render(<AddTask />);

    expect(screen.getByPlaceholderText('Type to add new task')).toBeInTheDocument();

    expect(screen.getByTestId('avatar')).toBeInTheDocument();
  });

  test('renders formatted task label when editing', () => {
    useTaskInput.mockReturnValue({
      ...useTaskInput(),
      isEditing: true,
      formattedTask: '<span>Formatted task</span>',
    });

    render(<AddTask />);

    expect(screen.getByText('Formatted task')).toBeInTheDocument();
  });
});
