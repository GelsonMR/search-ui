import '@testing-library/react';
import { App } from '.';
import { fireEvent, render, screen } from './utils/test';
import { api } from './api';

jest.mock('./api');

describe('App component', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('renders application form, search field and button named "Search"', () => {
    render(<App />);

    const formElement = screen.getByRole('form');
    expect(formElement).toBeInTheDocument();

    const searchFieldElement = screen.getByRole('textbox');
    expect(searchFieldElement).toBeInTheDocument();

    const buttonElement = screen.getByRole('button', { name: /search/i });
    expect(buttonElement).toBeInTheDocument();
  });

  test('triggers search on button click and displays results', async () => {
    jest
      .spyOn(api, 'get')
      .mockImplementation(
        jest.fn(() =>
          Promise.resolve({ data: [{ id: 1, title: 'Money Tips' }] })
        )
      );
    render(<App />);

    const searchFieldElement = screen.getByRole('textbox');
    fireEvent.input(searchFieldElement, {
      target: {
        value: 'money',
      },
    });

    const buttonElement = screen.getByRole('button', { name: /search/i });
    fireEvent.click(buttonElement);

    const resultTitle = await screen.findByText(/Money Tips/i);
    expect(resultTitle).toBeInTheDocument();
  });

  test.todo(
    'triggers search on enter press while focused on input field and displays results'
  );

  test.todo('renders loading state until search results are available');

  test.todo('renders title and description of each search result');

  test.todo('click on a search result opens it in a new tab');

  test.todo('renders user-friendly content type of each search result');

  test.todo('renders empty state when no results are found');
});
