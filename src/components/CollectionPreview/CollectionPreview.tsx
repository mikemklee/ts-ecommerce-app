import React from 'react';

import {
  CollectionPreviewContainer,
  TitleContainer,
  PreviewContainer,
} from './CollectionPreview.styles';

import { Item } from '../../redux/shop/shop.data';
import CollectionItem from '../CollectionItem/CollectionItem';

type Props = {
  title: string;
  items: Item[];
};

const CollectionPreview = ({ title, items }: Props) => {
  return (
    <CollectionPreviewContainer>
      <TitleContainer>{title}</TitleContainer>
      <PreviewContainer>
        {items.slice(0, 4).map((item) => {
          return <CollectionItem key={item.id} item={item} />;
        })}
      </PreviewContainer>
    </CollectionPreviewContainer>
  );
};

export default CollectionPreview;
