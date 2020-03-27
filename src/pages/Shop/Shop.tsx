import React from 'react';
import { Collection, SHOP_DATA } from './Shop.data';
import CollectionPreview from '../../components/CollectionPreview/CollectionPreview';

type ShopPageProps = {};
type ShopPageState = {
  collections: Collection[];
};

class ShopPage extends React.Component<ShopPageProps, ShopPageState> {
  constructor(props: ShopPageProps) {
    super(props);

    this.state = {
      collections: SHOP_DATA,
    };
  }

  render() {
    const { collections } = this.state;
    return (
      <div className="collection-preview">
        {collections.map(({ id, ...otherProps }) => (
          <CollectionPreview key={id} {...otherProps} />
        ))}
      </div>
    );
  }
}

export default ShopPage;
