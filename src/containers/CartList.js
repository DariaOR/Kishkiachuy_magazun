import React from 'react';
import Cart from '../components/Cart';
import { useSelector, useDispatch } from 'react-redux';
import { decrement, del } from '../store/cartSlice';
import { selectCart } from '../store/cartSlice';


function CartList() {
    const dispatch = useDispatch();
    const cart = useSelector(selectCart);


    let clickHandler = (event) => {
        event.preventDefault();
        let t = event.target;
        if (t.classList.contains('btn-del'))
            dispatch(del(t.getAttribute('data-key')));
        if (t.classList.contains('btn-decrement'))
            (dispatch(decrement(t.getAttribute('data-key'))));
    }

    return (
        <div className='cart-field' onClick={clickHandler}>
            <Cart />

        </div>

    );

}
export default CartList;