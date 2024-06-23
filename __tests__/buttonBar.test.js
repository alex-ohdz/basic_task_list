import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import ButtonBar from '@/components/ButtonBar';

describe('ButtonBar', () => {
  test('renders all icons with data-testid', () => {
    render(<ButtonBar isTaskEmpty={false} />);

    expect(screen.getByTestId('maximize-2')).toBeInTheDocument();
    expect(screen.getByTestId('calendar')).toBeInTheDocument();
    expect(screen.getByTestId('unlock')).toBeInTheDocument();
    expect(screen.getByTestId('sun')).toBeInTheDocument(); 
    expect(screen.getByTestId('circle-icon')).toBeInTheDocument();
    expect(screen.getByTestId('plus')).toBeInTheDocument();
  });

  test('renders Cancel and Add buttons in desktop view', () => {
    global.innerWidth = 1300;
    global.dispatchEvent(new Event('resize'));

    render(<ButtonBar isTaskEmpty={false} />);
    expect(screen.getByText('Cancel')).toBeInTheDocument();
    expect(screen.getByText('Add')).toBeInTheDocument(); 
  });

  test('renders icon buttons in mobile view', () => {
    global.innerWidth = 500;
    global.dispatchEvent(new Event('resize'));

    render(<ButtonBar isTaskEmpty={false} />);
    expect(screen.queryByText('Cancel')).not.toBeInTheDocument();
    expect(screen.queryByText('Add')).not.toBeInTheDocument(); 
    expect(screen.getByTestId('plus')).toBeInTheDocument();
  });
});
