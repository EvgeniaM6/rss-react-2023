import React, { useEffect } from 'react';
import { TPropsHandle } from '../models';
import { PAGES } from '../constants/pages';

export function Aboutpage(props: TPropsHandle) {
  useEffect(() => {
    const showPageName = (page: string) => props.handleOpenPage(page);
    showPageName(PAGES.about);
  }, [props]);

  return (
    <div className="container about-page">
      <h2>A few words about us</h2>
      <p className="about-page__paragraph">
        Stylish is an online shopping club where you can buy clothes, shoes, bags and accessories of
        of well-known Western and Ukrainian brands at discounts.
      </p>
      <p className="about-page__paragraph paragraph-highlight">Do you like shopping? We too!</p>
      <p className="about-page__paragraph">
        We perfectly navigate the fashion market of Ukraine: our buyers are well versed in fashion
        trends, tastes and needs of Ukrainian buyers and, most importantly, know how to provide the
        the lowest price on the market!
      </p>
      <p className="about-page__paragraph">
        We are constantly updating our assortment, so the latest novelties are announced by us! If
        we choose an assortment that will be presented in our store, then we respect the leather
        detail: the relevance of the cut, the fineness of the fabric, accessories, color solutions
        and trends.
      </p>
      <p className="about-page__paragraph">
        Since 2010, Stylish has been opening the best international brands and brands of talented
        Ukrainian designers to Ukrainians and proving by its own example that buying goods on the
        Internet is simple, fast and cheap. We are constantly working to ensure that Stylish is the
        the single entry point for all entrepreneurs who want to sell online and is convenient and
        secure for all online shopping customers. So, today we have:
      </p>
      <ul className="about-page__paragraph">
        <li>2 million items</li>
        <li>15 thousand brands</li>
        <li>8 million buyers</li>
      </ul>
      <p className="about-page__paragraph">
        The Stylish platform is the meeting point for merchants. Today, the platform cooperates with
        with more than 5,000 partners and plans to increase the volume of cooperation in order to
        constantly expand and improve the range, offer more new products with an acceptable pricing
        pricing policy.
      </p>
    </div>
  );
}
