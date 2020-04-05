import React, { Dispatch } from 'react';
import { connect } from 'react-redux';
import { Route, RouteComponentProps } from 'react-router-dom';

import CollectionPage from '../Collection/Collection';
import CollectionsOverview from '../../components/CollectionsOverview/CollectionsOverview';

import {
  firestore,
  convertCollectionsSnapshotToMap,
} from '../../firebase/firebase.utils';
import { RootActionTypes } from '../../redux/rootReducer';
import { getCollections } from '../../redux/shop/shop.actions';
import { Collections } from '../../redux/shop/shop.reducer';

type Props = ReturnType<typeof mapDispatchToProps> & RouteComponentProps;

class ShopPage extends React.Component<Props> {
  unsubscribeFromSnapshot = null;

  componentDidMount() {
    const collectionRef = firestore.collection('collections');
    collectionRef.onSnapshot(async (snapshot) => {
      const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
      this.props.getCollections(collectionsMap);
    });
  }

  render() {
    const { match } = this.props;
    return (
      <div className='shop-page'>
        <Route exact path={`${match.path}`} component={CollectionsOverview} />
        <Route
          path={`${match.path}/:collectionId`}
          component={CollectionPage}
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
