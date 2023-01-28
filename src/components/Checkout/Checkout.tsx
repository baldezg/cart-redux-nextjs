import React from 'react';
import * as Dialog from '@radix-ui/react-dialog';
import Button from '../Button/Button';
import shoppingCart from '../../assets/img/shopping-cart.svg';
import styles from './Checkout.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { incrementQuantity, decrementQuantity, removeFromCart } from '../../redux/cart.slice';

export default function DialogExample() {
    
    type State = {
        cart: {
            items: {
                id: string;
                title: string;
                price: number;
                quantity: number;
            }[];
        };
    };

    const cart = useSelector((state : State) => state.cart);
    const dispatch = useDispatch();
    
    const getItemsCount = () => {
         return cart.items.reduce((accumulator, item) => accumulator + item.quantity, 0).toString();
      };

    return (
        <Dialog.Root>
            <Dialog.Trigger asChild>
                <Button className="btn-checkout" icon={shoppingCart} text={getItemsCount()} />
            </Dialog.Trigger>
            <Dialog.Portal className={styles.Portal} >
                <Dialog.Overlay className={styles.DialogOverlay}>
                <Dialog.Content className={styles.DialogContent}>
                    <div className={styles.DialogHeader}>
                    <Dialog.Title className={styles.DialogTitle}>Carrinho de Compras</Dialog.Title>
                    <Dialog.Close className="DialogClose">
                        <Button className="btn-close" icon={shoppingCart} text="Fechar" />
                    </Dialog.Close>
                    </div>
                    {cart.items.length === 0 ? (
                        <Dialog.Description className="DialogDescription">
                            <p>Seu carrinho está vazio</p>
                        </Dialog.Description>
                    ) : ( 
                        <Dialog.Description className="DialogDescription">
                            <ul>
                                {cart.items.map((item) => (
                                    <li key={item.id}>
                                        <div>
                                            <strong>{item.title}</strong> - R$ {item.price} x {item.quantity}
                                        </div>
                                        <div>
                                            <Button icon={shoppingCart} className="btn-increment" onClick={() => dispatch(incrementQuantity(item.id))} text="+" />
                                            <Button icon={shoppingCart} className="btn-decrement" onClick={() => dispatch(decrementQuantity(item.id))} text="-" />
                                            <Button icon={shoppingCart} className="btn-remove" onClick={() => dispatch(removeFromCart(item.id))} text="Remover" />
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </Dialog.Description>
                    )}

                    <Dialog.Description className="DialogDescription">
                        <p>Total: R$ {cart.items.reduce((total, item) => total + item.price * item.quantity, 0)}</p>
                    </Dialog.Description>

                </Dialog.Content>
                </Dialog.Overlay>
            </Dialog.Portal>
            </Dialog.Root>
    );
    }

    
