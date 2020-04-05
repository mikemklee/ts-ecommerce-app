import React, { Dispatch } from 'react';
import { connect } from 'react-redux';

import {
  CollectionItemContainer,
  CollectionFooterContainer,
  AddButton,
  BackgroundImage,
  NameContainer,
  PriceContainer,
} from './CollectionItem.styles';

import { RootActionTypes } from '../../redux/rootReducer';
import { Item } from '../../redux/shop/shop.data';
import { addItem } from '../../redux/cart/cart.actions';

type Props = {
  item: Item;
} & ReturnType<typeof mapDispatchToProps>;

const CollectionItem = ({ item, addItem }: Props) => {
  const { name, price, imageUrl } = item;
  return (
    <CollectionItemContainer>
      <BackgroundImage className='image' imageUrl={imageUrl} />
      <CollectionFooterContainer>
        <NameContainer>{name}</NameContainer>
        <PriceContainer>{price}</PriceContainer>
      </CollectionFooterContainer>
      <AddButton onClick={() => addItem(item)} inverted>
        Add to cart
      </AddButton>
    </CollectionItemContainer>
  );
};

const mapDispatchToProps = (dispatch: Dispatch<RootActionTypes>) => ({
  addItem: (item: Item) => dispatch(addItem(item)),
});

export default connect(null, mapDispatchToProps)(CollectionItem);
