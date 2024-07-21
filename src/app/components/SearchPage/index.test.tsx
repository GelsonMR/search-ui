import { render, screen } from '@testing-library/react';
import { SearchPage } from '.';

describe('SearchPage component', () => {
  test('renders title', () => {
    render(<SearchPage />);
    const title = screen.getByText(/SearchLion/i);
    expect(title).toBeInTheDocument();
  });
});
