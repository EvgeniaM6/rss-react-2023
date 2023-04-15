import React, { useEffect, useState } from 'react';
import { LoadingAnimation } from '../../utils/LoadingAnimation';
import { IProduct } from '../../models';
import { getPhotoById } from '../../data/dataRequest';

export function ProductModal(props: { productId: string; isActive: boolean }): JSX.Element {
  const { productId, isActive } = props;

  const [productObj, setProductObj] = useState<IProduct | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [respError, setRespError] = useState('');

  useEffect(() => {
    if (!isActive) return;
    setProductObj(null);
    setRespError('');
    setIsLoading(true);

    getPhotoById(productId)
      .then((productResp) => {
        setProductObj(productResp);
        setRespError('');
      })
      .catch((e) => {
        setProductObj(null);
        setRespError(e.message);
      })
      .finally(() => setIsLoading(false));
  }, [isActive, productId]);

  return (
    <div>
      {respError && <h3>{`Error: ${respError}`}</h3>}
      {isLoading && <div>{<LoadingAnimation />}</div>}
      {productObj && (
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
