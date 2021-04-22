import React from 'react';
import  { withRouter } from 'react-router-dom';

import CollectionItem from '../collection-item/collection-item.component'

import { CollectionPreviewContainer, PreviewContainer, PreviewTitle} from './collection-preview.styles.jsx'

const CollectionPreview = ({ title, items, history, match, routeName }) => (
  <CollectionPreviewContainer>
    <PreviewTitle  onClick={() => history.push(`${match.path}/${routeName}`)}>{title.toUpperCase()}</PreviewTitle> 
    <PreviewContainer>
      {
        items
          .filter((item, idx) => idx < 4)
          .map(item => (
          <CollectionItem key={item.id} item={item} />
        ))
      }
    </PreviewContainer>
  </CollectionPreviewContainer>
  );

  export default withRouter(CollectionPreview);