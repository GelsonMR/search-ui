import { getSearchResults } from '.';
import { api } from '../api';
import { SearchResult } from '../types';

jest.mock('../api');

describe('getSearchResults method', () => {
  const mockGet = api.get as jest.Mock;

  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('should return search results when API call is successful', async () => {
    const mockData: SearchResult[] = [
      {
        id: '1',
        title: 'Money Tips',
        url: 'https://letmegooglethat.com/?q=Money%20Tips',
        description: '5 tips for saving money',
        category: 'VIDEOS',
      },
    ];

    mockGet.mockResolvedValue({ data: mockData });

    const results = await getSearchResults('money');

    expect(results).toEqual(mockData);
    expect(mockGet).toHaveBeenCalledWith('/data', {
      params: { search: 'money' },
    });
  });

  test('should handle API errors', async () => {
    mockGet.mockRejectedValue(new Error('Network Error'));

    await expect(getSearchResults('money')).rejects.toThrow('Network Error');
    expect(mockGet).toHaveBeenCalledWith('/data', {
      params: { search: 'money' },
    });
  });
});
