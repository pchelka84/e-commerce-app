import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { withRouter } from 'react-router-dom';

import CustomButton from './../custom-button/custom-button.component';
import CartItem from '../cart-item/cart-item.component';
import { selectCartItems } from '../../redux/cart/cart.selectors';
import { toggleCartHidden} from '../../redux/cart/cart.actions.js';
 
import { CartdropdownContainer, CartItems, EmptyMessage } from './cart-dropdown-styles';

const CartDropdown = ({ cartItems, history, dispatch }) => (
<CartdropdownContainer>  
        <CartItems>
          {cartItems.length ? (
            cartItems.map(cartItem => <CartItem key={cartItem.id} item={cartItem}/>)
            ) : 
            (
              <EmptyMessage>Your cart is empty</EmptyMessage>
            )
          }
        </CartItems>  
    <CustomButton onClick={() => {
      history.push('/checkout');
      dispatch(toggleCartHidden())
  }}>
    CHECKOUT</CustomButton>
  </CartdropdownContainer>
);

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems
})

export default withRouter(connect(mapStateToProps)(CartDropdown));