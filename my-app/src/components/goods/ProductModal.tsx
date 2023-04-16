import React from 'react';
import { LoadingAnimation } from '../../utils/LoadingAnimation';
import { useGetProductByIdQuery } from '../../redux/goodsApi';

export function ProductModal(props: { productId: string }): JSX.Element {
  const { productId } = props;
  const { data: productObj = null, isLoading, error, isError } = useGetProductByIdQuery(productId);

  return (
    <div>
      {isError && (
        <h3>{`Error: ${'status' in error && error.status} ${
          'data' in error && JSON.stringify(error.data)
        }`}</h3>
      )}
      {isLoading && <div>{<LoadingAnimation />}</div>}
      {productObj && !isError && !isLoading && (
        <div>
          <h2>{productObj.description || '-'}</h2>
          <h3>{productObj.alt_description || '-'}</h3>
          <p>{`Likes: ${productObj.likes || 0}`}</p>
          <p>{`Downloads: ${productObj.downloads || 0}`}</p>
          <p>{`Created at: ${new Date(productObj.created_at).toLocaleString() || '-'}`}</p>
          <p>{`City: ${productObj.location.city || '-'}`}</p>
          <p>{`Country: ${productObj.location.country || '-'}`}</p>
          <div>
            <img src={productObj.user.profile_image.large} alt={productObj.user.name} />
            <div>
              <p>{`User: ${productObj.user.username || '-'}`}</p>
              <p>{`Name: ${productObj.user.name || '-'}`}</p>
              <p>{`instagram: ${productObj.user.instagram_username || '-'}`}</p>
              <p>{`twitter: ${productObj.user.twitter_username || '-'}`}</p>
              <p>{`portfolio: ${productObj.user.portfolio_url || '-'}`}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
