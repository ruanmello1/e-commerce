import { useContext } from 'react';

import Modal from '../UI/Modal';
import CartItem from './CartItem';
import classes from './Cart.module.css';
import CartContext from '../../store/cart-context';

const Cart = props =>{
    const cartCtx = useContext(CartContext);

    const totalAmount = `R$${cartCtx.totalAmount.toFixed(2)}`;    
    const hasItems = cartCtx.items.length > 0;

    const cartItemRemoveHandler = id => {
        cartCtx.removeItem(id);
    };

    const catItemAddHandler = item => {
        cartCtx.addItem({...item, amount: 1})
    };

    const cartItems = <ul className={classes['cart-items']}>
        {cartCtx.items.map(item =>
            <CartItem key={item.id} name={item.name} amount={item.amount} price={item.price} onRemove={cartItemRemoveHandler.bind(null, item.id)} onAdd={catItemAddHandler.bind(null, item)}/>
        )}
        </ul>;
    return (
        <Modal onClose={props.onClose}>
            {cartItems}
            <div className={classes.total}>
                <span>Valor total:</span>
                <span>{totalAmount}</span>
            </div>
            <div className={classes.actions}>
                <button onClick={props.onClose} className={classes['button--alt']}>Fechar</button>
                {hasItems && <button className={classes.button}>Pedir</button>}      
            </div>
        </Modal>
    )
};

export default Cart;