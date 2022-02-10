import React from "react";

import shopData from "../../utils/shop.data.json";

import CollectionPreview from "../../components/preview-collection/preview-collection.component";

export default function ShopPage() {
  console.log(shopData[0]);
  return (
    <div className="shop-page">
      {shopData.map(({ id, ...otherProps }) => (
        <CollectionPreview key={id} {...otherProps} />
      ))}
    </div>
  );
}
