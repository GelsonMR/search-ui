import { render, screen } from '@testing-library/react';
import App from '.';

describe('App component', () => {
  test('renders title', () => {
    render(<App />);
    const linkElement = screen.getByText(/SearchLion/i);
    expect(linkElement).toBeInTheDocument();
  });

  test.todo('renders application form, search field and button named "Search"');

  test.todo('triggers search on button click and displays results');

  test.todo(
    'triggers search on enter press while focused on input field and displays results'
  );

  test.todo('renders loading state until search results are available');

  test.todo('renders title and description of each search result');

  test.todo('click on a search result opens it in a new tab');

  test.todo('renders user-friendly content type of each search result');

  test.todo('renders empty state when no results are found');
});
