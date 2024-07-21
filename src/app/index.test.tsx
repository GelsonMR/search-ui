import '@testing-library/react';
import { App } from '.';
import { fireEvent, render, screen } from './utils/test';
import * as services from '../app/services';
import userEvent from '@testing-library/user-event';

const mockGetData = jest.spyOn(services, 'getSearchResults');

describe('App component', () => {
  beforeEach(() => {
    mockGetData.mockReset();
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
    render(<App />);

    const searchFieldElement = screen.getByRole('textbox');
    userEvent.type(searchFieldElement, 'money');

    mockGetData.mockResolvedValue([
      {
        id: '1',
        title: 'Money Tips',
        url: '',
        description: '',
        category: 'BLOG_POSTS',
      },
    ]);

    const buttonElement = screen.getByRole('button', { name: /search/i });
    fireEvent.click(buttonElement);

    const resultTitle = await screen.findByText(/Money Tips/i);
    expect(resultTitle).toBeInTheDocument();
  });

  test.skip('triggers search on enter press while focused on input field and displays results', async () => {
    render(<App />);

    const searchFieldElement = screen.getByRole('textbox');

    mockGetData.mockResolvedValue([
      {
        id: '1',
        title: 'Money Tips',
        url: '',
        description: '',
        category: 'BLOG_POSTS',
      },
    ]);

    userEvent.type(searchFieldElement, 'money{enter}');

    const resultTitle = await screen.findByText(/Money Tips/i);
    expect(resultTitle).toBeInTheDocument();
  });

  test.todo('renders loading state until search results are available');

  test.todo('renders title and description of each search result');

  test.todo('click on a search result opens it in a new tab');

  test.todo('renders user-friendly content type of each search result');

  test.todo('renders empty state when no results are found');
});
