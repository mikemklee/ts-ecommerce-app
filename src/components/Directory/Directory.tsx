import React from 'react';
import { connect } from 'react-redux';

import './Directory.styles.scss';

import MenuItem from '../MenuItem/MenuItem';

import { RootState } from '../../redux/rootReducer';
import { selectDirectorySections } from '../../redux/directory/directory.selectors';

type Props = ReturnType<typeof mapStateToProps>;

const Directory = ({ sections }: Props) => (
  <div className='directory-menu'>
    {sections.map(({ id, title, imageUrl, linkUrl, size }) => {
      return (
        <MenuItem
          key={id}
          title={title}
          imageUrl={imageUrl}
          linkUrl={linkUrl}
          size={size}
        />
      );
    })}
  </div>
);

const mapStateToProps = (state: RootState) => ({
  sections: selectDirectorySections(state),
});

export default connect(mapStateToProps)(Directory);
