import { ComponentClass } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';

import { RootState } from './../../redux/rootReducer';
import { selectIsCollectionsLoaded } from '../../redux/shop/shop.selectors';

import WithSpinner from '../../components/WithSpinner/WithSpinner';
import CollectionPage from './Collection';

const mapStateToProps = (state: RootState) => ({
  isLoading: !selectIsCollectionsLoaded(state),
});

export default compose(
  connect(mapStateToProps),
  WithSpinner
)(CollectionPage) as ComponentClass;
