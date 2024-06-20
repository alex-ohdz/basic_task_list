import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import ButtonBar from '@/components/ButtonBar';

describe('ButtonBar', () => {
  test('renders all icons with data-testid', () => {
    render(<ButtonBar />);

    expect(screen.getByTestId('maximize-2')).toBeInTheDocument();
    expect(screen.getByTestId('calendar')).toBeInTheDocument();
    expect(screen.getByTestId('unlock')).toBeInTheDocument();
    expect(screen.getByTestId('light-icon')).toBeInTheDocument();
    expect(screen.getByTestId('circle-icon')).toBeInTheDocument();
    expect(screen.getByTestId('plus')).toBeInTheDocument();
  });

  test('renders Cancel and Ok buttons in desktop view', () => {
    // Force desktop view
    global.innerWidth = 1300;
    global.dispatchEvent(new Event('resize'));

    render(<ButtonBar />);
    expect(screen.getByText('Cancel')).toBeInTheDocument();
    expect(screen.getByText('Ok')).toBeInTheDocument();
  });

  test('renders icon buttons in mobile view', () => {
    // Force mobile view
    global.innerWidth = 1000;
    global.dispatchEvent(new Event('resize'));

    render(<ButtonBar />);
    expect(screen.queryByText('Cancel')).not.toBeInTheDocument();
    expect(screen.queryByText('Ok')).not.toBeInTheDocument();
    expect(screen.getByTestId('plus')).toBeInTheDocument();
  });
});
