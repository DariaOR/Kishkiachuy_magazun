import React from 'react';
import { useSelector } from 'react-redux';
import { selectGoods } from '../store/goodsSlice';
import { selectCart } from '../store/cartSlice';


function Cart() {
    const goods = useSelector(selectGoods);
    const cart = useSelector(selectCart);
    const goodsObj = goods.reduce((accum, item) => {
        accum[item['articul']] = item;
        return accum;
    }, {});

    return (
        <>
            <h1>Cart</h1>
            <table>
                <tbody>
                    <tr>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Total price</th>
                        <th></th>
                        <th></th>
                        <th></th>
                    </tr>
                    {Object.keys(cart).map(item =>
                        <tr key={goodsObj[item] + goodsObj[item]['title']}>
                            <td>{goodsObj[item]['title']}</td>
                            <td>{goodsObj[item]['cost'] * cart[item]} </td>
                            <td>{cart[item]}</td>
                            <td>{goodsObj[item]['cost']}</td>
                            <td><img className="cartpic" src={goodsObj[item]['image']} alt="" /></td>
                            <td><button className="btn-decrement" data-key={goodsObj[item]['articul']}>-</button></td>
                            <td> <button className="btn-del" data-key={goodsObj[item]['articul']}>delete</button> </td>

                        </tr>)}
                </tbody>
            </table>
        </>
    );

}

export default Cart;