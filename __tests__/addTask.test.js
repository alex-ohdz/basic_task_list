import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import FeatherIcon from '@/components/FeatherIcon';

describe('FeatherIcon', () => {
  test('renders a feather icon', () => {
    const { container } = render(<FeatherIcon icon="calendar" />);
    const svgElement = container.querySelector('svg.feather-calendar');

    expect(svgElement).toBeInTheDocument();
  });
});
