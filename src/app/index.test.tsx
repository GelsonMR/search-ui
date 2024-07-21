import { render, screen } from '@testing-library/react';
import App from '.';

describe('App component', () => {
  test('renders title', () => {
    render(<App />);
    const linkElement = screen.getByText(/SearchLion/i);
    expect(linkElement).toBeInTheDocument();
  });
});
