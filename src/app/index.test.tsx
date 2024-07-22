import '@testing-library/react';
import { App } from '.';
import { act, fireEvent, render, screen, waitFor } from './utils/test';
import * as services from './services';
import userEvent from '@testing-library/user-event';

describe('App component', () => {
  let mockGetData: jest.SpyInstance;

  beforeEach(() => {
    mockGetData = jest.spyOn(services, 'getSearchResults');
    mockGetData.mockResolvedValue([
      {
        id: '1',
        title: 'Money Tips',
        url: 'https://letmegooglethat.com/?q=Money%20Tips',
        description: '5 tips for saving money',
        category: 'VIDEOS',
      },
    ]);
  });

  afterEach(() => {
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
    render(<App />);

    const searchFieldElement = screen.getByRole('textbox');
    userEvent.type(searchFieldElement, 'something');

    const buttonElement = screen.getByRole('button', { name: /search/i });
    fireEvent.click(buttonElement);

    const resultTitle = await screen.findByText(/Money Tips/i);
    expect(resultTitle).toBeInTheDocument();
  });

  test('triggers search on enter press while focused on input field and displays results', async () => {
    render(<App />);

    const searchFieldElement = screen.getByRole('textbox');
    // eslint-disable-next-line testing-library/no-unnecessary-act
    await act(async () =>
      userEvent.type(searchFieldElement, 'something{enter}')
    );

    const resultTitle = await screen.findByText(/Money Tips/i);
    expect(resultTitle).toBeInTheDocument();
  });

  test('renders loading state until search results are available', async () => {
    render(<App />);

    const searchFieldElement = screen.getByRole('textbox');
    // eslint-disable-next-line testing-library/no-unnecessary-act
    await act(async () =>
      userEvent.type(searchFieldElement, 'something{enter}')
    );

    await waitFor(() => {
      const loading = screen.getByText(/Loading/i);
      return expect(loading).toBeInTheDocument();
    });

    await waitFor(() => {
      const resultTitle = screen.getByText(/Money Tips/i);
      return expect(resultTitle).toBeInTheDocument();
    });
  });

  test('renders title and description of each search result', async () => {
    render(<App />);

    const searchFieldElement = screen.getByRole('textbox');
    userEvent.type(searchFieldElement, 'something');

    const buttonElement = screen.getByRole('button', { name: /search/i });
    fireEvent.click(buttonElement);

    const resultTitle = await screen.findByText(/Money Tips/i);
    expect(resultTitle).toBeInTheDocument();

    const resultDescription = await screen.findByText(
      /5 tips for saving money/i
    );
    expect(resultDescription).toBeInTheDocument();
  });

  test('renders search result as an anchor that opens in a new tab', async () => {
    render(<App />);

    const searchFieldElement = screen.getByRole('textbox');
    userEvent.type(searchFieldElement, 'something');

    const buttonElement = screen.getByRole('button', { name: /search/i });
    fireEvent.click(buttonElement);

    const link = await screen.findByRole('link', { name: /Money Tips/i });
    expect(link).toHaveAttribute(
      'href',
      'https://letmegooglethat.com/?q=Money%20Tips'
    );
    expect(link).toHaveAttribute('target', '_blank');
  });

  test('renders user-friendly content type of each search result', async () => {
    render(<App />);

    const searchFieldElement = screen.getByRole('textbox');
    userEvent.type(searchFieldElement, 'something');

    const buttonElement = screen.getByRole('button', { name: /search/i });
    fireEvent.click(buttonElement);

    const resultTitle = await screen.findByText(/Video/i);
    expect(resultTitle).toBeInTheDocument();
  });

  test('renders empty state when no results are found', async () => {
    mockGetData.mockResolvedValueOnce([]);

    render(<App />);

    const searchFieldElement = screen.getByRole('textbox');
    userEvent.type(searchFieldElement, 'something');

    const buttonElement = screen.getByRole('button', { name: /search/i });
    fireEvent.click(buttonElement);

    await waitFor(() => {
      const resultTitle = screen.queryByText(/Money Tips/i);
      expect(resultTitle).not.toBeInTheDocument();
    });

    const emptyState = screen.getByText(/No results found for "something"/i);
    expect(emptyState).toBeInTheDocument();
  });
});
