import { ComponentClass } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';

import { RootState } from './../../redux/rootReducer';
import { selectIsCollectionFetching } from '../../redux/shop/shop.selectors';

import WithSpinner from '../WithSpinner/WithSpinner';
import CollectionsOverview from './CollectionsOverview';

const mapStateToProps = (state: RootState) => ({
  isLoading: selectIsCollectionFetching(state),
});

export default compose(
  connect(mapStateToProps),
  WithSpinner
)(CollectionsOverview) as ComponentClass;
