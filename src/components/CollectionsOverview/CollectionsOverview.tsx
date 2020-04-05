import React from 'react';
import { connect } from 'react-redux';

import { CollectionsOverviewContainer } from './CollectionsOverview.styles';

import CollectionPreview from '../CollectionPreview/CollectionPreview';

import { RootState } from '../../redux/rootReducer';
import { selectCollectionsForPreview } from '../../redux/shop/shop.selectors';

type Props = ReturnType<typeof mapStateToProps>;

const CollectionsOverview = ({ collections }: Props) => (
  <CollectionsOverviewContainer>
    {collections.map(({ id, ...otherProps }) => (
      <CollectionPreview key={id} {...otherProps} />
    ))}
  </CollectionsOverviewContainer>
);

const mapStateToProps = (state: RootState) => ({
  collections: selectCollectionsForPreview(state),
});

export default connect(mapStateToProps)(CollectionsOverview);
