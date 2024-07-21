import { SearchPage } from '.';
import { render, screen } from '../../utils/test';

describe('SearchPage component', () => {
  test('renders title', () => {
    render(<SearchPage />);
    const title = screen.getByText(/SearchLion/i);
    expect(title).toBeInTheDocument();
  });
});
