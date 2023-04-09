import React, { useEffect, useState } from 'react';
import { LoadingAnimation } from '../../utils/LoadingAnimation';
import { IProduct } from '../../models';

export function ProductModal(props: { product: string; isActive: boolean }): JSX.Element {
  const { product, isActive } = props;

  const [productObj, setProductObj] = useState<IProduct | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [respError, setRespError] = useState('');
  const url = `https://api.unsplash.com/photos/${product}?client_id=v5XgTy0t56zK48fAbSktE_YlmfNMaDoLcScy57Tyc28`;

  useEffect(() => {
    if (!isActive) return;
    setProductObj(null);
    setRespError('');
    setIsLoading(true);

    fetch(url)
      .then((response) => {
        return response.json();
      })
      .then((dataObj) => {
        setProductObj(dataObj);
        setRespError('');
      })
      .catch((e) => {
        setProductObj(null);
        setRespError(e.message);
      })
      .finally(() => setIsLoading(false));
  }, [url, isActive]);

  return (
    <div>
      {respError && <h3>{`Error: ${respError}`}</h3>}
      {isLoading && <div>{<LoadingAnimation />}</div>}
      {productObj && (
        <div>
          <h2>{productObj.description || '-'}</h2>
          <h3>{productObj.alt_description || '-'}</h3>
          <img width={200} src={productObj.urls.full} alt={productObj.description} />
          <p>{`Likes: ${productObj.likes || 0}`}</p>
          <p>{`Downloads: ${productObj.downloads || 0}`}</p>
          <p>{`Created at: ${productObj.created_at || '-'}`}</p>
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
