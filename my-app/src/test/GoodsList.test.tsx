import React from 'react';
import { render, screen, act, waitFor } from '@testing-library/react';
import { GoodsList } from '../components/goods/GoodsList';
import * as Redux from 'react-redux';
import { IProduct, IProductsRes } from '../models';
import { Provider } from 'react-redux';
import store from '../store';

jest.mock('react-redux', () => ({
  ...jest.requireActual('react-redux'),
  useSelector: jest.fn(),
}));

const productResp = {
  total: 1,
  total_pages: 1,
  results: [
    {
      id: '111',
      created_at: '',
      updated_at: '',
      urls: {
        raw: '',
        full: '',
        regular: '',
        small: '',
        thumb: '',
        small_s3: '',
      },
      description: '',
      alt_description: '',
      location: '',
    },
  ],
};

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve(productResp),
  })
) as jest.Mock;

describe('GoodsList', () => {
  const mockedState: IProductsRes | IProduct[] = [];

  beforeEach(async () => {
    (Redux.useSelector as jest.Mock).mockImplementation((callback) => {
      return callback(mockedState);
    });
    jest.spyOn(Redux, 'useSelector').mockReturnValue([]);
    const pageNum = 1;
    const setPageAmount = jest.fn();
    const sortBy = 'relevant';

    await act(() =>
      render(
        <Provider store={store}>
          <GoodsList pageNum={pageNum} setPageAmount={setPageAmount} sortBy={sortBy} />
        </Provider>
      )
    );
  });

  it('should render all good cards', async () => {
    await waitFor(() => screen.getByTestId('goods'));
  });
});
