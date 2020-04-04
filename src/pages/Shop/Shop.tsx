import React from 'react';
import { Route, RouteComponentProps } from 'react-router-dom';

import CollectionPage from '../Collection/Collection';
import CollectionsOverview from '../../components/CollectionsOverview/CollectionsOverview';

type Props = RouteComponentProps;

const ShopPage = ({ match }: Props) => (
  <div className='shop-page'>
    <Route exact path={`${match.path}`} component={CollectionsOverview} />
    <Route path={`${match.path}/:collectionId`} component={CollectionPage} />
  </div>
);

export default ShopPage;
