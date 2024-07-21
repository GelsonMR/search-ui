import '@testing-library/react';
import { App } from '.';
import { act, fireEvent, render, screen, waitFor } from './utils/test';
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

    mockGetData.mockResolvedValue([
      {
        id: '1',
        title: 'Money Tips',
        url: '',
        description: '',
        category: 'BLOG_POSTS',
      },
    ]);

    const searchFieldElement = screen.getByRole('textbox');
    userEvent.type(searchFieldElement, 'money');

    const buttonElement = screen.getByRole('button', { name: /search/i });
    fireEvent.click(buttonElement);

    const resultTitle = await screen.findByText(/Money Tips/i);
    expect(resultTitle).toBeInTheDocument();
  });

  test('triggers search on enter press while focused on input field and displays results', async () => {
    render(<App />);

    mockGetData.mockResolvedValue([
      {
        id: '1',
        title: 'Money Tips',
        url: '',
        description: '',
        category: 'BLOG_POSTS',
      },
    ]);

    const searchFieldElement = screen.getByRole('textbox');
    // eslint-disable-next-line testing-library/no-unnecessary-act
    await act(async () => userEvent.type(searchFieldElement, 'money{enter}'));

    const resultTitle = await screen.findByText(/Money Tips/i);
    expect(resultTitle).toBeInTheDocument();
  });

  test('renders loading state until search results are available', async () => {
    render(<App />);

    mockGetData.mockImplementation(async () => {
      await new Promise((resolve) => setTimeout(resolve, 5000));
      return [
        {
          id: '1',
          title: 'Money Tips',
          url: '',
          description: '',
          category: 'BLOG_POSTS',
        },
      ];
    });

    const searchFieldElement = screen.getByRole('textbox');
    // eslint-disable-next-line testing-library/no-unnecessary-act
    await act(async () => userEvent.type(searchFieldElement, 'money{enter}'));

    await waitFor(() => {
      const loading = screen.getByText(/Loading/i);
      return expect(loading).toBeInTheDocument();
    });

    await waitFor(() => {
      const resultTitle = screen.getByText(/Money Tips/i);
      return expect(resultTitle).toBeInTheDocument();
    });
  });

  test.todo('renders title and description of each search result');

  test.todo('click on a search result opens it in a new tab');

  test.todo('renders user-friendly content type of each search result');

  test.todo('renders empty state when no results are found');
});
