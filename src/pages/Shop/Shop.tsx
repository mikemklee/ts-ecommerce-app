import React, { Dispatch } from 'react';
import { connect } from 'react-redux';
import { Route, RouteComponentProps } from 'react-router-dom';

import CollectionPage from '../Collection/Collection';
import CollectionsOverview from '../../components/CollectionsOverview/CollectionsOverview';
import WithSpinner from '../../components/WithSpinner/WithSpinner';

import {
  firestore,
  convertCollectionsSnapshotToMap,
} from '../../firebase/firebase.utils';
import { RootActionTypes } from '../../redux/rootReducer';
import { getCollections } from '../../redux/shop/shop.actions';
import { Collections } from '../../redux/shop/shop.reducer';

const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);

type Props = ReturnType<typeof mapDispatchToProps> & RouteComponentProps;

class ShopPage extends React.Component<Props> {
  state = {
    loading: true,
  };

  unsubscribeFromSnapshot: Function | null = null;

  componentDidMount() {
    const collectionRef = firestore.collection('collections');
    this.unsubscribeFromSnapshot = collectionRef.onSnapshot(
      async (snapshot) => {
        const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
        this.props.getCollections(collectionsMap);
        this.setState({ loading: false });
      }
    );
  }

  render() {
    const { match } = this.props;
    const { loading } = this.state;
    return (
      <div className='shop-page'>
        <Route
          exact
          path={`${match.path}`}
          render={(props) => (
            <CollectionsOverviewWithSpinner isLoading={loading} {...props} />
          )}
        />
        <Route
          path={`${match.path}/:collectionId`}
          render={(props) => (
            <CollectionPageWithSpinner isLoading={loading} {...props} />
          )}
        />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch: Dispatch<RootActionTypes>) => ({
  getCollections: (collectionsMap: Collections) =>
    dispatch(getCollections(collectionsMap)),
});

export default connect(null, mapDispatchToProps)(ShopPage);
