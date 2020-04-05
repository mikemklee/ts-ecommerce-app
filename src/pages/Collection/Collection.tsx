import React from 'react';
import { connect } from 'react-redux';

import {
  CollectionPageContainer,
  CollectionTitle,
  CollectionItemsContainer,
} from './Collection.styles';

import CollectionItem from '../../components/CollectionItem/CollectionItem';
import { RootState } from '../../redux/rootReducer';
import { selectCollection } from '../../redux/shop/shop.selectors';

type Props = ReturnType<typeof mapStateToProps>;

const CollectionPage = ({ collection }: Props) => {
  if (!collection) return null;

  const { title, items } = collection;
  return (
    <CollectionPageContainer>
      <CollectionTitle>{title}</CollectionTitle>
      <CollectionItemsContainer>
        {items.map((item) => (
          <CollectionItem key={item.id} item={item} />
        ))}
      </CollectionItemsContainer>
    </CollectionPageContainer>
  );
};

const mapStateToProps = (state: RootState, ownProps: any) => ({
  collection: selectCollection(ownProps.match.params.collectionId)(state),
});

export default connect(mapStateToProps)(CollectionPage);
