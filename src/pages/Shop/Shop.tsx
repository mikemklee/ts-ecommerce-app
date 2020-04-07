import React, { Dispatch } from 'react';
import { connect } from 'react-redux';
import { Route, RouteComponentProps } from 'react-router-dom';

import CollectionsOverviewContainer from '../../components/CollectionsOverview/CollectionsOverview.container';
import CollectionPageContainer from '../Collection/Collection.container';

import { RootActionTypes } from '../../redux/rootReducer';
import { getCollectionsRequest } from '../../redux/shop/shop.actions';

type Props = ReturnType<typeof mapDispatchToProps> & RouteComponentProps;

class ShopPage extends React.Component<Props> {
  componentDidMount() {
    this.props.getCollectionsRequest();
  }

  render() {
    const { match } = this.props;
    return (
      <div className='shop-page'>
        <Route
          exact
          path={`${match.path}`}
          component={CollectionsOverviewContainer}
        />
        <Route
          path={`${match.path}/:collectionId`}
          component={CollectionPageContainer}
        />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch: Dispatch<RootActionTypes>) => ({
  getCollectionsRequest: () => dispatch(getCollectionsRequest()),
});

export default connect(null, mapDispatchToProps)(ShopPage);
