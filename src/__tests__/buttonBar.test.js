import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import ButtonBar from '@/components/ButtonBar';

jest.mock('@/public/icons/Circle.svg', () => () => (<svg data-testid="circle-icon"></svg>));
jest.mock('@/public/icons/Light.svg', () => () => (<svg data-testid="light-icon"></svg>));

describe('ButtonBar', () => {
  test('renders Open button with maximize icon', () => {
    render(<ButtonBar />);
    const openButton = screen.getByText('Open');
    const maximizeIcon = screen.getByTestId('maximize-2');

    expect(openButton).toBeInTheDocument();
    expect(maximizeIcon).toBeInTheDocument();
  });

  test('renders Today, Public, Highlight, and Estimation buttons', () => {
    render(<ButtonBar />);
    const todayButton = screen.getByText('Today');
    const publicButton = screen.getByText('Public');
    const highlightButton = screen.getByText('Highlight');
    const estimationButton = screen.getByText('Estimation');

    expect(todayButton).toBeInTheDocument();
    expect(publicButton).toBeInTheDocument();
    expect(highlightButton).toBeInTheDocument();
    expect(estimationButton).toBeInTheDocument();
  });

  test('renders custom icons for Highlight and Estimation', () => {
    render(<ButtonBar />);
    const lightIcon = screen.getByTestId('light-icon');
    const circleIcon = screen.getByTestId('circle-icon');

    expect(lightIcon).toBeInTheDocument();
    expect(circleIcon).toBeInTheDocument();
  });

  test('renders Cancel and Add buttons', () => {
    render(<ButtonBar />);
    const cancelButton = screen.getByText('Cancel');
    const addButton = screen.getByText('Add');

    expect(cancelButton).toBeInTheDocument();
    expect(addButton).toBeInTheDocument();
  });
});
