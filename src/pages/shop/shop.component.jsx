import React from "react";

import SHOP_DATA from "../../utils/shop.data.js";

import CollectionPreview from "../../components/collection-preview/collection-preview.component";

export default function ShopPage() {
  // console.log(shopData[0]);
  return (
    <div className="shop-page">
      {SHOP_DATA.map(({ id, ...otherProps }) => (
        <CollectionPreview key={id} {...otherProps} />
      ))}
    </div>
  );
}
