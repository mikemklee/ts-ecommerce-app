import React from 'react';

import './CollectionPreview.styles.scss';

import { Item } from '../../redux/shop/Shop.data';
import CollectionItem from '../CollectionItem/CollectionItem';

type Props = {
  title: string;
  items: Item[];
};

const CollectionPreview = ({ title, items }: Props) => {
  return (
    <div className='collection-preview'>
      <h1 className='title'>{title}</h1>
      <div className='preview'>
        {items.slice(0, 4).map((item) => {
          return <CollectionItem key={item.id} item={item} />;
        })}
      </div>
    </div>
  );
};

export default CollectionPreview;
