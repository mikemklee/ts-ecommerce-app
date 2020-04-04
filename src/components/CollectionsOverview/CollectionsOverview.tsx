import React from 'react';
import { connect } from 'react-redux';

import './CollectionsOverview.styles.scss';

import CollectionPreview from '../CollectionPreview/CollectionPreview';

import { RootState } from '../../redux/rootReducer';
import { selectCollections } from '../../redux/shop/shop.selectors';

type Props = ReturnType<typeof mapStateToProps>;

const CollectionsOverview = ({ collections }: Props) => (
  <div className='collections-overview'>
    {collections.map(({ id, ...otherProps }) => (
      <CollectionPreview key={id} {...otherProps} />
    ))}
  </div>
);

const mapStateToProps = (state: RootState) => ({
  collections: selectCollections(state),
});

export default connect(mapStateToProps)(CollectionsOverview);
