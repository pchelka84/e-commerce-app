import React from 'react';

import { CartItemContainer, CartItemImg, ItemDetails, ItemName} from './cart-item.styles';

const CartItem = ({ item: { imageUrl, price, name, quantity} }) => (
  <CartItemContainer>
    <CartItemImg  src={imageUrl} alt="item"/>
    <ItemDetails>
      <ItemName>{name}</ItemName>
      <span>{quantity} x ${price}</span>

    </ItemDetails>
  </CartItemContainer>
);

export default CartItem