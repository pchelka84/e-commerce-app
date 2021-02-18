import React from 'react';
import { connect } from 'react-redux';

import { selectCollections } from './../../redux/shop/shop.selectors';

import './collection.styles.scss';

const CollectionPage = () => (
  <div className='collection-page'>
  <h2>Collection Page</h2></div> 
);

const mapStateToProps = (state, ownProps) => ({
  collection: selectCollections(ownProps.match.params.collectionId)(state)
})

export default connect(mapStateToProps)(CollectionPage);