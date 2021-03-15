import React from 'react';

import CollectionItem from '../collection-item/collection-item.component'

import { CollectionPreviewContainer, PreviewContainer, PreviewTitle} from './collection-preview.styles.jsx'

const CollectionPreview = ({ title, items }) => (
  <CollectionPreviewContainer>
    <PreviewTitle>{title.toUpperCase()}</PreviewTitle> 
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

  export default CollectionPreview;