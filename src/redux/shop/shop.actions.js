import ShopActionTypes from './shop.types';

export const updateCollections = (collecionsMap) => ({
  type: ShopActionTypes.UPDATE_COLLECTIONS,
  payload: collecionsMap
})
