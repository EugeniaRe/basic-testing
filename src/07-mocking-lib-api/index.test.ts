import axios from 'axios';
import { throttledGetDataFromApi } from './index';

jest.mock('axios');

describe('throttledGetDataFromApi', () => {
  const mockAxiosInstance = {
    get: jest.fn(),
  };

  beforeEach(() => {
    (axios.create as jest.Mock).mockReturnValue(mockAxiosInstance);
    mockAxiosInstance.get.mockClear();
  });

  test('should create instance with provided base url', async () => {
    const expectedBaseURL = 'https://jsonplaceholder.typicode.com';

    mockAxiosInstance.get.mockResolvedValue({ data: {} });

    await throttledGetDataFromApi('/posts/1');

    expect(axios.create).toHaveBeenCalledWith({
      baseURL: expectedBaseURL,
    });
  });

  test('should perform request to correct provided url', async () => {
    // Write your test here
  });

  test('should return response data', async () => {
    // Write your test here
  });
});
