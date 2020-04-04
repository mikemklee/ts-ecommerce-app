import React from 'react';
import { connect } from 'react-redux';

import CollectionPreview from '../../components/CollectionPreview/CollectionPreview';

import { RootState } from '../../redux/rootReducer';
import { selectShopCollections } from '../../redux/shop/shop.selectors';

type Props = ReturnType<typeof mapStateToProps>;

const ShopPage = ({ collections }: Props) => (
  <div className='collection-preview'>
    {collections.map(({ id, ...otherProps }) => (
      <CollectionPreview key={id} {...otherProps} />
    ))}
  </div>
);

const mapStateToProps = (state: RootState) => ({
  collections: selectShopCollections(state),
});

export default connect(mapStateToProps)(ShopPage);
