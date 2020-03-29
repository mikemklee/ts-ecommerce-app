import React from 'react';

import './CollectionItem.styles.scss';

import { Item } from '../../pages/Shop/Shop.data';
import CustomButton from '../CustomButton/CustomButton';

type Props = {
  item: Item;
};

const CollectionItem = ({ item }: Props) => {
  return (
    <div className="collection-item">
      <div
        className="image"
        style={{
          backgroundImage: `url(${item.imageUrl})`,
        }}
      />
      <div className="collection-footer">
        <span className="name">{item.name}</span>
        <span className="price">{item.price}</span>
      </div>
      <CustomButton inverted>Add to cart</CustomButton>
    </div>
  );
};

export default CollectionItem;
