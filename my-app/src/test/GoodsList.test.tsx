import React from 'react';
import { render, screen, act, waitFor } from '@testing-library/react';
import { GoodsList } from '../components/goods/GoodsList';

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
  beforeEach(async () => {
    const searchValue = '';
    const pageNum = 1;
    const setPageAmount = jest.fn();
    const sortBy = 'relevant';

    await act(
      async () =>
        await render(
          <GoodsList
            searchValue={searchValue}
            pageNum={pageNum}
            setPageAmount={setPageAmount}
            sortBy={sortBy}
          />
        )
    );
  });

  it('should render all good cards', async () => {
    await waitFor(() => screen.getByTestId('goods'));
  });
});
